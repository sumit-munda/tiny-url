import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend to make requests to backend
app.use(cors());

// Function to fetch OG image
const getOgImage = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);  // Corrected here
		const ogImage = $('meta[property="og:image"]').attr("content");
		return ogImage || null;
	} catch (error) {
		console.error("Error fetching OG image: ", error);
		return null;
	}
};

// Define API route to fetch the image
app.get("/fetch-og-image", async (req, res) => {
	const { url } = req.query; // Extract URL from query parameters
	if (!url) {
		return res.status(400).json({ error: "URL is required" });
	}

	const ogImage = await getOgImage(url);  // Fetch OG image for the provided URL
	if (ogImage) {
		res.json({ imageUrl: ogImage });  // Respond with the OG image URL
	} else {
		res.status(404).json({ error: "OG image not found" });
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
