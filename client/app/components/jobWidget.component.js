angular.module('jobWidget', []);

angular.
  module('jobWidget').
  component('jobWidget', {
    template:
    `
    <md-card>
      <md-card-header>
        <md-card-avatar class="job-widget-image" style="{{$ctrl.imageStyle($ctrl.data.imgURL)}}"></md-card-avatar>

        <md-card-header-text>
          <span class="md-headline">{{$ctrl.data.companyName}}</span>
          <span class="md-subhead">{{$ctrl.data.position}}</span>
        </md-card-header-text>

        <md-button class="md-fab md-mini" ng-click="$ctrl.toggleFavorite()">
            <md-tooltip md-direction="top">Set as Favorite</md-tooltip>
            <md-icon>{{$ctrl.renderFavoriteIcon()}}</md-icon>
        </md-button>

        <md-button class="md-fab md-mini">
            <md-tooltip md-direction="top">Settings</md-tooltip>
            <md-icon>settings</md-icon>
        </md-button>
      </md-card-header>

      <md-tabs md-dynamic-height="" md-border-bottom="">

          <md-tab>
            <md-tab-label><md-icon>expand_less</md-icon></md-tab-label>
          </md-tab>

          <md-tab label="GENERAL">
            <md-content class="md-padding">
              <p class="md-subhead"><strong>Date Applied: </strong>{{$ctrl.parseDate($ctrl.data.applicationDate)}}</p>
              <p class="md-subhead"><strong>Application Link: </strong> http://sammpleUrl.com</p>
              <p class="md-subhead"><strong>Current Step: </strong>Send Application</p>
              <p class="md-subhead"><strong>Next Step: </strong>Phone Screen</p>
            </md-content>
          </md-tab>

          <md-tab label="COMPANY INFO">

          </md-tab>

          <md-tab label="CONTACT">
            <md-content ng-repeat='contact in $ctrl.data.contactInformation'>
              <md-divider layout="column" class="contact-divider">
                <p class="md-subhead contact-info"><md-icon>person</md-icon>{{contact.name}}</p>
                <p class="md-subhead contact-info"><md-icon>phone</md-icon>{{contact.phone}}</p>
                <p class="md-subhead contact-info"><md-icon>email</md-icon>{{contact.email}}</p>
              </md-divider>
            </md-content>
          </md-tab>

          <md-tab label="STEPS">

          </md-tab>

          <md-tab label="TASKS">

          </md-tab>

        </md-tabs>

    </md-card>
  </div>
    `,
    bindings: {
     data: '='
    },
    controller: function() {
      // favorite icon
      this.favorite = false;

      this.toggleFavorite = function() {
        this.favorite = !this.favorite;
      }

      this.renderFavoriteIcon = function() {
        return this.favorite ? 'star' : 'star_border';
      }

      // parse the style string for setting the logo image
      this.imageStyle = function(imageUrl) {
        return `background-image:url('${imageUrl}')`;
      };

      // use moment.js to parse de date data in a user-friendly format
      this.parseDate = function(applicationDate) {
        var date = new Date(applicationDate);
        var dateFormated = moment(date).format("MMM Do YY");
        var dateFromNow = moment(date).fromNow();
        return `${dateFromNow} on ${dateFormated}`;
      }
    }
  });
