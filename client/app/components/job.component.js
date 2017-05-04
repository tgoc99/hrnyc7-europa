angular.module('jobWidget', []);

angular.
  module('jobWidget').
  component('jobWidget', {
    template:
    `
    <md-card>
      <md-card-header>
        <md-card-avatar class="job-img" style="{{$ctrl.imageStyle($ctrl.data.imgURL)}}">
        </md-card-avatar>
        <md-card-header-text>
          <span class="md-headline">{{$ctrl.data.companyName}}</span>
          <span class="md-subhead">{{$ctrl.data.position}}</span>
        </md-card-header-text>
        <md-button class="md-fab md-mini">
            <md-icon>star</md-icon>
        </md-button>
        <md-button class="md-fab md-mini">
            <md-icon>settings</md-icon>
        </md-button>
      </md-card-header>



        <md-tabs md-dynamic-height="" md-border-bottom="">

          <md-tab label="INFO">
            <md-content class="md-padding">
              <p class=".md-subhead application-info">Date Applied: {{$ctrl.parseDate($ctrl.data.applicationDate)}}</p>
              <p class=".md-subhead application-info">Link: XXX</p>
              <p class=".md-subhead application-info">Current Status: XXX</p>
              <p class=".md-subhead application-info">Current Status: XXX</p>
            </md-content>
          </md-tab>

          <md-tab label="CONTACT">
            <md-content ng-repeat='contact in job.contactInformation'>
              <md-divider layout="column" class="contact-divider">
                <p class=".md-subhead contact-info"><md-icon>person</md-icon>{{contact.name}}</p>
                <p class=".md-subhead contact-info"><md-icon>phone</md-icon>{{contact.phone}}</p>
                <p class=".md-subhead contact-info"><md-icon>email</md-icon>{{contact.email}}</p>
                <span class="contact-options">
                  <md-icon>edit</md-icon>
                  <md-icon>delete</md-icon>
                </span>
              </md-divider>
            </md-content>
          </md-tab>

          <md-tab label="STEPS">

          </md-tab>

          <md-tab label="COMPANY INFO">

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
      // parse the style string for setting the logo image
      this.imageStyle = function(imageUrl) {
        return `background-image:url('${imageUrl}')`;
      };

      // use moment.js to parse de date data in a user-friendly format
      this.parseDate = function(applicationDate) {
        var date = new Date(applicationDate);
        var dateFormated = moment(date).format("MMM Do YY");
        var dateFromNow = moment(date).fromNow();
        return `${dateFormated}  |  ${dateFromNow}`;
      }
    }
  });
