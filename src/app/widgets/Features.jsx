import React from "react";
import {
	FaComments,
	FaExclamationTriangle,
	FaVideo,
	FaMapMarkerAlt,
	FaUserMd,
	FaRobot,
	FaUsers,
} from "react-icons/fa";

const FeaturesSection = () => {
	return (
		<section className="py-16 px-8 bg-white">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-12">Our Features</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<FeatureCard
						icon={
							<FaComments className="text-blue-500 text-6xl mx-auto mb-4" />
						}
						title="Interactive Chat"
						description="Join live chats to share experiences and learn from others."
					/>
					<FeatureCard
						icon={
							<FaComments className="text-teal-500 text-6xl mx-auto mb-4" />
						}
						title="Latest Blogs"
						description="Stay updated with stories, tips, and news from the community."
					/>
					<FeatureCard
						icon={
							<FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-4" />
						}
						title="USSD Emergency Service"
						description="Dial our USSD code in case of emergencies for immediate assistance."
					/>
					<FeatureCard
						icon={<FaVideo className="text-green-500 text-6xl mx-auto mb-4" />}
						title="Text-to-Video Translation"
						description="Enter text and receive a translated sign language video instantly."
					/>
					<FeatureCard
						icon={
							<FaMapMarkerAlt className="text-purple-500 text-6xl mx-auto mb-4" />
						}
						title="Google Locator"
						description="Easily track and monitor loved ones' locations for peace of mind."
					/>
					<FeatureCard
						icon={<FaUserMd className="text-blue-500 text-6xl mx-auto mb-4" />}
						title="Consult a Doctor"
						description="Get direct advice from qualified medical professionals."
					/>
					<FeatureCard
						icon={<FaRobot className="text-teal-500 text-6xl mx-auto mb-4" />}
						title="AI-based Advice"
						description="Receive expert insights powered by AI technology."
					/>
					{/* New Feature: Join a Community */}
					<FeatureCard
						icon={<FaUsers className="text-indigo-500 text-6xl mx-auto mb-4" />}
						title="Join a Community"
						description="Become part of a community of people with similar experiences. Connect and grow together."
					/>
					{/* Prothea Feature */}
					<FeatureCard
						icon={<FaUsers className="text-orange-500 text-6xl mx-auto mb-4" />}
						title="Prothea Solutions"
						description="Explore prosthetic and orthotic solutions with Prothea, providing innovative support for individuals with mobility challenges. Visit: https://www.prothea.co.ke"
					/>
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ icon, title, description }) => (
	<div className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
		{icon}
		<h3 className="text-2xl font-semibold mb-4">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default FeaturesSection;
