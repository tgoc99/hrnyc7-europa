angular.module('profileInfoWidget', []);

angular.
  module('profileInfoWidget').
  component('profileInfoWidget', {
    template:
    `
    <md-card id="profile-widget" class='widget'>
      <img class="profile-img" src="{{$ctrl.imageUrl}}">
      <span class="md-headline">{{$ctrl.username}}</span>
      <p>{{$ctrl.email}}</p>
      <p>{{$ctrl.city}}, {{$ctrl.state}}</p>
      <p>Active Applications: {{$ctrl.activeApplications}}</p>
    </md-card>
    `,
    controller: function() {
      // sample data
      this.imageUrl = 'https://i.imgflip.com/xyx99.jpg?a414816';
      this.username = 'Harold Fulanito';
      this.email = 'harold1000@gmail.com';
      this.city = 'New York City'; // add to schema?
      this.state = 'NY'; // add to schema?
      this.activeApplications = 4; // loop through user.jobs to get this
    }
  });
