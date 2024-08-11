const express = require('express');
const router = express.Router();
const User = require('../Schema/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register Route
router.post("/register", async (req, res) => {
    const { name, email, number, password } = req.body;
    try {
        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Create a new user
        const newUser = new User({
            name,
            email,
            number,
            password,
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration Error", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid Email" });
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid Password" });
        }

        // Create and send JWT token
        const token = jwt.sign({ email: user.email, role: user.role }, "jwt-screte-key", { expiresIn: '1d' });
        res.cookie('token', token);
        return res.json({ Status: "Success", role: user.role, id: user._id, token: token, userName: user.name });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/users", async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find({}, { password: 0 }); // Exclude the password field from the response
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
