const { User } = require("../models/users/User");

let authMiddleware = (req, res, next) => {
  let token =
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
      ? req.headers.authorization.split(" ")[1]
      : null;

  User.findByToken(token, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      return res.sendStatus(401);
    }

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { authMiddleware };
