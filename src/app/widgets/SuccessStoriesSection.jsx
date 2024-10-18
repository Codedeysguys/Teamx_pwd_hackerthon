"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
	{
		name: "John Mwangi",
		image: "/assets/testimonials/john.png",
		testimonial:
			"Thanks to SupportSync, I’ve been able to stay connected with my family even during medical emergencies. The USSD emergency service is a life-saver!",
	},
	{
		name: "Esther Kamau",
		image: "/assets/testimonials/esther.png",
		testimonial:
			"The Text-to-Video Translation feature has made communicating with my hearing-impaired brother much easier. It’s truly changed our lives.",
	},
	{
		name: "Joseph Njeri",
		image: "/assets/testimonials/joseph.png",
		testimonial:
			"Using the Google Locator feature, my family can track me while I travel. I feel safe knowing they can always locate me.",
	},
	{
		name: "Grace Wambui",
		image: "/assets/testimonials/grace.png",
		testimonial:
			"SupportSync has been a reliable tool for our community, especially during emergencies. It has provided the assistance we needed at crucial times.",
	},
	{
		name: "Peter Otieno",
		image: "/assets/testimonials/peter.png",
		testimonial:
			"The platform’s features, especially the locator, have brought peace of mind to my family, knowing they can track my location at any time.",
	},
];

export default function SuccessStoriesSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const goToPrevious = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
			);
			setIsAnimating(false);
		}, 400);
	};

	const goToNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
			);
			setIsAnimating(false);
		}, 400);
	};

	return (
		<section className="py-16 md:px-8 px-2 bg-background text-foreground">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				{/* Left section with heading */}
				<div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left md:pr-8">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Success Stories & Testimonials
					</h2>
					<p className="text-lg text-muted-foreground mb-6">
						Hear how our platform has impacted lives across different regions
						and use cases.
					</p>
					<div className="flex justify-center md:justify-start space-x-4">
						<button
							onClick={goToPrevious}
							className="p-2 rounded-full border border-primary hover:bg-primary transition"
						>
							<ChevronLeft className="w-6 h-6 text-primary hover:text-white" />
						</button>
						<button
							onClick={goToNext}
							className="p-2 rounded-full border border-primary hover:bg-primary transition"
						>
							<ChevronRight className="w-6 h-6 text-primary hover:text-white" />
						</button>
					</div>
				</div>

				{/* Right section with testimonials */}
				<div className="w-full md:w-2/3 overflow-hidden">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-full p-4"
							>
								<div className="p-8 border border-primary rounded-lg bg-card text-card-foreground shadow-lg">
									<div className="flex items-center mb-4 justify-center md:justify-start">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-16 h-16 rounded-full object-cover"
										/>
									</div>
									<h3 className="text-xl font-semibold mb-3 text-center md:text-left">
										{testimonial.name}
									</h3>
									<p className="text-lg mb-6 text-center md:text-left">
										{testimonial.testimonial}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
