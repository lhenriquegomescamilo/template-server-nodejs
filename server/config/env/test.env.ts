module.exports = {
    env: 'test',
    secret: 'S3cr3t',
    serverPort: 3000,
    postgres: {
        database: 'ts-api-test',
        dialect: 'postgres',
        username: 'postgres',
        password: 'postgres',
        port: 5432,
        dbURL: 'postgres://postgres:pgroot@localhost:5432/ts-api-test',
    }
}