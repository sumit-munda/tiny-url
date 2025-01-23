import mongoose from "mongoose";

// define the schema for storing messages
const urlSchema = mongoose.Schema(
	{
		url: {
			type: String,
			required: true,
		},
		tinyurl: {
			type: String,
			required: true,
		},
	redirecturl: {
		type: String,
		required: true,
		default: function() {
			const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
			return `${BASE_URL}/redirect/${this.tinyurl}`
		}
	},
		createdAt: {
			type: Date,
			default: Date.now(),
		},
	},
	{
		timestamps: true,
	},
	// { collection: "urls" }
);

// create the model from the schema and store it in var
const TinyUrl = mongoose.model("TinyUrl", urlSchema);

export default TinyUrl;
