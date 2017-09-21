[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Travis](https://img.shields.io/travis/lhenriquegomescamilo/template-server-nodejs.svg)](https://img.shields.io/travis/lhenriquegomescamilo/template-server-nodejs.svg)

# Template Server Rest API

 This project is a base template for Node.js Rest API applications, using the follow stack: 
 
   * [TypeScript](https://github.com/Microsoft/TypeScript), [ES6](http://es6-features.org/), 
   * [Sequelize](http://docs.sequelizejs.com/), 
   * [Postgres](https://www.postgresql.org/), 
   * [Express JS](http://expressjs.com/), 
   * [Passport JS](http://passportjs.org/) with [JWT](https://jwt.io/), 
   * [Mocha](https://github.com/mochajs/mocha), 
   * [Chai](http://chaijs.com/), 
   * [supertest](https://github.com/visionmedia/supertest), 
   * [test-double](https://github.com/testdouble/testdouble.js).

## Requirements
 * NodeJS 6.10.2+ Support ES6
 * NPM 3.10.10+ 
 * Docker lastest
 
## Run postgres with docker
First create the database postgres inside docker with command:

```sh

  docker-compose up

```
The [Docker Compose](https://docs.docker.com/compose/) will create the database called ts-api


## Run application

Inside the project root folder use the command

```sh

  npm install
  npm run compile && npm start
  
```

To start the server with ts-node, use the command:

```sh

  npm run start-dev
 
```

## Run tests

```sh
  npm run comiple && npm run integration-test
  npm run compile && npm run integration-coverage

```

## Licence

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
