angular.module('goalsWidget', []);

angular.
  module('goalsWidget').
  component('goalsWidget', {
    template:
    `
    <md-card id="goals-widget" class='widget'>
      <md-button id="goals-widget-settings" class="md-icon-button settings-btn">
        <md-tooltip md-direction="top">Change Weekly Goal</md-tooltip>
        <md-icon>settings</md-icon>
      </md-button>

      <span class="md-headline">Current Goal</span>
      <p>Complete {{$ctrl.goal}} Job Applications this Week!</p>

      <div class="progress-bar-back">
        <div class="progress-bar-front" style="{{$ctrl.setPercentageStyle()}}">
          {{$ctrl.setPercentage()}}
        </div>
      </div>

      <p>{{$ctrl.composeMessage()}}</p>
    </md-card>
    `,
    controller: function() {
      // sample data
      this.goal = 10;
      this.current = 11; // loop through user.jobs to get this

      this.setPercentage = function() {
        var completed = this.current >= this.goal;
        return completed ?
        '100%' :
        `${this.current / this.goal * 100}%`
      };

      this.setPercentageStyle = function() {
        return `width: ${this.setPercentage()}`;
      }

      this.composeMessage = function() {
        var completed = this.current >= this.goal;
        return completed ?
        'Congratulations! You have completed your weekly goal' :
        `${this.current} / ${this.goal}`
      };
    }
  });
