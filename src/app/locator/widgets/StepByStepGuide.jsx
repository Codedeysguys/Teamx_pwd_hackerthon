import React from "react";

const StepByStepGuide = () => {
	return (
		<div className="mt-16 bg-blue-50 py-12">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Step-by-Step Guide
			</h2>
			<p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4">
				Follow these steps to implement the Google Locator with IoT in your
				system:
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-blue-600">
						Step 1: Set Up the IoT Button
					</h3>
					<p className="text-gray-600 mt-2">
						Configure a simple IoT button that users can press during an
						emergency. Ensure it is connected to the network for sending
						signals.
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-blue-600">
						Step 2: Integrate Google Maps API
					</h3>
					<p className="text-gray-600 mt-2">
						Use the Google Maps API to capture and track the location of the
						user once the IoT button is pressed.
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-blue-600">
						Step 3: Send Automated Alerts
					</h3>
					<p className="text-gray-600 mt-2">
						Send an alert to representatives, providing exact coordinates and a
						map link.
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-blue-600">
						Step 4: Respond with Assistance
					</h3>
					<p className="text-gray-600 mt-2">
						Ensure a response team is always ready to act on location-based
						alerts.
					</p>
				</div>
			</div>
		</div>
	);
};

export default StepByStepGuide;
