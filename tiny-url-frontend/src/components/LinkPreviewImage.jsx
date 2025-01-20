import React, { useState } from "react";
import axios from "axios";

const LinkPreviewImage = () => {
	const [link, setLink] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [error, setError] = useState("");

	// Handle link input change
	const handleInputChange = (e) => {
		setLink(e.target.value);
	};

	// Fetch OG image from backend
	const fetchOgImage = async () => {
		if (link) {
			try {
				const response = await axios.get(
					`http://locahost:5000/fetch-og-image?url=${encodeURIComponent(link)}`
				);
				setImageUrl(response.data.imageUrl);
				setError("");
			} catch (error) {
				setError("Error fetching OG image. Please try again.");
				setImageUrl("");
			}
		} else {
			setError("Please enter a valid URL");
		}
	};

	return (
		<div className="container">
			<h3>Fetch Website Preview</h3>
			<input
				type="url"
				value={link}
				onChange={handleInputChange}
				placeholder="Paste your url here and..."
			/>
			<button onClick={fetchOgImage}>Get Preview</button>
			{imageUrl && (
				<div>
					<h3>Website Preview</h3>
					<img
						src={imageUrl}
						alt="Website Preview"
						style={{ width: "300px" }}
					/>
				</div>
			)}

			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
};

export default LinkPreviewImage;
