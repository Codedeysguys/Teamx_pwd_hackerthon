import React from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaLifeRing } from "react-icons/fa";

const USSDPage = () => {
	return (
		<section className="py-16 px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				{/* Title Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-blue-600">
						SupportSync USSD Emergency Service
					</h1>
					<p className="text-lg text-gray-700 mt-4">
						Your lifeline when you're off the grid. In times of crisis, help is
						only a few button presses away with SupportSync's USSD service.
					</p>
				</div>

				{/* Illustration + Key Points */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Illustration */}
					<div className="text-center">
						<img
							src="assets/ussd.jpg"
							alt="USSD Service Illustration"
							className="rounded-lg shadow-lg"
						/>
					</div>

					{/* Key Points */}
					<div className="space-y-6">
						<h2 className="text-3xl font-semibold text-blue-600">
							Why USSD Matters
						</h2>
						<p className="text-lg text-gray-600">
							USSD (Unstructured Supplementary Service Data) is a critical
							service for people living in remote areas where access to the
							internet is limited or unavailable. Through SupportSync's USSD
							service, users can instantly access emergency help, communicate
							with rescue teams, and receive assistance even in the most
							disconnected environments.
						</p>
						<ul className="list-disc list-inside text-lg text-gray-700">
							<li>Available without internet access</li>
							<li>Simple and accessible from any mobile phone</li>
							<li>Works in remote areas where coverage is minimal</li>
							<li>Immediate connection to emergency services</li>
						</ul>
					</div>
				</div>

				{/* How It Works Section */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-center text-blue-600">
						How Does It Work?
					</h2>
					<p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4">
						When faced with an emergency, simply dial <strong>*3363#</strong>{" "}
						using any mobile phone. This instantly connects you to local
						emergency services, no matter where you are or your connection
						status. Whether you're stranded in a remote village, or facing a
						medical emergency in a place with limited infrastructure,
						SupportSync's USSD service bridges the gap and ensures help is on
						the way.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<FaMobileAlt className="text-blue-500 text-6xl mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-blue-600">
								Dial *3363#
							</h3>
							<p className="text-gray-600 mt-2">
								Using any mobile phone, dial <strong>*3363#</strong> to connect
								instantly to emergency responders.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg">
							<FaMapMarkerAlt className="text-green-500 text-6xl mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-green-600">
								Location Detection
							</h3>
							<p className="text-gray-600 mt-2">
								SupportSync's system captures your location, allowing responders
								to know exactly where you are even if you can't describe it.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg">
							<FaLifeRing className="text-red-500 text-6xl mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-red-600">
								Immediate Response
							</h3>
							<p className="text-gray-600 mt-2">
								Once connected, emergency services are dispatched to your exact
								location, ensuring quick help.
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<h2 className="text-3xl font-bold text-blue-600">
						Get Help Anytime, Anywhere
					</h2>
					<p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
						With SupportSync's USSD emergency service, you can rest easy knowing
						that help is just a few button presses away, no matter how remote
						your location. Dial <strong>*3363#</strong> for immediate
						assistance.
					</p>
				</div>
			</div>
		</section>
	);
};

export default USSDPage;
