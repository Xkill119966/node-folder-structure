const jwt = require("jsonwebtoken");
const config = require("../config");

const getTokenFromHeader = req => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

const isAuth = jwt({
  secret: config.jwtSecret,
  userProperty: "token", // Use req.token to store the JWT
  getToken: getTokenFromHeader
});

export default isAuth;
