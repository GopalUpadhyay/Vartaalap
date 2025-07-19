import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		FirstName: {
			type: String,
			require: true,
		},
		LastName: {
			type: String,
			require: true,
		},
		Email: {
			type: String,
			require: true,
		},
		Phone: {
			type: String,
			require: true,
		},
		Password: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
