import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
	const [link, setLink] = useState("");
	const [loading, setLoading] = useState("");

	return (
		<div className="container">
			<h1>Generate a QR Code</h1>
			<input
				type="url"
				value={link}
				onChange={(e) => setLink(e.target.value)}
				placeholder="Paste your url here and."
			/>
        {loading && <p>Loading...</p> }
			{link && (
				<div>
					<QRCode
						value={link}
						size={256}
					/>
				</div>
			)}
		</div>
	);
};

export default QrCode;
