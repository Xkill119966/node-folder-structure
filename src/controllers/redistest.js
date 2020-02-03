const redisTest = require("../services/reditest");

class redisController {
  getPhotos(req, res) {
    redisTest
      .getPhoto(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  }
}

module.exports = new redisController()
