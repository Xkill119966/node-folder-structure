const { Router } = require("express");
const route = Router();

const { celebrate, Joi } = require("celebrate");

const authController = require("../../controllers/auth");
module.exports = app => {
  app.use("/auth", route);

  //auth
  route.post(
    "/singup",
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
      })
    }),
    (req, res) => {
      authController.singUp(req, res);
    }
  );

  route.post(
    "/singin",
    celebrate({
      body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
      })
    }),
    (req, res) => {
      authController.singIn(req, res);
    }
  );

};
