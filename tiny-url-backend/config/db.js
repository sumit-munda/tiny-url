import mongoose from "mongoose";
import dotenv from "dotenv";

// load .env vars
dotenv.config();

const connectDB = async () => {
	try {
		// connect to mongodb using the url from .env
		const conn = await mongoose.connect(
			process.env.MONGODB_URI
		);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // exit the process with an error code
	}
};

export default connectDB;
