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

describe("get /index", function() {
	test("it should return an html page", function() {
		return request(serverRequire.app).get("/index")
		.then(function () {
			console.log("index works");
		});
	});
});

describe("get /rookie-form", function() {
	test("it should return an html page", function() {
		return request(serverRequire.app).get("/rookie-form")
		.then(function () {
			console.log("rookie-form works");
		});
	});
});

describe("get /rookie-schedule", function() {
	test("it should return an html page", function() {
		return request(serverRequire.app).get("/rookie-schedule")
		.then(function () {
			console.log("rookie-schedule works");
		});
	});
});

describe("get /expert-schedule", function() {
	test("it should return an html page", function() {
		return request(serverRequire.app).get("/expert-schedule")
		.then(function () {
			console.log("expert-schedule works");
		});
	});
});

describe("get /expert-form", function() {
	test("it should return an html page", function() {
		return request(serverRequire.app).get("/expert-form")
		.then(function () {
			console.log("expert-form works");
		});
	});
});
