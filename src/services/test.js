/**
 * 1
 */

const express = require("express");
const app = express();
const { User } = require("../models/users/User");
let count = 0;
for (let index = 1; index <= 1000; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    count++;
  }
}

console.log(count);

/**
 *
 * 2
 */
function testTwo(value) {
  if (value === undefined) {
    throw new Error("no arguments");
  }

  return value;
}

console.log(testTwo(1));

/**
 * 3
 */

app.get("/", async (req, res) => {
  res.status(200).end();
});

app.post("/", async (req, res) => {
  res.status(201).end();
});

/**
 *
 * 4
 *
 */
async function fun1(req, res) {
  try {
    const res = await request.get("http://localhost:3000");
    console.log("get request returned");
  } catch (error) {
    console.log("found error");
  }
}

fun1();

/**
 * 5
 * mongoimport --db dms-sample --collection test --file user_profiles.metadata.json 

 */

/**
 * 6
 *
 */
User.count({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [15.059204, 95.996258] },

      $maxDistance: 60000
    }
  }
});

/**
 * 7
 */

class Test {
  locationAdd(req, res) {
    let { lat, long } = req.params;
    const user = new User({
      location: {
        type: "Point",
        coordinates: [lat, long]
      }
    });

    user.save((err, docs) => {
      if (err) {
        res.status(401).end();
      } else {
        res.status(201).json({
          docs
        });
      }
    });
  }
}

/**
 * 8
 * ecosystem.config.js
 */

/**
 * 9
 * loaders/mongoose.js
 */

module.exports = new Test();
