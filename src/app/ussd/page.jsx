import React from "react";

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
						Your lifeline when you&apos;re off the grid. In times of crisis, help is
						only a few button presses away with SupportSync&apos;s USSD service.
					</p>
				</div>

				{/* USSD Flow - Step by Step */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-center text-blue-600">
						USSD Flow - Step by Step
					</h2>
					<p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4">
						Below is the flow of how the USSD service works, from dialing the USSD code to receiving emergency help.
					</p>

					{/* Image Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{/* Image 1 */}
						<div className="text-center">
							<img
								src="/assets/ussd1.jpg"
								alt="USSD Menu"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 1: Initial USSD Menu</p>
						</div>

						{/* Image 2 */}
						<div className="text-center">
							<img
								src="/assets/ussd2.jpg"
								alt="Enter Emergency Contact"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 2: Enter Emergency Contact</p>
						</div>

						{/* Image 3 */}
						<div className="text-center">
							<img
								src="/assets/ussd3.jpg"
								alt="Contact Saved"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 3: Contact Saved Confirmation</p>
						</div>

						{/* Image 4 */}
						<div className="text-center">
							<img
								src="/assets/ussd4.jpg"
								alt="View Registered Contacts"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 4: View Registered Contacts</p>
						</div>

						{/* Image 5 */}
						<div className="text-center">
							<img
								src="/assets/ussd5.jpg"
								alt="Select Contact to Remove"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 5: Select Contact to Remove</p>
						</div>

						{/* Image 6 */}
						<div className="text-center">
							<img
								src="/assets/ussd6.jpg"
								alt="Contact Removed"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 6: Contact Removed Confirmation</p>
						</div>

						{/* Image 7 */}
						<div className="text-center">
							<img
								src="/assets/ussd7.jpg"
								alt="SOS Alert Sent"
								className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
							/>
							<p className="mt-4 text-lg text-gray-600">Step 7: SOS Alert Sent</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<h2 className="text-3xl font-bold text-blue-600">
						Get Help Anytime, Anywhere
					</h2>
					<p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
						With SupportSync&apos;s USSD emergency service, you can rest easy knowing
						that help is just a few button presses away, no matter how remote
						your location. Dial <strong>*384*28228#</strong> for immediate
						assistance.
					</p>
				</div>
			</div>
		</section>
	);
};

export default USSDPage;