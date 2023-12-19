const userData = require("../userData/data.json");
const { writeFile } = require("fs");

const signin = (req, res) => {
  const { email_id, password } = req.body;
  if (email_id && password) {
    const user = userData.find((user) => {
      console.log(user.email_id === email_id, user.password === password);
      if (user.email_id === email_id && user.password === password) {
        return true;
      }
    });
    console.log(email_id, password, user);

    if (user) {
      res.status(200).json({ message: "success", details: user });
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } else {
    res
      .status(404)
      .json({ error: "email id or password is missing from client side" });
  }
};

const signup = (req, res) => {
  const userDetails = req.body;
  if (userDetails) {
    userData.push(userDetails);
    console.log(userData, __dirname);
    writeFile("./src/userData/data.json", JSON.stringify(userData), (err) => {
      if (!err) {
        res.status(201).json({ message: "successful" });
      } else {
        res.status(404).json({ error: "signup failed" });
      }
    });
  } else {
    res.status(404).json({ error: "signup failed" });
  }
};
module.exports = { signup, signin };
