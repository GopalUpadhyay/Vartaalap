import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URL);
		console.log("DataBase Connected Succesfully on: " + conn.connection.host);
	} catch (error) {
		console.log("Error In Connecting To the DataBase: " + error);
	}
};
