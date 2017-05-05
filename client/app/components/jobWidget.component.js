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

        <md-button class="md-fab md-mini" ng-click="$ctrl.editJob()">
            <md-tooltip md-direction="top">Edit Job</md-tooltip>
            <md-icon>edit</md-icon>
        </md-button>

        <md-button class="md-fab md-mini" ng-click="$ctrl.deleteJob($ctrl.data)">
            <md-tooltip md-direction="top">Delete Job</md-tooltip>
            <md-icon>delete</md-icon>
        </md-button>
      </md-card-header>

      <md-tabs md-dynamic-height="" md-border-bottom="">

          <md-tab label="JOB OVERVIEW">
            <md-content class="md-padding">
              <p class="md-subhead"><strong>Date Applied: </strong>{{$ctrl.parseDate($ctrl.data.dateCreated)}}</p>
              <p class="md-subhead"><strong>Application Link: </strong>{{$ctrl.data.link}}</p>
              <p class="md-subhead"><strong>Current Step: </strong>{{$ctrl.data.currentStep.name}}</p>
              <p class="md-subhead"><strong>Next Step: </strong>{{$ctrl.data.nextStep.name}}</p>
              <p class="md-subhead"><strong>Salary: </strong>\${{$ctrl.data.salary}}</p>
            </md-content>
          </md-tab>

          <md-tab label="COMPANY DETAILS">
          <md-content class="md-padding">
            <p class="md-subhead"><strong>Company: </strong>{{$ctrl.data.officialName}}</p>
            <p class="md-subhead"><strong>Website: </strong><a href='http://{{$ctrl.data.website}}'/>{{$ctrl.data.website}}</a></p>
            <p class="md-subhead"><strong>Description: </strong>{{$ctrl.data.description}}</p>
            <p class="md-subhead"><strong>Founded: </strong>{{$ctrl.data.founded}}</p>
            <p class="md-subhead"><strong># of Employees: </strong>{{$ctrl.data.approxEmployees}}</p>
            <p class="md-subhead"><strong>Address: </strong>{{$ctrl.data.address}}</p>
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
    controller: function($window, $scope, $route, $mdDialog, Jobs) {
      // favorite icon
      this.favorite = false;

      Jobs.get().then(function(data) {
        $scope.jobs = data;
      });

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

      this.deleteJob = function(job) {
        let query = JSON.stringify({_id : job._id});

        if($window.confirm('Are you sure you want to delete this job?')) {
          Jobs.delete(query)
          .then(function(res) {
            $route.reload()
            $window.alert(res);
          })
          .catch(function(err) {
            console.log(err)
          })
        }
      }

      this.editJob = function(event) {
        $mdDialog.show({
          clickOutsideToClose: true,
          scope: $scope,        
          preserveScope: true,           
          template: `
          <md-dialog>
            <md-dialog-content>
              <div layout="row" layout-align="center">
                <span class="md-headline"></span>
              </div>

              <form name="jobForm" ng-submit="submitJob()">

                <div layout-gt-sm="row" layout-padding>
                  <md-input-container flex-gt-sm="30">
                    <label>Add Contact's Name</label>
                    <md-icon class="material-icons">contacts</md-icon>
                    <input ng-model="job.contacts[0].name">
                  </md-input-container>

                  <md-input-container flex-gt-sm="35">
                    <label>Contact's Phone Number</label>
                    <md-icon class="material-icons">call</md-icon>
                    <input ng-model="job.contacts[0].phoneNumber">
                  </md-input-container>

                  <md-input-container flex-gt-sm="35">
                    <label>Contact's E-mail</label>
                    <md-icon class="material-icons">email</md-icon>
                    <input ng-model="job.contacts[0].email" type='email'>
                  </md-input-container>
                </div>

                <div layout-gt-sm="row" layout-padding>
                  <md-input-container flex-gt-sm>
                    <label>Current Step</label>
                    <input ng-model="job.currentStep.name" required>
                  </md-input-container>

                  <md-input-container flex-gt-sm>
                    <label>Current Step Date</label>
                    <md-datepicker ng-model="job.currentStep.dueDate" required></md-datepicker>
                  </md-input-container>

                  <md-input-container flex-gt-sm="35">
                    <label>Current Step Comments</label>
                    <md-icon class="material-icons">comment</md-icon>
                    <input ng-model="job.currentStep.comments[0]">
                  </md-input-container>
                </div>

                <div layout-gt-sm="row" layout-padding>
                  <md-input-container flex-gt-sm>
                    <label>Next Step</label>
                    <input ng-model="job.nextStep.name">
                  </md-input-container>

                  <md-input-container flex-gt-sm>
                    <label>Next Step Date</label>
                    <md-datepicker ng-model="job.nextStep.dueDate"></md-datepicker>
                  </md-input-container>

                  <md-input-container flex-gt-sm="35">
                    <label>Next Step Comments</label>
                    <md-icon class="material-icons">comment</md-icon>
                    <input ng-model="job.nextStep.comments[0]">
                  </md-input-container>
                </div>

                <md-button type="submit" class="md-primary">Modify Job</md-button>
              </form>
            </md-dialog-content>
          </md-dialog>`,
          controller: function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
              $mdDialog.hide();
            }
          }
        })
      }
    }
  });
