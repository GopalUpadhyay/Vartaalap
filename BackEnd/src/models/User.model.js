import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	FirstName: {
		type: String,
		require: true,
	},
	LastName: {
		type: String,
		require: true,
	},
	mail: {
		type: String,
		require: true,
	},
	phone: {
		type: Number,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

const User = mongoose.model("User", userSchema);
export default User;
