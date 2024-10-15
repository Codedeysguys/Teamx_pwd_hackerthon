import React from "react";
import HeroSection from "./widgets/HeroSection";
import FeaturesSection from "./widgets/Features";
import SuccessStoriesSection from "./widgets/SuccessStoriesSection";
import StorySection from "./widgets/Story";

const LandingPage = () => {
	return (
		<div className="bg-gray-100 text-gray-800">
			<HeroSection />
			<FeaturesSection />
			<StorySection />
			<SuccessStoriesSection />
		</div>
	);
};

export default LandingPage;
