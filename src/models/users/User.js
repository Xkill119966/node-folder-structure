const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a full name"],
      index: true
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true
    },

    password: String,

    token: String,

    role: {
      type: String,
      default: "user"
    },
    location: {
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: {
        type: [Number]
      }
    }
  },
  { timestamps: true }
);

userSchema.pre("save", function(next) {
  let user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        console.log(generateToken(user));
        user.token = generateToken(user);
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  var user = this;
  bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function(cb) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  let user = this;

  user.token = generateToken(user);
  user.save(function(err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function(token, cb) {
  var user = this;
  jwt.verify(token, config.jwtSecrect, function(err, decode) {
    user.findOne({ _id: decode, token: token }, function(err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

function generateToken(user) {
  console.log("User Data", user);
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  //more information here: https://softwareontheroad.com/you-dont-need-passport

  return jwt.sign(
    {
      _id: user._id,
      role: user.role,
      name: user.name,
      exp: exp.getTime() / 1000
    },
    config.jwtSecrect
  );
}

const User = mongoose.model("User", userSchema);
module.exports = {
  User
};
