const mongoose = require("mongoose");
// var Fawn = require("fawn");
const cron = require('node-cron');

module.exports = function() {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  // database connecting....

  //add cron job
  cron.schedule('*/10 * * * *', () => {
    console.log('running a task every 10 minutes');
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
  });
  
};
