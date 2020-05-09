const { Router } = require("express");
const route = Router();

const { celebrate, Joi } = require("celebrate");

const testController = require("../../controllers/test");
module.exports = app => {
  app.use("/test", route);

  //test

  route.post(
    "/",

    (req, res) => {
      testController.locationAdd(req, res);
    }
  );

  route.get("/", (req, res) => {
    testController.getUserCount(req, res);
  });
};
