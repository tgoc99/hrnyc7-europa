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
        <md-button class="md-icon-button" ng-click="$ctrl.createTask(inputValue); inputValue = null">
            <md-tooltip md-direction="top">Add Task</md-tooltip>
            <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button" ng-click="$ctrl.deleteAllCompleted()">
            <md-tooltip md-direction="top">Remove Completed Tasks</md-tooltip>
            <md-icon>delete</md-icon>
        </md-button>

        <!-- <md-button class="md-icon-button" ng-click="">
            <md-tooltip md-direction="top">Edit Mode</md-tooltip>
            <md-icon>edit_mode</md-icon>
        </md-button> -->
      </div>

      <md-content>

        <ul>
          <li ng-repeat="task in $ctrl.tasksList">
            <md-checkbox ng-checked="task.completed" ng-click="$ctrl.toggleCompleted(task._id, task.completed)">{{task.name}}</md-checkbox>
          </li>
        </ul>



      </md-content>
    </md-card>
    `,
    //  ng-change="$ctrl.toggleCompleted(task._id, task.completed)"
    controller: function($log, Tasks) {

      this.getTasks = function() {
        Tasks.get().then(data => {
          this.tasksList = data || [];
          console.log('tasks: ', this.tasksList);
        });
      }
      this.getTasks();

      this.createTask = function(name) {
        if(name && name.length > 0) {
          //this.tasksList.push({ name: name });
          //console.log('tasks: ', this.tasksList);

          Tasks.create({ name: name }).then(res => {
            //console.log('tasks: ', res);
            this.getTasks();
            //console.log('tasks list:', this.tasksList);
          });
        }
      }


      this.deleteTask = function(id) {

        var query = JSON.stringify({ _id: id });

        //console.log('deleting task: ', query);

        Tasks.delete(query).then(res => {
          //console.log(res);
          this.getTasks();
        });
      }



      this.updateTask = function(id, name, completed) {

        // for(var i = 0; i < this.tasksList.length; i++) {
        //   if(id === this.tasksList[i]._id) {
        //     var current = this.tasksList[i].completed;
        //   }
        // }

        var query = { _id: id };


        if(name) {
          query.name = name;
        }

        if(typeof completed === 'boolean') {
          //if(completed !== current) {
            query.completed = completed;
          //}
        }

        query = JSON.stringify(query);
        //console.log('updating task: ', query);

        Tasks.update(query).then(res => {
          //console.log(res);
          this.getTasks();
        });
      }

      this.toggleCompleted = function(id, completed) {
        //console.log(id, completed);
        this.updateTask(id, null, !completed);
      }

      this.deleteAllCompleted = function() {
        this.tasksList.forEach(task => {
          if(task.completed) {
            this.deleteTask(task._id);
          }
        });
      }

    }
  });
