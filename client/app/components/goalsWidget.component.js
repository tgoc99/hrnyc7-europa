angular.module('goalsWidget', []);

angular.
  module('goalsWidget').
  component('goalsWidget', {
    template:
    `
    <md-card id="goals-widget" class='widget'>
      <md-menu>
        <md-button id="goals-widget-settings" class="md-icon-button settings-btn" ng-click="$ctrl.openMenu($mdMenu, $event)">
          <md-tooltip md-direction="top">Change Weekly Goal</md-tooltip>
          <md-icon>settings</md-icon>
        </md-button>
        <md-menu-content width="4">
          <md-menu-item>
            <label><input ng-model="$ctrl.currentSelectedGoal" type="radio" name="goal" value="Basic">Basic (2 Applications)</label>
          </md-menu-item>
          <md-menu-item>
            <label><input ng-model="$ctrl.currentSelectedGoal" type="radio" name="goal" value="Relaxed">Relaxed (4 Applications)</label>
          </md-menu-item>
          <md-menu-item>
            <label><input ng-model="$ctrl.currentSelectedGoal" type="radio" name="goal" value="Normal">Normal (8 Applications)</label>
          </md-menu-item>
          <md-menu-item>
            <label><input ng-model="$ctrl.currentSelectedGoal" type="radio" name="goal" value="Serious">Serious (16 Applications)</label>
          </md-menu-item>
          <md-menu-item>
            <label><input ng-model="$ctrl.currentSelectedGoal" type="radio" name="goal" value="Intense">Intense (32 Applications)</label>
          </md-menu-item>

          <md-menu-divider></md-menu-divider>

          <md-menu-item>
            <md-button ng-click="$ctrl.handleSaveChanges($ctrl.currentSelectedGoal)">
              <md-icon>check_circle</md-icon>
              Apply Changes
            </md-button>
          </md-menu-item>

        </md-menu-content>
      </md-menu>

      <span class="md-headline">Current Goal</span>
      <p>Complete {{$ctrl.goal}} Job Applications this Week! Complete by {{$ctrl.parseEndOfWeek()}}</p>

      <div class="progress-bar-back">
        <div class="progress-bar-front" style="{{$ctrl.setPercentageStyle()}}">
          {{$ctrl.setPercentage()}}
        </div>
      </div>

      <p>{{$ctrl.composeMessage()}}</p>
    </md-card>
    `,
    controller: function() {

      this.goalTarget = {
        'Basic': 2,
        'Relaxed': 4,
        'Normal': 8,
        'Serious': 16,
        'Intense': 32
      }

      // uncomment this for API call
      // this.user = User.getAllData();
      // use this meanwhile
      this.user = {
        currentGoal: 'Normal',
        jobs: [
          {dateCreated: '05/05/2017'},
          {dateCreated: '05/05/2017'},
          {dateCreated: '04/05/2017'},
          {dateCreated: '04/05/2017'}
        ]
      };

      // default option preselected on drop down menu
      this.currentSelectedGoal = this.user.currentGoal;

      // get current dates
      this.startOfWeek = moment(new Date()).startOf('week').format();
      this.endOfWeek = moment(new Date()).endOf('week').format();

      this.goal = this.goalTarget[this.user.currentGoal];

      // count number of jobs created this week
      this.current = this.user.jobs.reduce((acc, job) => {
        var d = new Date(job.dateCreated);
        var start = new Date(this.startOfWeek);
        var end = new Date(this.endOfWeek);
        return (d < end && d > start) ? acc + 1 : acc;
      }, 0);

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

      this.parseEndOfWeek = function() {
        return `${moment(new Date(this.endOfWeek)).endOf('week').format('MMM Do YY')}`;
      }

      this.handleSaveChanges = function(newGoal) {
        this.user.currentGoal = newGoal;
        this.goal = this.goalTarget[this.user.currentGoal];

        // update database
      }

      // handle drop down menu open
      this.openMenu = function($mdMenu, ev) {
        originatorEv = ev;
        $mdMenu.open(ev);

        // reset selected goal
        this.currentSelectedGoal = this.user.currentGoal;
      };
    }
  });
