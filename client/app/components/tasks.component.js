angular.module('tasksWidget', []);

angular.
  module('tasksWidget').
  component('tasksWidget', {
    template:
    `
    <md-card id="tasks-widget" class='widget'>
      <span class="md-headline">Your upcoming tasks </span>
      <md-content>
        <ul>
          <md-checkbox ng-repeat="task in $ctrl.tasksList">{{task.description}}</md-checkbox>
        </ul>
      </md-content>
    </md-card>
    `,
    controller: function() {
      // sample data
      this.tasksList =
      [
        {
          description: 'Bring back that Mulan szechuan McNugget sauce',
          // other fields?
        },
        {
          description: 'Save the earth',
        },
        {
          description: 'Finish Greenfield project',
        },
        {
          description: 'Graduate from Hack Reactor',
        },
        {
          description: 'Become a billionare',
        },
      ];
    }
  });
