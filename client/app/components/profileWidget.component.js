angular.module('profileWidget', []);

angular.
  module('profileWidget').
  component('profileWidget', {
    template:
    `
    <md-card id="profile-widget" class='widget'>
      <img class="profile-img" src="{{$ctrl.user.profilePic}}">
      <span class="md-headline">{{$ctrl.user.username}}</span>
      <p>{{$ctrl.user.city}}, {{$ctrl.user.state}}</p>
      <p>Active Applications: {{$ctrl.activeApplications}}</p>
      <p>{{$ctrl.user.email}}</p>
      <button id="profile-add-job" ng-click="$ctrl.handleAddJobClick()">
        <md-icon>add</md-icon>Add New Job
      </button>
    </md-card>
    `,
    controller: function($location, User) {
      // uncomment this for API call
      // this.user = User.getAllData();
      // use this meanwhile
      this.user = {
        username: 'Rick Sanchez',
        profilePic: 'http://agarioskins.com/submitted/useruploads/Rick%20sanchez.png',
        city: 'New York City',
        state: 'NY',
        email: 'rickdabeast@gmail.com',
        jobs: [
          {active: true},
          {active: true},
          {active: true},
          {active: true}
        ]
      };

      // add to schema...
      // city
      // state

      // get number of active applications
      this.activeApplications = this.user.jobs.reduce((acc, job) => {
        return job.active ? acc + 1 : acc;
      }, 0);

      this.handleAddJobClick = function() {
        $location.path('input');
      }
    }

    // to do
    // insert setting button
    // make it clickable (display a dropdown)
    // handle edit info
    // handle delete user
  });
