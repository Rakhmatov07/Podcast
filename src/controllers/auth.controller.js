const bcrypt = require("bcrypt");
const Io = require("../utils/io");
const userValidation = require("../validations/auth.validation");
const Users = new Io("./database/users.json");
const User = require("../models/User");
const jwt = require("../utils/jwt");

const login = async (req, res) => {
  try {
        // Read elements from input
    const {username, password} = req.body;

      // Validate inputs if user is not found show valid error and redirect to "LogIn" page
    // const error = userValidation({username, password});
    // if (error){
    //   window.alert(error);
    //   return res.redirect("/admin");
    // } 

      // find user by username and check password
    const users = await Users.read();
    const findUser = users.find((user) => user.username === username);
    if (!findUser) {
      return res.redirect("/login");
    }

    const checkPass = await bcrypt.compare(password, findUser.password);
    if (!checkPass) {
      return res.redirect("/login");
    }

      // If user is found and role is admin save token to cookies and redirect to "admin" panel
    const token = jwt.sign({userId: findUser.id});
    res.cookie("token", token);
    res.redirect("/admin");
  } catch (error) {
    return res.redirect("/login");
  }
};

const loginGet = async (req, res) => {
  res.render("login");
};

module.exports = {
  login,
  loginGet,
};
