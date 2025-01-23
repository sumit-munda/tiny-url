// node.js api server
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import tinyurlRoutes from "./routes/tinyurlRoutes.js";

// .load env vars
dotenv.config();

// connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT;

// middleware cors cross origin resource sharing
app.use(cors());

// for parsing JSON request bodies
app.use(express.json());

// use messageRoutes to handle all routes under /api/message
app.use("/", tinyurlRoutes);

app.get("/", (req, res) => {
	res.send("🚚 chalo delhi...");
});

// app.get("/api/message", (req, res) => {
// 	res.json({
// 		message:
// 			"https://unsplash.com/photos/green-trees-near-lake-and-snow-covered-mountain-during-daytime-3w_hlbOAibU",
// 	});
// });

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
