const authServie = require("../services/auth");

class AuthController {
  constructor() {}

  singUp(req, res) {
    authServie
      .singUp(req.body)
      .then(({ name, token }) => {
        res.status(201).json({ name, token });
      })
      .catch(err => res.status(400).json({ error: err }));
  }

  

  singIn(req, res) {
    authServie
      .singIn(req.body)
      .then(({ token }) => res.status(200).json({ token }))
      .catch(err => {
        console.log(err)
        res.status(400).json({ error: err });
      });
  }
}

module.exports = new AuthController();
