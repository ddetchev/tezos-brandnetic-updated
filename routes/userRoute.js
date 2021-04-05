const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.route("/login").post((req, res,) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({
        email,
        username,
        password
    });

    newUser.save();
})

module.exports = router;