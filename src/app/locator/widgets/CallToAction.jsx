import React from "react";

const CallToAction = () => {
	return (
		<div className="mt-16 text-center">
			<h2 className="text-3xl font-bold text-blue-600">
				Ready to Implement Google Locator?
			</h2>
			<p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
				SupportSync&apos;s Google Locator helps track and assist individuals in
				distress. Implement this feature today and ensure timely assistance to
				those in need.
			</p>
			<a
				href="#get-started"
				className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
			>
				Get Started
			</a>
		</div>
	);
};

export default CallToAction;
