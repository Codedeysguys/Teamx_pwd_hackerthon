import React from "react";
import {
	FaAccessibleIcon,
	FaPrint,
	FaClock,
	FaGlobeAfrica,
} from "react-icons/fa";

const ProtheaPage = () => {
	return (
		<section className="py-16 px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				{/* Title Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-blue-600">
						Prothea Solutions - Innovative Prosthetic and Orthotic Care
					</h1>
					<p className="text-lg text-gray-700 mt-4">
						Affordable, high-quality prosthetic solutions using cutting-edge 3D
						printing technology, restoring mobility and dignity to individuals
						in need.
					</p>
				</div>

				{/* Key Features */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl font-semibold text-blue-600">
							Why Prothea?
						</h2>
						<ul className="list-none text-lg text-gray-700">
							<li className="flex items-start mb-4">
								<FaAccessibleIcon className="text-blue-600 text-2xl mr-4" />
								<span>
									<strong>Affordable Custom Prosthetics:</strong> Using 3D
									printing to produce prosthetics at lower costs, breaking
									financial barriers.
								</span>
							</li>
							<li className="flex items-start mb-4">
								<FaPrint className="text-blue-600 text-2xl mr-4" />
								<span>
									<strong>Quick Turnaround Time:</strong> Manufacture
									prosthetics in days, not weeks, accelerating the recovery
									process.
								</span>
							</li>
							<li className="flex items-start mb-4">
								<FaClock className="text-blue-600 text-2xl mr-4" />
								<span>
									<strong>Enhanced Mobility:</strong> Lightweight and flexible,
									Prothea&apos;s prosthetics provide better comfort for everyday use.
								</span>
							</li>
							<li className="flex items-start mb-4">
								<FaGlobeAfrica className="text-blue-600 text-2xl mr-4" />
								<span>
									<strong>High Scalability:</strong> Prothea&apos;s growing impact
									across Kenya, with over 100 prosthetics delivered and
									counting.
								</span>
							</li>
						</ul>
					</div>

					{/* Image Section */}
					<div className="text-center">
						<img
							src="/assets/prothea.jpg"
							alt="Prothea Prosthetics"
							className="rounded-lg shadow-lg"
						/>
					</div>
				</div>

				{/* Impact Section */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-center text-blue-600">
						Impact and Innovation
					</h2>
					<p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mt-4">
						Prothea is transforming prosthetic care in Kenya by providing
						high-quality, affordable prosthetics, enabling individuals with limb
						loss to regain their independence. Their use of advanced 3D printing
						technology allows for personalized, durable, and comfortable
						solutions at a fraction of the traditional cost.
					</p>

					{/* Grid of Impact Features */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<FaAccessibleIcon className="text-blue-600 text-4xl mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-blue-600">
								Affordable Prosthetics
							</h3>
							<p className="text-gray-600 mt-2">
								Lowering the cost through 3D printing, making prosthetics
								accessible to more people.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg">
							<FaPrint className="text-blue-600 text-4xl mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-blue-600">
								Quick Turnaround
							</h3>
							<p className="text-gray-600 mt-2">
								Rapid production with 3D printing, reducing the wait time for
								prosthetics.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg">
							<FaGlobeAfrica className="text-blue-600 text-4xl mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-blue-600">
								Social Impact
							</h3>
							<p className="text-gray-600 mt-2">
								Serving individuals across Kenya, empowering them to live more
								fulfilling lives.
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<h2 className="text-3xl font-bold text-blue-600">
						Support Prothea’s Mission
					</h2>
					<p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
						Join us in supporting individuals with mobility challenges by
						choosing Prothea’s innovative solutions. Every prosthetic changes a
						life, and together, we can make a lasting impact.
					</p>
					<a
						href="https://www.prothea.co.ke"
						target="_blank"
						className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
					>
						Visit Prothea
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProtheaPage;
