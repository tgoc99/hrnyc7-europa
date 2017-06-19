# Job Search Management Tool

Job seekers can use this dashboard to plan and manage the entire job application process.

https://linkedlistjobs.herokuapp.com/

(Feel free to login with user:demo, password: demo)

## Team

  - __Product Owner__: Thomas O'Connor
  - __Scrum Master__: Willian Hua
  - __Development Team Members__: Arturo Ruvalcaba, Joel Camacho

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage
1. Install dependencies (instructions below)
2. npm start

## Project File Structure
```sh
/ [ root ] 
 	README.md
 	package.json
.gitignore
/server
server.js
   	server.config.js
	/routes
routes.js
/config
	config.js
/utils
	helpers.js
middleware.js
/models
  		 . . .
/client
	index.html
    	style.css
	/lib
		. . .
/assets
		. . .
  	/app
      		app.js
      		/layout
	        	topbar.controller.js
	        	topbar.html
		sidebar.controller.js
		sidebar.html
/dashboard
dashboard.controller.js
        	dashboard.html
	      		/input
				job-entry.html
				job-entry.controller.js
     		/services
			. . .
/node_modules
bower.json
.bowerrc
```

## Requirements

- Node.js latest
- npm latest
- bower latest

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
cd public
bower install
cd ..
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Style Guide

See [STYLE-GUIDE.md](STYLE-GUIDE.md) for style guidelines.
