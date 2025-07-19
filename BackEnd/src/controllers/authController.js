import express from "express";
import User from "../models/User.model.js";
import { generateTokens } from "../config/utils.js";
import bcrypt, { decodeBase64 } from "bcryptjs";

export const signup = async (req, res) => {
	if (!req.body) {
		return res.status(400).json({ message: "Request body is missing" });
	}

	const { FirstName, LastName, Email, Phone, Password } = req.body;
	if (!FirstName || !LastName || !Email || !Phone || !Password) {
		return res.status(400).json({ message: "Enter the Valid Details." });
	}

	try {
		if (Password.length < 6)
			return res.status(400).json({ message: "Invalid Password." });

		const user = await User.findOne({ Email });
		if (user) {
			return res
				.status(400)
				.json({ message: "Email Already Exists, Try With New Email." });
		}

		// Password Hashing.
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(Password, salt);

		const newUser = new User({
			FirstName,
			LastName,
			Email,
			Phone,
			Password: hashedPassword,
		});
		await newUser.save();

		// Generate JWT Token Here.
		generateTokens(newUser._id, res);

		res.status(201).json({
			_id: newUser._id,
			FirstName: newUser.FirstName,
			LastName: newUser.LastName,
			Email: newUser.Email,
		});
	} catch (error) {
		console.log("Error In SignIn: " + error.message);
		return res.status(500).json({ message: "Internal Server Error." });
	}
};

export const login = async (req, res) => {
	const { Email, Password } = req.body;

	try {
		if (!Email || !Password)
			return res.status(400).json({ message: "Invalid Credential!" });

		const user = await User.findOne({ Email });
		if (!user) return res.status(400).json({ messsage: "User Not Found!" });

		const isPassword = bcrypt.compare(Password, user.Password);
		if (!isPassword)
			return res.status(400).json({ message: "Invalid Password!" });

		generateTokens(user._id, res);

		res.status(201).json({
			_id: user._id,
			FirstName: user.FirstName,
			LastName: user.LastName,
			Email: user.Email,
		});
	} catch (error) {
		console.log("Error In Login Controller: " + error.message);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
};

export const logout = async (req, res) => {
	try {
		res.cookie("JWT_Token", "", { maxAge: 0 });
		res.status(201).json({ message: "Logout Succesuflly" });
	} catch (error) {
		console.log("Error In Logout Controller: " + error.message);
		res.status(500).json({ message: "Internal Server Error." });
	}
};

export const checkAuth = (req, res) => {
	try {
		// First Check the User using the Middleware and attach the user to req.user and returns if
		// Authencited if not then NULL
		return res.status(200).json(req.user);
	} catch (error) {
		console.log("Error In checkAuth Controller: " + error.message);
		return res.status(500).json({ message: "Internam Server Error." });
	}
};
