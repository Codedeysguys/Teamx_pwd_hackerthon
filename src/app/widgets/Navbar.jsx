"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link"; // Import the Next.js Link component

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
						<Link href="/">SupportSync</Link>
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
						<Link
							href="/blog"
							className="text-gray-600 hover:text-blue-600"
						>
							Latest Blogs
						</Link>
						<Link
							href="/ussd"
							className="text-gray-600 hover:text-blue-600"
						>
							USSD Emergency Service
						</Link>
						<li className=" list-none flex gap-2 ">
							<Link
								href="/ksl"
								className="block text-gray-600 hover:text-blue-600"
							>
								Text-to-KSL
							</Link>
							{/* Coming Soon Badge */}
							<span className=" text-center bg-yellow-300 text-black font-semibold py-1 px-2 rounded-md text-xs">
								Coming Soon
							</span>
						</li>
						<Link
							href="/locator"
							className="text-gray-600 hover:text-blue-600"
						>
							Google Locator
						</Link>
						<Link
							href="/prothea"
							className="text-gray-600 hover:text-blue-600"
						>
							Prothea Solutions
						</Link>
					</nav>

					{/* Call to Action Button */}
					<div className="hidden md:block">
						<Link
							href="/"
							className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="md:hidden bg-white shadow-md">
					<ul className="space-y-4 px-4 py-6">
						<li>
							<Link
								href="/blog"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Latest Blogs
							</Link>
						</li>
						<li>
							<Link
								href="/ussd"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								USSD Emergency Service
							</Link>
						</li>
						<li className="relative">
							<Link
								href="/ksl"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Text-to-Video Translation
							</Link>
							{/* Coming Soon Badge */}
							<span className="absolute top-0 right-0 bg-yellow-300 text-black font-semibold py-1 px-2 rounded-md text-xs">
								Coming Soon
							</span>
						</li>
						<li>
							<Link
								href="/locator"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Google Locator
							</Link>
						</li>
						<li>
							<Link
								href="/prothea"
								className="block text-gray-600 hover:text-blue-600"
								onClick={toggleMenu}
							>
								Prothea Solutions
							</Link>
						</li>
						<li>
							<Link
								href="#get-started"
								className="block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition text-center"
								onClick={toggleMenu}
							>
								Get Started
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
