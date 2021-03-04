# Cypress Automation Playground 

This is a next generation frontend automation testing tool built for the modern application. 


## Generate Package.json and get Cypress Dependencies 

- package.json
- cypress 
- npm install - node modules will scan the package file and then download it for you.
- To Generate package.json: $npm init
- Downloading cypress 
- $ npm install cypress —save-dev
- Note: if `npm install cypress —save-dev` is generating error, ensure that you are using the right version of `node`
- to open: `node_modules/.bin/cypress open` or `npx cypress open`
- to run: npx cypress run 
- to run in chrome: npx cypress run —browser chrome