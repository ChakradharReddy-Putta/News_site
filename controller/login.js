const User = require("../model/user");

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 401;
      throw error;
    }
    if (password != user.password) {
      console.log("wrong password");
      res.redirect("/");
    } else {
      console.log("login success");
      res.redirect("/index");
    }
    res.redirect("/index");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};
