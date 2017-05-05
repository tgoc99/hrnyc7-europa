angular.module('jobWidget', []);

angular.
  module('jobWidget').
  component('jobWidget', {
    template:
    `
    <md-card>
      <md-card-header>
        <md-card-avatar class="job-widget-image" style="{{$ctrl.imageStyle($ctrl.data.imageUrl)}}"></md-card-avatar>

        <md-card-header-text>
          <span class="md-headline">{{$ctrl.data.company}}</span>
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

          <md-tab label="JOB INFO">
            <md-content class="md-padding">
              <p class="md-subhead"><strong>Date Applied: </strong>{{$ctrl.parseDate($ctrl.data.dateCreated)}}</p>
              <p class="md-subhead"><strong>Application Link: </strong>{{$ctrl.data.link}}</p>
              <p class="md-subhead"><strong>Current Step: </strong>{{$ctrl.data.currentStep.name}}</p>
              <p class="md-subhead"><strong>Next Step: </strong>{{$ctrl.data.nextStep.name}}</p>
              <p class="md-subhead"><strong>Salary: </strong>\${{$ctrl.data.salary}}</p>
            </md-content>
          </md-tab>

          <md-tab label="COMPANY INFO">
          <md-content class="md-padding">
            <p class="md-subhead"><strong>Description: </strong>{{$ctrl.data.description}}</p>
            </md-content>
          </md-tab>

          <md-tab label="CONTACTS">
            <md-content ng-repeat='contact in $ctrl.data.contacts'>
              <md-divider layout="column" class="contact-divider">
                <p class="md-subhead contact-info"><md-icon>person</md-icon>{{contact.name}}</p>
                <p class="md-subhead contact-info"><md-icon>phone</md-icon>{{contact.phoneNumber}}</p>
                <p class="md-subhead contact-info"><md-icon>email</md-icon>{{contact.email}}</p>
              </md-divider>
            </md-content>
          </md-tab>

          <md-tab label="STEP DETAILS">
          <md-content class="md-padding">

            <md-divider layout="column" class="contact-divider">
              <p class="md-subhead"> <strong>Current Step: </strong> {{$ctrl.data.currentStep.name}}</p>
              <p class="md-subhead"> <strong>Due Date: </strong> {{$ctrl.parseDate($ctrl.data.currentStep.dueDate)}}</p>
              <p class="md-subhead"> <strong>Comments: </strong> 
                <md-content ng-repeat='comment in $ctrl.data.currentStep.comments'> {{comment}} </md-content>
              </p>
            </md-divider>

            <md-divider layout="column" class="contact-divider">
              <p class="md-subhead"> <strong>Next Step: </strong> {{$ctrl.data.nextStep.name}}</p>
              <p class="md-subhead"> <strong>Due Date: </strong> {{$ctrl.parseDate($ctrl.data.nextStep.dueDate)}}</p>
              <p class="md-subhead"> <strong>Comments: </strong> 
                <md-content ng-repeat='comment in $ctrl.data.nextStep.comments'> {{comment}} </md-content>
              </p>
            </md-divider>
          </md-tab>

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
