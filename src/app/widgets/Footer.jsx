import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="py-12 bg-blue-600 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Section */}
					<div className="text-center md:text-left">
						<h3 className="text-xl font-bold mb-4">About SupportSync</h3>
						<p className="text-gray-200">
							SupportSync is dedicated to empowering people with disabilities by
							providing tools for better communication, emergency services, and
							access to expert advice.
						</p>
					</div>

					{/* Quick Links Section */}
					<div className="text-center">
						<h3 className="text-xl font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#features"
									className="hover:underline"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#community"
									className="hover:underline"
								>
									Community
								</a>
							</li>
							<li>
								<a
									href="#blog"
									className="hover:underline"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:underline"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* Contact & Social Links */}
					<div className="text-center md:text-right">
						<h3 className="text-xl font-bold mb-4">Get in Touch</h3>
						<p className="text-gray-200">Email: support@supportsync.com</p>
						<p className="text-gray-200 mb-4">Phone: +254 712 345 678</p>
						<div className="flex justify-center md:justify-end space-x-4">
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<FaFacebook className="text-2xl" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<FaTwitter className="text-2xl" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<FaInstagram className="text-2xl" />
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<FaLinkedin className="text-2xl" />
							</a>
						</div>
					</div>
				</div>

				<hr className="my-8 border-gray-400" />

				<div className="text-center">
					<p className="text-gray-200 text-sm">
						&copy; 2024 SupportSync. All Rights Reserved.
					</p>
					<p className="text-gray-200 text-sm">
						Powered by{" "}
						<a
							href="https://www.prothea.co.ke"
							className="hover:underline"
						>
							Prothea
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
