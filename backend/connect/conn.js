const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const mongoURL = process.env.MONGO_URL;

const conn = async (req, res) => {
    try {
        await mongoose.connect(mongoURL).then(console.log('Connected to MongoDB'));
    } catch (error) {
        res.status(400).json({ message: "not connected" });
    }

}

module.exports = conn;