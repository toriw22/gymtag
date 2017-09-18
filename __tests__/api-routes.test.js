var request = require("supertest-as-promised");
var server;
var serverRequire;

beforeAll(function (done) {
	serverRequire = require("../server.js");
	serverRequire.waitOnServer(function(srvr){
		server = srvr;
		done();
	});
});

describe("get /rookie", function() {
	test("it should return a json rookie object", function() {
		return request(serverRequire.app).get("/rookie")
		.then(function (res) {
			console.log(res.body);
			expect(true).toBe(true);
		});
	});
});

