const { User } = require("../models/users/User");
const redisClient = require("../utils/redis");
class authService {
  singUp(reqBody) {
    let { name, email, password } = reqBody;
    const user = new User({
      name: name,
      email: email,
      password: password
    });

    return new Promise((resolve, reject) => {
      user.save((err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  singIn(reqBody) {
    let errors = {};
    let { email, password } = reqBody;
    return new Promise(async (resolve, reject) => {
      let userRecord = await User.findOne({ email });
      if (!userRecord) {
        errors.message = "User Not Register";
        reject(errors);
      }
      userRecord.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          errors.message = "Password is Wrong";
          reject(errors);
        }
        userRecord.generateToken((err, user) => {
          if (err) {
            errors.message = "can't not generate token";
            reject(errors);
          }
          resolve(user);
        });
      });
    });
  }
}

module.exports = new authService();
