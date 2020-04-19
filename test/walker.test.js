'use strict';
const app = require('../app'),
    chai = require('chai'),
    request = require('supertest');
const expect = chai.expect;

describe('Configurator Integration Tests', function() {
    describe('#GET / config', function() {
        it('should get config file', function(done) {
            request(app)
                .get('/api/properties/example?prop=settings.user')
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body['settings.user']).to.equal('admin')
                });
            done();
        });
    });
    describe('##GET / unknown', () => {
        it('should fail to get unknown path', function (done) {
            request(app)
                .get('/api/unknown/path')
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(404);
                });
            done();
        });
    });
});
