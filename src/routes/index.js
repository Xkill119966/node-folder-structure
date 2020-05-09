const { Router } = require("express");
const user = require("./api/user");
const auth = require("./api/auth");
const test = require("./api/test")
module.exports = () => {
  const app = Router();
  user(app);
  auth(app);
  test(app)
  return app;
};
