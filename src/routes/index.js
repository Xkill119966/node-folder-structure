const { Router } = require("express");
const user = require("./api/user");
const auth = require("./api/auth");
module.exports = () => {
  const app = Router();
  user(app);
  auth(app);
  return app;
};
