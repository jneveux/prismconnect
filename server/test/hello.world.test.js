"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiHttp = require("chai-http");
var App_1 = require("../src/App");
chai.use(chaiHttp);
var expect = chai.expect;
describe('baseRoute', function () {
    it('should be json', function () {
        return chai.request(App_1.default).get('/')
            .then(function (res) {
            expect(res.type).to.eql('application/json');
        });
    });
    it('should have a message prop', function () {
        return chai.request(App_1.default).get('/')
            .then(function (res) {
            expect(res.body.message).to.eql('Hello World!');
        });
    });
    describe('GET api/v1/heroes/:id', function () {
        it('responds with single JSON object', function () {
            return chai.request(App_1.default).get('/api/v1/heroes/1')
                .then(function (res) {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
            });
        });
        it('should return Luke Cage', function () {
            return chai.request(App_1.default).get('/api/v1/heroes/1')
                .then(function (res) {
                expect(res.body.hero.name).to.equal('Luke Cage');
            });
        });
    });
});
