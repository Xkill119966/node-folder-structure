const Validator = require("validator");
const { isEmpty } = require("../utils/utils");
const { User } = require("../models/users/User");

const alreadyEmailValidation = value => {
	return User.findOne({
		email: value
	}).then(mail => {
		if (mail) {
			console.log("mail exist");
			return Promise.reject("E-mail already in use");
		} else {
			return true;
		}
	});
};

module.exports = {
	alreadyEmailValidation
};
