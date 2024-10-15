import "./globals.css";
import Footer from "./widgets/Footer";
import Navbar from "./widgets/Navbar";

export const metadata = {
	title: "SupportSync - Empowering People with Disabilities",
	description:
		"SupportSync is a platform designed to enhance the lives of people with disabilities through real-time chat, emergency services, translation tools, and location tracking. Join us in creating a more inclusive and connected world.",
	keywords:
		"disability support, emergency services, accessible communication, location tracking, AI advice, PWD platform, inclusivity",
	author: "SupportSync Team",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{/* Navbar is now fixed to the top */}
				<Navbar />
				{/* Content of the page */}
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
