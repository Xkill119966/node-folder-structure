const request = require("supertest");
const { app } = require("../server/server");
const mongoose = require("mongoose");

describe("initial loading", () => {
	test("Initial Server Loading Get Request", async done => {
		console.log("app", app);
		const response = await request(app).get("/");
		expect(response.statusCode).toBe(200);
		done();
	});
});
