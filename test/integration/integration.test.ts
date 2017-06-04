import { app, request, expect } from './config/helpers';

describe('Tests of integration on router user', () => {


    describe('GET /api/users/:id', () => {
        it('Should be return user by id', done => {
            const id = 1;
            request(app)
                .get(`/api/users/${id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                    done(error);
                });
        });
    });

    describe('GET /api/users', () => {
        it('Should return the json with all users', done => {
            request(app)
                .get('/api/users')
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                    done(error);
                });

        });
    });

    describe('GET /api/users/:id', () => {
        it('Should return user by id', done => {
            request(app)
                .get('/api/users/1')
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                    done(error);
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
                    done(error);
                });
        });
    });

    describe('PUT /api/users/:id', () => {
        it('Should update user by id', done => {

            const user = {
                id: 1,
                name: 'Test 1'
            };
            request(app)
                .put(`/api/users/${user.id}`)
                .send(user)
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                    done(error);
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
                .delete(`/api/users/${user.id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200);
                    done(error);
                });
        });
    });
});