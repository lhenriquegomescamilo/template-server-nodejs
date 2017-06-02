import { app, request, expect } from './config/helpers';

describe('Tests of integration', () => {


    describe('GET /', () => {
        it('Should be return the mensagem Hello, wolrd', done => {
            request(app).get('/').end((error, response) => {
                expect(response.status).to.equal(200);
                expect(response.text).to.be.eql('Hello, world!');
                done(error);
            });
        });
    });

    describe('GET /hello/:name', () => {
        it('Should be return the mensage Hello, Test with typescript', done => {
            const name = 'Test with typescript';
            request(app)
                .get(`/hello/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                    expect(response.text).to.be.eql('Hello, Test with typescript');
                    done(error);
                });
        });
    });

    describe('GET /api/users/all', () => {
        it('Should return the json with all users', done => {
            request(app)
                .get('/api/users/all')
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                })
        });
    });

    describe('GET /api/users/:id', () => {
        it('Should return user by id', done => {
            request(app)
                .get('/api/users/1')
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                });
        });
    });

    describe('POST /api/users', () => {
        it('Should create user', done => {
            const user = {
                name: 'Test'
            };
            request(app)
                .post('/api/users')
                .send(user)
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                })
        });
    });

    describe('PUT /api/users/:id', () => {
        it('Should update user by id', done => {
            it('Should create user', done => {
                const user = {
                    id: 1,
                    name: 'Test 1'
                };
                request(app)
                    .put('/users/1/edit')
                    .send(user)
                    .end((error, response) => {
                        expect(response.status).to.equal(200);
                    })
            });
        });
    });


    describe('DELETE /api/users/:id', () => {
        it('Should delete user by id', done => {
            const user = {
                id: 1,
                name: 'Test'
            };
            request(app)
                .delete('/users/1/edit')
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                })
        });
    });
});
});