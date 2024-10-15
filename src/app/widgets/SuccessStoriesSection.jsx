import React from "react";

const SuccessStoriesSection = () => {
	return (
		<section className="py-16 px-8 bg-gray-100">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-12">
					Success Stories & Testimonials
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<TestimonialCard
						name="John Mwangi"
						image="https://via.placeholder.com/150"
						testimonial="Thanks to SupportSync, I’ve been able to stay connected with my family even during medical emergencies. The USSD emergency service is a life-saver!"
					/>
					<TestimonialCard
						name="Esther Kamau"
						image="https://via.placeholder.com/150"
						testimonial="The Text-to-Video Translation feature has made communicating with my hearing-impaired brother much easier. It’s truly changed our lives."
					/>
					<TestimonialCard
						name="Joseph Njeri"
						image="https://via.placeholder.com/150"
						testimonial="Using the Google Locator feature, my family can track me while I travel. I feel safe knowing they can always locate me."
					/>
				</div>
			</div>
		</section>
	);
};

const TestimonialCard = ({ name, image, testimonial }) => (
	<div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
		<img
			src={image}
			alt={name}
			className="w-24 h-24 rounded-full mx-auto mb-4"
		/>
		<h3 className="text-xl font-semibold mb-4">{name}</h3>
		<p className="text-gray-600 italic mb-6">&ldquo;{testimonial}&rdquo;</p>
	</div>
);

export default SuccessStoriesSection;
