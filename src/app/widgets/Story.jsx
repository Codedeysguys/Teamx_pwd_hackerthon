import React from "react";

const StorySection = () => {
	// Define the name as a variable for easy customization
	const name = "Kamila";

	return (
		<section className="py-16 px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-12">{`${name}'s Story`}</h2>
				<div className="flex flex-col md:flex-row items-center justify-center gap-12">
					<div className="w-full md:w-1/3">
						<div className="h-64 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
							<img
								src="https://via.placeholder.com/300"
								alt={`${name}'s Story`}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="w-full md:w-2/3 text-left">
						<h3 className="text-2xl font-semibold mb-4">Meet {name}</h3>
						<p className="text-lg text-gray-600 mb-6">
							{name} is a 21-year-old university student in her 4th year, living
							with a physical disability that affects her mobility. Relying on
							crutches to get around, {name} faces multiple challenges every
							day, from navigating the uneven terrains of her university campus
							in Kenya to feeling isolated from her peers due to mobility
							restrictions.
						</p>

						<h4 className="text-xl font-semibold mb-2">The Problem:</h4>
						<p className="text-lg text-gray-600 mb-6">
							{name} often finds herself struggling to access emergency services
							in case of medical issues. Due to her limited mobility, she cannot
							easily visit medical centers or engage in face-to-face
							consultations. On top of that, staying connected with friends and
							fellow students is difficult as she cannot always participate in
							social events. Living in a third-world country where disability
							support is often underfunded, she finds it hard to feel included,
							safe, and supported.
						</p>

						<h4 className="text-xl font-semibold mb-2">The Solution:</h4>
						<p className="text-lg text-gray-600 mb-6">
							<strong>Our platform</strong> provides {name} with a lifeline to
							the support she needs:
						</p>

						<ul className="list-disc list-inside text-gray-600 mb-6">
							<li>
								<strong>Blog and Chat Coverage:</strong> {name} can easily
								interact with her peers and other disabled individuals through
								our real-time chat feature, breaking down the barriers of
								isolation. She can participate in meaningful conversations,
								share her experiences, and learn from others in similar
								situations.
							</li>
							<li>
								<strong>USSD Emergency Service:</strong> In case of medical
								emergencies, {name} can instantly access emergency services
								through a simple USSD code, ensuring that help is just a few
								button presses away, even when she doesn&apos;t have access to the
								internet.
							</li>
							<li>
								<strong>Expert Advice:</strong> {name} can seek medical and
								psychological advice from certified professionals and AI-driven
								assistants without needing to visit medical centers physically.
								This helps her manage her condition and maintain her well-being
								while balancing her academic life.
							</li>
							<li>
								<strong>Google Locator with IoT:</strong> {name}&apos;s family can
								use our locator feature to track her movements and ensure her
								safety as she navigates her university or travels to different
								locations. If {name} gets stuck somewhere, her family can
								immediately know her location and provide assistance.
							</li>
						</ul>

						<p className="text-lg text-gray-600 mb-6">
							Thanks to this platform, {name} can now focus on her studies, stay
							connected with friends, and feel safe knowing that help is always
							available when needed. Our solution empowers her to lead a more
							independent and fulfilling life.
						</p>

						<a
							href="#learn-more"
							className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
						>
							Learn More About Our Impact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StorySection;
