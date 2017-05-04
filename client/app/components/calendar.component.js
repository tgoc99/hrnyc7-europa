angular.module('calendarWidget', []);

angular.
  module('calendarWidget').
  component('calendarWidget', {
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
      this.city = 'New York City';
      this.state = 'NY';
      this.activeApplications = 4;
    }
  });
