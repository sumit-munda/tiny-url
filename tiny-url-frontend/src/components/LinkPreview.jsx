import React, { useState } from "react";

const LinkPreview = () => {
	const [link, setLink] = useState("");
	const [faviconUrl, setFaviconUrl] = useState("");

	const handleInputChange = (e) => {
		setLink(e.target.value);
	};

	const fetchFavicon = () => {
		if (link) {
			const domain = new URL(link).hostname;
			const favicon = `https://${domain}/favicon.ico`;
			setFaviconUrl(favicon);
		}
	};

	return (
		<div className="container">
			<input
				type="text"
				value={link}
				onChange={handleInputChange}
				placeholder="Paset your url here and ..."
			/>
			<button onClick={fetchFavicon}>Get Favicon</button>
			{faviconUrl && (
				<div>
					<h3>Website Favicon</h3>
					<img
						src={faviconUrl}
						alt="Favicon"
					/>
				</div>
			)}
		</div>
	);
};

export default LinkPreview;
