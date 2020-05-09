const express = require("express");
const config = require("./src/config/index");
async function startServer() {
  const app = express();

  await require("./src/loaders")({ expressApp: app });

  app.listen(config.PORT || process.env.PORT, err => {
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
