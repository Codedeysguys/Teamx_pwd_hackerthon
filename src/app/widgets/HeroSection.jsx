"use client";

import React, { useState } from "react";

const HeroSection = () => {
	// State to manage the popup
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	// Function to toggle popup visibility
	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<>
			<section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white animate-fade-in">
				<h1 className="text-5xl font-bold mb-4">
					SupportSync: Empowering People with Disabilities
				</h1>
				<p className="text-xl mb-6 max-w-3xl">
					SupportSync is a platform designed to foster interaction, provide
					emergency services, enable translation, and offer location tracking
					for PWDs, ensuring they stay connected and safe.
				</p>
				<button
					onClick={togglePopup}
					className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md hover:bg-blue-100 transition"
				>
					Get Started
				</button>
			</section>

			{/* Popup form */}
			{isPopupOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
					<div className="bg-white p-6 rounded-sm shadow-lg w-full max-w-lg">
						<h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
						<form className="space-y-4">
							<div>
								<label className="block text-gray-700 font-semibold mb-2">
									Name
								</label>
								<input
									type="text"
									placeholder="Your Name"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-gray-700 font-semibold mb-2">
									Email
								</label>
								<input
									type="email"
									placeholder="Your Email"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-gray-700 font-semibold mb-2">
									Preferred Date
								</label>
								<input
									type="date"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-gray-700 font-semibold mb-2">
									Message
								</label>
								<textarea
									placeholder="Your Message"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								></textarea>
							</div>
							<div className="flex justify-between items-center">
								<button
									type="submit"
									className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
								>
									Submit
								</button>
								<button
									type="button"
									onClick={togglePopup}
									className="text-red-500 hover:underline"
								>
									Close
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default HeroSection;
