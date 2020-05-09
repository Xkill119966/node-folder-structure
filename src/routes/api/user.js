const { Router } = require("express");
const route = Router();

module.exports = app => {
  app.use("/users", route);

  //auth
  route.get('/', (req, res) => {
	  res.status(200).json({
      success  : true,
      hell: "fas"
    })
  })
};
