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
					Text to Kenya Sign Language
				</h1>
				<p className="text-lg text-gray-700 mt-4">
					Input any text below, and we will translate it into Kenyan Sign
					Language.
				</p>

				{/* Text Input */}
				<div className="mt-6">
					<textarea
						className="w-full h-32 p-4 border border-gray-300 rounded-lg"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Type your text here..."
					></textarea>
					<button
						className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
						onClick={handleConvert}
					>
						Convert to Sign Language
					</button>
				</div>

				{/* Display the video */}
				{videoUrl && (
					<div className="mt-8">
						<h2 className="text-2xl font-semibold text-gray-800">
							Kenyan Sign Language Video
						</h2>
						<video
							controls
							className="mx-auto mt-4 max-w-full"
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
		</div>
	);
};

export default TextToSignLanguage;
