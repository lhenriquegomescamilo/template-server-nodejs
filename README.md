[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Travis](https://img.shields.io/travis/lhenriquegomescamilo/template-server-nodejs.svg)](https://img.shields.io/travis/lhenriquegomescamilo/template-server-nodejs.svg)

# Template server rest api
 This project is a base template for nodejs applications, using the stack: TypeScript, ES6, Sequelize, Postgres, Express, Passport with JWT, Mocha, Chai, supertest, test-double.

## Pré Requirements
 * NodeJS 6.10.2+ Support ES6
 * NPM 3.10.10+ 
 * Docker lastest
## Run postgres with docker
First create the database postgres inside docker with command:
````
docker-compose build
docker-compose up

````
## Configure the database name
With the pgAdmin openned, create the database with name: ts-api and, ts-api-test


## Run application
Inside the project root folder use the command
````
  npm install
  npm run compile && npm start
  npm run start-dev 
````

## Run tests
````
  npm run comiple && npm run integration-test
  npm run compile && npm run integration-coverage
````
