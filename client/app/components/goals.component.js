angular.module('goalsWidget', []);

angular.
  module('goalsWidget').
  component('goalsWidget', {
    template:
    `
    <md-card id="goals-widget" class='widget'>
      <span class="md-headline">Your current goal </span>
      <p>Complete {{$ctrl.goal}} job applications</p>
      <div class="bar-back">
        <div class="bar-front">
          {{$ctrl.percentage}}
        </div>
      </div>
      <p>{{$ctrl.current}} / {{$ctrl.goal}}</p>
    </md-card>
    `,
    controller: function() {
      // sample data
      this.goal = 10;
      this.current = 4;
      this.percentage = `${this.current / this.goal * 100}%`;
    }
  });
