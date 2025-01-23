import TinyUrl from "../models/tinyurlModel.js";
import crypto from "crypto";

// controller to handle GET request (fetch a specific tinyurl document)
const getTinyUrlDoc = async (req, res) => {
	try {
		const { tinyurl } = req.params;

		// Find the document based on the tinyurl
		const foundUrl = await TinyUrl.findOne({ tinyurl });

		if (!foundUrl) {
			return res.status(404).json({ message: "TinyUrl not found." });
		}

		// Return the found document details
		res.json({
			message: "TinyUrl found", // Changed for consistency
			tinyurl: foundUrl.tinyurl,
			url: foundUrl.url, // Added url to be returned
			createdAt: foundUrl.createdAt,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server error, please try again later." }); // More user-friendly message
	}
};

// controller to handle GET request (fetch all messages)
const getTinyUrls = async (req, res) => {
	try {
		const tinyurls = await TinyUrl.find(); // fetch all messages from the database as an array of documents
		res.json(tinyurls);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server error" });
	}
};

// helper method to check if a tiny url already exists
const checkTinyUrlExists = async (tinyurl) => {
	const existingUrl = await TinyUrl.findOne({ tinyurl });
	return existingUrl;
};

// controller to handle POST request (create a new tinyurl)
const postTinyUrl = async (req, res) => {
	try {
		const { url, tinyurl } = req.body;

		if (!url) {
			return res.status(400).json({ message: "URL is required" });
		}

		// generate a random tinyurl if not provided
		const finalTinyUrl = tinyurl || crypto.randomBytes(4).toString("hex");

		// check if the tinyurl already exists in the database
		const existingUrl = await checkTinyUrlExists(finalTinyUrl);

		if (existingUrl) {
			return res.status(400).json({
				message:
					"This shortened URL already exists. Please select a different one.",
			});
		}

		// create a new tinyurl document
		const newUrl = new TinyUrl({
			tinyurl: finalTinyUrl,
			url,
		});

		// save the new document to the database
		await newUrl.save();

		// send a response with the created tinyurl
		res.json({
			message: `TinyUrl created: ${finalTinyUrl}`,
			createdAt: newUrl.createdAt,
			tinyurl: finalTinyUrl,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server error" });
	}
};

// helper method to fetch the full url for a given tinyurl
const getTinyUrl = async (tinyurl) => {
	const foundUrl = await TinyUrl.findOne({ tinyurl });
	return foundUrl ? foundUrl.url : null;
};

// controller to handle redirect request (redirect to the long url)
const redirectToTinyUrl = async (req, res) => {
	try {
		const { tinyurl } = req.params;

		// get the long url for the given tinyurl
		const redirectUrl = await getTinyUrl(tinyurl);

		if (!redirectUrl)
			return res.status(404).json({ message: "404 page not found." });

		// redirect to the long url
		return res.redirect(redirectUrl);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server error." });
	}
};

// controller to handle PUT request (update an existing tinyurl)
const patchTinyUrl = async (req, res) => {
	try {
	  const { tinyurl } = req.params;
	  const { url, newTinyUrl } = req.body;
  
	  // Validate input - at least one of 'url' or 'newTinyUrl' must be provided
	  if (!url && !newTinyUrl) {
		return res.status(400).json({
		  message: "Please provide either a new URL or new TinyUrl to update.",
		});
	  }
  
	  // Check if the tinyurl exists
	  const existingUrl = await TinyUrl.findOne({ tinyurl });
  
	  if (!existingUrl) {
		return res.status(404).json({ message: "TinyUrl not found." });
	  }
  
	  // Check if the newTinyUrl already exists in the database (if provided)
	  if (newTinyUrl && newTinyUrl !== tinyurl) {
		const duplicateTinyUrl = await checkTinyUrlExists(newTinyUrl);
		if (duplicateTinyUrl) {
		  return res.status(400).json({
			message: "This new TinyUrl already exists. Please choose a different one.",
		  });
		}
		existingUrl.tinyurl = newTinyUrl;
	  }
  
	  // Update the URL if a new one is provided
	  if (url) {
		existingUrl.url = url;
	  }
  
	  // Save the updated document to the database
	  const updatedUrl = await existingUrl.save(); // Ensure you await the save operation
  
	  // Return the updated document details, including the new 'url' and 'tinyurl'
	  res.json({
		message: `TinyUrl updated: ${updatedUrl.tinyurl}`,
		updatedAt: updatedUrl.updatedAt,
		tinyurl: updatedUrl.tinyurl,
		url: updatedUrl.url,  // Include the 'url' in the response
	  });
	} catch (error) {
	  console.error(error.message);
	  res.status(500).json({ message: "Server error" });
	}
  };
  
  

// controller to handle DELETE request (delete a tinyurl)
const deleteTinyUrl = async (req, res) => {
	try {
		const { tinyurl } = req.params;

		// find and delete the document based on the tinyurl
		const deletedUrl = await TinyUrl.findOneAndDelete({ tinyurl });

		if (!deletedUrl) {
			return res.status(404).json({ message: "TinyUrl not found." });
		}

		res.json({
			message: `TinyUrl with tinyurl: ${tinyurl} has been deleted.`,
			deletedAt: deletedUrl.createdAt,
			tinyurl: deletedUrl.tinyurl,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server error" });
	}
};

export {
	getTinyUrls,
	postTinyUrl,
	redirectToTinyUrl,
	patchTinyUrl,
	deleteTinyUrl,
	getTinyUrlDoc,
};
