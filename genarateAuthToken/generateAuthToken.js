const jwt = require("jsonwebtoken");
const Token = require("../Model/Token");
const generateToken = (username) => {
  try {
    console.log(username);
    const token = jwt.sign({ username }, process.env.JWT_KEY);

    // const tokenUser = Token.build({ token: token });
    // tokenUser.save();
    return token;
  } catch (e) {
    console.log(e);
  }
  //   return res
  //     .cookie("access_token", token, {
  //       maxAge: 3600 * 24,
  //       path: "/",
  //       httpOnly: false,
  //       sameSite: "None", // отправка cookie
  //       secure: true,
  //     })
  //     .status(200)
  //     .json({ user: user });
};
module.exports = generateToken;
