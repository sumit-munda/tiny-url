import React, { useState } from "react";
import InputShortener from "./InputShortner"; // Make sure you import this component
import LinkResult from "./LinkResult";

const UrlShortner = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="container">
			{/* Correctly self-closing the InputShortener component */}
			<InputShortener setInputValue={setInputValue} />
			{/* Passing inputValue to LinkResult */}
			<LinkResult inputValue={inputValue} />
		</div>
	);
};

export default UrlShortner;
