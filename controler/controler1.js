const Name = require("../model/model1");
const bcrypt = require('bcrypt');


const renderHome = (req, res) => {
  Name.find().then(() => {
    // Changed User to Name
    res.render("index");
  });
};


const addUser = (req, res) => {
  const saltRounds = 10; // You can adjust the number of salt rounds as needed
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).send('Error hashing password');
    }
    const newUser = new Name({
      name: req.body.name,
      password: hash
    });

    newUser.save().then((result) => {
      res.redirect("/");
    }).catch((error) => {
      res.status(500).send('Error saving user');
    });
  });
};


module.exports = { renderHome, addUser };

