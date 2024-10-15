"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div className="text-2xl font-bold text-blue-600">
						<a href="/">SupportSync</a>
					</div>

					{/* Hamburger Menu for Mobile */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-blue-600 focus:outline-none"
						>
							{isOpen ? (
								<FaTimes className="text-2xl" />
							) : (
								<FaBars className="text-2xl" />
							)}
						</button>
					</div>

					{/* Navigation Links (Hidden on Mobile) */}
					<nav className="hidden md:flex space-x-8">
						<a
							href="#features"
							className="text-gray-600 hover:text-blue-600"
						>
							Features
						</a>
						<a
							href="#community"
							className="text-gray-600 hover:text-blue-600"
						>
							Community
						</a>
						<a
							href="#blog"
							className="text-gray-600 hover:text-blue-600"
						>
							Blog
						</a>
						<a
							href="#contact"
							className="text-gray-600 hover:text-blue-600"
						>
							Contact Us
						</a>
					</nav>

					{/* Call to Action Button */}
					<div className="hidden md:block">
						<a
							href="#get-started"
							className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="md:hidden bg-white shadow-md">
					<ul className="space-y-4 px-4 py-6">
						<li>
							<a
								href="#features"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#community"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Community
							</a>
						</li>
						<li>
							<a
								href="#blog"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href="#get-started"
								className="block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition text-center"
								onClick={toggleMenu}
							>
								Get Started
							</a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
