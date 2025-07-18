import express from "express";
import User from "../models/User.model.js";
import { generateTokens } from "../config/utils.js";

export const signup = async (req, res) => {
	if (!req.body) {
		return res.status(400).json({ message: "Request body is missing" });
	}

	const { email, firstName, LastName, phone, Password } = req.body;
	if ((!email || !firstName, !LastName, !phone, !Password)) {
		return res.status(400).json({ message: "Enter the Valid Details." });
	}

	try {
		if (Password.length() < 6)
			return res.status(400).json({ message: "Invalid Password." });

		const user = await User.findOne({ email });
		if (user) {
			return res
				.status(400)
				.json({ message: "Email Already Exists. Try With New Email." });
		}

		// Password Hashing.
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			FirstName: firstName,
			LastName: LastName,
			email: email,
			phone: phone,
			Password: hashedPassword,
		});
		await newUser.save();

		// Generate JWT Token Here.
		generateTokens(newUser._id, res);

		return res.status(201).json({
			id: newUser._id,
			firstName: newUser.firstName,
			LastName: newUser.LastName,
			email: newUser.email,
		});
	} catch (error) {
		console.log("Error In authController." + error.message);
		return res.status(400).json({ message: "Internal Server Error." });
	}
};

export const login = async (req, res) => {
    
};

export const logout = async (req, res) => {};
