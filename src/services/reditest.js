// const fetch = require("node-fetch");

// const redisClient = require("../utils/redis");
// class RedisService {
//   getPhoto() {
//     const photosRedisKey = "user:photos";
//     return new Promise((resolve, reject) => {
//       redisClient.get(photosRedisKey, (err, photo) => {
//         if (photo) {
//           resolve({ source: "cache", data: JSON.parse(photos) });
//         } else {
//           fetch("https://jsonplaceholder.typicode.com/photos")
//             .then(res => res.json())
//             .then(photo => {
//               redisClient.setex(photosRedisKey, 3600, JSON.stringify(photo));
//               resolve({ source: "api", data: photo });
//             })
//             .catch(err => reject(err));
//         }
//       });
//     });
//   }
// }

// module.exports = new RedisService()
