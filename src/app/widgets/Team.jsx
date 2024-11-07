"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const teamMembers = [
	{
		name: "Myles Ngicu",
		description: "Software Developer",
		github: "https://github.com/MylesMburu",
	},
	{
		name: "Delbert Kipyegon",
		description: "Software Engineer",
		github: "https://github.com/Delbert-Kipyegon",
	},
	{
		name: "Jackson Gerald",
		description: "Software Engineer",
		github: "https://github.com/Codedys",
	},
	{
		name: "Aisha",
		description: "Software Developer",
		github: "https://github.com/Aishagojo",
	},
];

const TeamsComponent = () => {
	return (
		<section className="py-12 bg-gray-50 mb-20">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
						>
							<h3 className="text-xl font-semibold mb-2">{member.name}</h3>
							<p className="text-gray-600 text-center mb-4">
								{member.description}
							</p>
							<div className="flex space-x-4">
								<a
									href={member.github}
									className="text-gray-600 hover:text-gray-900"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub size={24} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamsComponent;
