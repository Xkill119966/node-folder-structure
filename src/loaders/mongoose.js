const mongoose = require("mongoose");
// var Fawn = require("fawn");
module.exports = function() {
  // initializing Fawn for future multiple transactions
//   Fawn.init(mongoose);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  // database connecting....
  mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/dms-test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => {
      console.log("MONGODB RUNNING");
    })
    .catch(err => {
      console.log("cannot connect to mongoDB");
    });
};
