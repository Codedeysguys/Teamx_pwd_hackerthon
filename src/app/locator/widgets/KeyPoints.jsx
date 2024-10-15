import React from "react";
import { FaToolbox, FaMapMarkerAlt, FaBell } from "react-icons/fa";

const KeyPoints = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div className="text-center">
				<img
					src="/assets/locator.jpg"
					alt="Google Locator Illustration"
					className="rounded-lg shadow-lg"
				/>
			</div>

			<div className="space-y-6">
				<h2 className="text-3xl font-semibold text-blue-600">
					Why the Google Locator is Critical
				</h2>
				<p className="text-lg text-gray-600">
					The SupportSync Google Locator is designed to quickly track and assist
					individuals in need of help. By integrating IoT with Google Maps, we
					ensure that people can send their location at the press of a button
					and receive timely assistance.
				</p>
				<ul className="list-disc list-inside text-lg text-gray-700">
					<li>Immediate location sharing at the press of an IoT button</li>
					<li>Accurate tracking using Google Maps</li>
					<li>Automated alerts sent to representatives</li>
					<li>Timely assistance for individuals in distress</li>
				</ul>
			</div>
		</div>
	);
};

export default KeyPoints;
