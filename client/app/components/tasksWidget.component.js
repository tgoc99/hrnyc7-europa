angular.module('tasksWidget', []);

angular.
  module('tasksWidget').
  component('tasksWidget', {
    template:
    `
    <md-card id="tasks-widget" class='widget'>
      <span class="md-headline">Your upcoming tasks </span>

      <div class="input-container">
        <input type="text" placeholder="Add a new task..." ng-model="inputValue"></input>
        <md-button class="md-icon-button" ng-click="$ctrl.createNewTask(inputValue); inputValue = null">
            <md-icon>add</md-icon>
        </md-button>
      </div>

      <md-content>

        <ul>
          <li ng-repeat="task in $ctrl.tasksList">
            <md-checkbox>{{task.description}}</md-checkbox>
          </li>
        </ul>

      </md-content>
    </md-card>
    `,
    controller: function() {

      // uncomment this for API call
      // this.user = User.getAllData();
      // use this meanwhile
      this.user = {
        tasksList: [
          // {
          //   description: 'Bring back that Mulan szechuan McNugget sauce'
          // },
          // {
          //   description: 'Save the earth'
          // },
          // {
          //   description: 'Finish Greenfield project'
          // },
          // {
          //   description: 'Graduate from Hack Reactor'
          // },
          // {
          //   description: 'Become a billionare'
          // },
        ]
      };

      this.tasksList = this.user.tasksList;

      // we are not worrying about dates... for now

      this.createNewTask = function(description) {

        if(description && description.length > 0) {
          this.tasksList.push({
            description: description,
            dateCreated: new Date()
          });
        }

        // update database
      }

      this.deleteTask = function(description) {

        this.tasksList = this.tasksList.filter(function(task) {
          return task.description !== description;
        });


        // update database
      }
    }
  });
