const mongoose = require("mongoose");

describe("Name of the group", () => {
	beforeEach(async () => {
		process.env = Object.assign(process.env, {
			MONGO_URI: "mongodb://localhost:27017/hludann"
		});
	});

	afterEach(async () => {
		process.env = Object.assign(process.env, {
			MONGO_URI: "mongodb://localhost:27017/hludann"
		});
	});
});
