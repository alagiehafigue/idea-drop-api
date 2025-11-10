import express from "express";
import mongoose from "mongoose";
import User from "../models/User.js";

const router = express.Router();

// @router        POST api/auth/register
// @description   Register new user
// @access        Public

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("All Fields is required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400);
      throw new Error("User already Exists");
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;
