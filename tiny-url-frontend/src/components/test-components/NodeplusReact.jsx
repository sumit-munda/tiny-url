import axios from "axios";
import React, { useState, useEffect } from "react";

const NodeplusReact = () => {
	const [messages, setMessages] = useState([]); // Default as empty array
	const [newMessage, setNewMessage] = useState(""); // Input field state

	// Function to fetch messages from the server
	const fetchMessages = async () => {
		try {
			console.log("Fetching messages...");
			const res = await axios.get("http://localhost:5000/api/messages");
			console.log("Response from server:", res); // Log the entire response

			// Check if data is an array and extract the messages
			if (res.data && Array.isArray(res.data)) {
				const messageArray = res.data.map((item) => item.message); // Extracting message from each object
				console.log("Fetched messages:", messageArray);
				setMessages(messageArray);
			} else {
				console.error("Messages are not in the expected format.");
				setMessages([]); // Clear the messages if the structure is wrong
			}
		} catch (error) {
			console.error("Error fetching messages: ", error);
		}
	};

	// Fetch messages on initial render (optional)
	// useEffect(() => {
	// 	fetchMessages();
	// }, []);

	// Handle submitting a new message
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!newMessage) return; // Don't submit empty messages

		try {
			const res = await axios.post("http://localhost:5000/api/messages", {
				message: newMessage,
			});
			setMessages((prevMessages) => [...prevMessages, res.data.message]); // Add the new message to the list
			setNewMessage(""); // Clear the input box
		} catch (error) {
			console.error("Error posting message: ", error);
		}
	};

	return (
		<div className="container">
			<h1>Messages</h1>

			{/* Button to fetch messages */}
			<button onClick={fetchMessages}>Fetch All Messages</button>

			{/* Display all messages */}
			<div>
				{messages && messages.length > 0 ? (
					<ul>
						{messages.map((msg, index) => (
							<li key={index}>{msg}</li>
						))}
					</ul>
				) : (
					<p>No messages found</p>
				)}
			</div>

			{/* Input box for posting a new message */}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					placeholder="Enter your message"
				/>
				<button type="submit">Post Message</button>
			</form>
		</div>
	);
};

export default NodeplusReact;
