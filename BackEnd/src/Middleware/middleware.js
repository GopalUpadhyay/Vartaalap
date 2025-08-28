import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const protectedRoute = async (req, res, next) => {
	try {
		const token = req.cookies.JWT_Token;

		if (!token) {
			return res
				.status(400)
				.json({ message: "UnAuthorised: No Token Provided" });
		}

		const decode = jwt.verify(token, process.env.JWT_SECRET);
		if (!decode) {
			return res.status(400).json({ message: "UnAuthorised Token." });
		}

		const user = await User.findById(decode.userId).select("-password");
		if (!user) {
			return res.status(400).json({ message: "User Not Found." });
		}

		req.user = user;
		next();
	} catch (error) {
		console.log("Error in the Middleware.js: " + error);
		res.status(400).json({ message: "Internal Server Error." });
	}
};
