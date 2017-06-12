# Template server 

## Libs and frameworks
 * NodeJS, TypeScript, ES6, Sequelize, Postgres, Express, Passport, JWT
 * Mocha, Chai, supertest, test-double

## Run application
 * npm run compile && npm start
 * npm run start-dev 

## Run tests
 * npm run comiple && npm run integration-test
 * npm run compile && npm run integration-coverage
 
## Database
 * PostgreSQL
 * database-name: ts-api, ts-api-test

## Docker to run DB
 *  docker run -d -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres --name postgres -p 5432:5432 --restart=always postgres
