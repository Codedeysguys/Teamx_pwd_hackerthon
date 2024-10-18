import React from "react";
import HeroSection from "./widgets/HeroSection";
import FeaturesSection from "./widgets/Features";
import SuccessStoriesSection from "./widgets/SuccessStoriesSection";
import StorySection from "./widgets/Story";
import TeamsComponent from "./widgets/Team";

const LandingPage = () => {
	return (
		<div className="bg-gray-100 text-gray-800">
			<HeroSection />
			<FeaturesSection />
			<StorySection />
			<SuccessStoriesSection />
			<TeamsComponent />
		</div>
	);
};

export default LandingPage;
