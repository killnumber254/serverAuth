const bcrypt = require("bcrypt");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const generateToken = require("../genarateAuthToken/generateAuthToken");
const Token = require("../Model/Token");

// const token = require("../genarateAuthToken/generateAuthToken");

async function regist(req, res, next) {
  try {
    if (!req.body) return res.status(400);
    const username = req.body.username;
    const password = req.body.password;
    const passSalt = bcrypt.genSaltSync(10);
    const pasSave = bcrypt.hashSync(password, passSalt);
    console.log(pasSave);

    const user = await User.create({
      username: username,
      password: pasSave,
    });

    const token = generateToken({ user: user.username });

    const tokenUser = Token.build({ token: token });
    tokenUser.save();

    User.hasMany(Token);

    Token.belongsTo(User);
    return res
      .cookie("access_token", token, {
        maxAge: 3600 * 24,
        path: "/",
        httpOnly: false,
        sameSite: "None", // отправка cookie
        secure: true,
      })
      .status(200)
      .json({ user: user.username });
  } catch (err) {
    console.log("Message", err);
  }
  next();
}

module.exports = regist;
