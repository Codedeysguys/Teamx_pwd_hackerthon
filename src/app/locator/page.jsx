import React from "react";
import TitleSection from "./widgets/TitleSection";
import KeyPoints from "./widgets/KeyPoints";
import StepByStepGuide from "./widgets/StepByStepGuide";
// import CallToAction from "./widgets/CallToAction";
import MapModule from "./widgets/MapModule";

const GoogleLocatorPage = () => {
	return (
		<section className="py-16 px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				{/* Title Section */}
				<TitleSection />

				{/* Key Points Section */}
				<KeyPoints />

				{/* Map Module Section */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-center text-blue-600">
						View Locations of People in Distress
					</h2>
					<p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4">
						Below is a map showing the locations of individuals in need of help.
						These locations are shared through the IoT button.
					</p>
					<MapModule />
				</div>

				{/* Step by Step Guide */}
				<StepByStepGuide />

				{/* Call to Action
				<CallToAction /> */}
			</div>
		</section>
	);
};

export default GoogleLocatorPage;
