"use client";

import React, { useState } from "react";
import axios from "axios";

const TextToSignLanguage = () => {
	const [text, setText] = useState("");
	const [videoUrl, setVideoUrl] = useState("");

	// Handle the conversion request
	const handleConvert = async () => {
		try {
			// Example API call to Sora AI for translation
			const response = await axios.post("/api/convert", { text });
			setVideoUrl(response.data.videoUrl); // The URL to the video of the sign language
		} catch (error) {
			console.error("Error converting text to sign language:", error);
		}
	};

	return (
		<div className="py-16 px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-4xl font-bold text-blue-600">
					Text to Kenya Sign Language (Coming Soon)
				</h1>
				<p className="text-lg text-gray-700 mt-4">
					Our innovative tool allows you to convert written text into a dynamic
					Kenyan Sign Language video. Using advanced AI and Machine Learning
					(ML) techniques, this tool bridges the communication gap for the
					hearing impaired, providing a seamless text-to-sign language
					translation.
				</p>
				<p className="text-lg text-gray-700 mt-2">
					This feature is powered by cutting-edge algorithms that recognize
					written words and instantly transform them into Kenyan Sign Language,
					offering visual support for more inclusive communication.
				</p>

				{/* Text Input */}
				<div className="mt-6">
					<textarea
						className="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Type your text here..."
					></textarea>
					<button
						className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
						onClick={handleConvert}
					>
						Convert to Kenyan Sign Language
					</button>
				</div>

				<div className="mt-20 border p-20">
					<h2>Get Your Video Here</h2>
				</div>

				{/* Display the video */}
				{videoUrl && (
					<div className="mt-8">
						<h2 className="text-2xl font-semibold text-gray-800">
							Kenyan Sign Language Video
						</h2>
						<video
							controls
							className="mx-auto mt-4 max-w-full shadow-md rounded-md"
						>
							<source
								src={videoUrl}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				)}
			</div>

			{/* Coming soon note */}
			<div className="text-center mt-24">
				<p className="text-sm text-gray-600 italic">
					Note: This feature is currently in beta and will be available soon.
				</p>
			</div>
		</div>
	);
};

export default TextToSignLanguage;
