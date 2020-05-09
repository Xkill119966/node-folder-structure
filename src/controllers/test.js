const testService = require("../services/test1");

class testControlelr {
  locationAdd(req, res) {
    console.log(req.params)
    let { lat, lng } = req.body;
    testService
      .locationAdd(lat, lng)
      .then(data =>
        res.staus(201).json({
          success: true,
          data: data
        })
      )
      .catch(err => {
        res.staus(401).send({
          success: false,
          err: err
        });
      });
  }

  getUserCount(req, res) {
    testService
      .getUserCount(data => {
        res.status(200).json({
          data
        });
      })
      .catch(err => {
        res.status(401).json({
          success: false,
          err: err
        });
      });
  }
}

module.exports = new testControlelr();
