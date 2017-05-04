angular.module('newsWidget', []);

angular.
  module('newsWidget').
  component('newsWidget', {
    template:
    `
    <md-card id="news-widget" class='widget'>
      <md-divider class="news-img-container" style="background-image:url('{{$ctrl.imageUrl}}')">
      </md-divider>
      <md-content>
        <span class="md-headline">{{$ctrl.title}}</span>
        <p>By {{$ctrl.author}}, {{$ctrl.source}}</p>
        <p>{{$ctrl.content}}</p>
      </md-content>
      <md-footer>
        <md-button>
            <md-icon>navigate_before</md-icon>
        </md-button>
        <md-button>
            Read More ...
        </md-button>
        <md-button>
            <md-icon>navigate_next</md-icon>
        </md-button>
      </md-footer>
    </md-card>
    `,
    controller: function() {
      // sample data
      this.imageUrl = 'http://www.abc.net.au/news/image/7081416-3x2-940x627.jpg';
      this.title = 'North Korea Test Fire of Ballistic Missile Fails, U.S. Officials Say';
      this.author = 'Ryan Browne and Steve Almasy';
      this.source = 'CNN';
      this.content =
        `
        North Korea on Saturday launched a ballistic missile that blew up over land, a spokesman for the US Pacific Command said.
        The missile didn't leave North Korean territory, US Navy Cmdr. Dave Benham said.
        John Kirby, a CNN military and diplomatic analyst, said the regime of North Korean leader Kim Jong Un had a message for the United States and others.
        "This is Kim giving us the finger. Giving China the finger. Giving the UN the finger. I think timing is absolutely planned and preordained in his mind," he said.
        Trump's administration has delivered a drumbeat of warnings about the dangers of North Korea this week, using presidential statements, an unusual White House briefing for the Senate, and a White House lunch for UN ambassadors to underscore that Pyongyang is a priority.
        `;
    }
  });
