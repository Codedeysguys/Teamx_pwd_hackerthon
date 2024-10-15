import React from "react";

const HeroSection = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white animate-fade-in">
			<h1 className="text-5xl font-bold mb-4">
				SupportSync: Empowering People with Disabilities
			</h1>
			<p className="text-xl mb-6 max-w-3xl">
				SupportSync is a platform designed to foster interaction, provide
				emergency services, enable translation, and offer location tracking for
				PWDs, ensuring they stay connected and safe.
			</p>
			<button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md hover:bg-blue-100 transition">
				Get Started
			</button>
		</section>
	);
};

export default HeroSection;
