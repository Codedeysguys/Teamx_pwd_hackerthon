"use server";
import axios from "axios";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { text } = req.body;

		try {
			// API request to Sora AI for sign language conversion
			const response = await axios.post("https://sora-ai-api.com/translate", {
				text,
				language: "sign", // Assuming 'sign' is the language for translation
			});

			// Assuming the response contains the video URL for the sign language
			const videoUrl = response.data.videoUrl;

			return res.status(200).json({ videoUrl });
		} catch (error) {
			console.error("Error with Sora AI API:", error);
			return res
				.status(500)
				.json({ error: "Failed to convert text to sign language" });
		}
	} else {
		// Handle any non-POST request
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
