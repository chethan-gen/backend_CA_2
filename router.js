const express = require("express");
const routes = express.Router();
const User = require("./schema");

routes.post("/signUp", async (req, res) => {
    try {
        const { userName, email, password, dateOfBirth } = req.body;

        
        if (!userName) {
            return res.status(400).send("UserName cannot be empty");
        }

        if (!email) {
            return res.status(400).send("Email cannot be empty");
        }

        if (!password || password.length < 8 || password.length > 16) {
            return res.status(400).send("Password must be between 8 and 16 characters");
        }

       
        const newUser = new User({
            userName,
            email,
            password,
            dateOfBirth
        });

        const savedUser = await newUser.save();

        if (!savedUser) {
            return res.status(400).send("The user was not created");
        }

        res.status(200).send({
            message: "User created successfully",
            savedUser
        });
    } catch (error) {
        res.status(500).send({
            message: "Something went wrong",
            error: error.message
        });
    }
});

module.exports = routes;
