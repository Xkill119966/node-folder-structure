const express = require("express");
const config = require("./config/index");
async function startServer() {
  const app = express();

  await require("./loaders")({ expressApp: app });

  app.listen(config.PORT, err => {
    if (err) {
      console.log("Err");
    }
    console.log(`
     ################################################
      🛡️  Server listening on port: ${config.PORT} 🛡️ 
      ################################################
    `);
  });
}

startServer();
