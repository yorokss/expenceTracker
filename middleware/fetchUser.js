const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const fetchUser = (req, res, next) => {
    try {
        const token = req.header('auth-token');

      
        if (!token) {
            return res.status(401).json({ error: "Please authenticate using a valid token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
        req.user = decoded

        next(); 
    } catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({ error: "Invalid or expired token, please authenticate again" });
    }
};

module.exports = fetchUser;
