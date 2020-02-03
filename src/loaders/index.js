const mongooseLoader = require("./mongoose");
const expressLoader = require("./express");
module.exports = async ({ expressApp }) => {
  await mongooseLoader();
  await expressLoader({ app: expressApp });
};
