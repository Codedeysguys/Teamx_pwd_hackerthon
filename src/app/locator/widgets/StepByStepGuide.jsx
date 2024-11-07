import React from "react";

const StepByStepGuide = () => {
	return (
		<div className="mt-16 bg-blue-50 py-12">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				How it Works
			</h2>

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
						Step 2: Send Automated Alerts
					</h3>
					<p className="text-gray-600 mt-2">
						Send an alert to representatives by clicking, providing exact
						coordinates and a map link.
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold text-blue-600">
						Step 3: Track and Respond with Assistance
					</h3>
					<p className="text-gray-600 mt-2">
						Once an alert is sent we track them using Google Maps and get the location. There we may respond by sending 
						people to help them out.  
					</p>
				</div>
			</div>
		</div>
	);
};

export default StepByStepGuide;
