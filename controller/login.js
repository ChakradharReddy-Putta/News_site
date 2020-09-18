const User = require("../model/user");
const News = require("../model/news");

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

exports.index = async (req, res, next) => {
  const headline = req.body.headline;
  const context = req.body.context;
  const postlink = req.body.postlink;
  const imagelink = req.body.imagelink;
  try {
    const news = new News({
      headline: headline,
      context: context,
      postlink: postlink,
      imagelink: imagelink,
    });
    const result = await news.save();
    res.status(201).redirect("/index");
  } catch (err) {
    console.log(err);
    res.redirect("/index");
  }
};
