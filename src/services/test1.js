const { User } = require("../models/users/User");
class testServiceOne {
  locationAdd({ lat, lng }) {
    const user = new User({
      location: {
        type: "Point",
        coordinates: [lat, lng]
      }
    });

    return new Promise((resolve, reject) => {
      user.save((err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  getUserCount() {
    return new Promise((resolve, reject) => {
      User.find(
        {
          location: {
            $near: {
              $geometry: { type: "Point", coordinates: [15.059204, 95.996258] },

              $maxDistance: 60000
            }
          }
        },
        (err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs.length);
          }
        }
      );
    });
  }
}

module.exports = new testServiceOne();
