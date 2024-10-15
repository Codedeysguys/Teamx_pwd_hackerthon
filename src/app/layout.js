import "./globals.css";
import Footer from "./widgets/Footer";
import Navbar from "./widgets/Navbar";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetDescription,
} from "../components/ui/sheet";

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
				<div className="fixed  bottom-10  right-10">
					<Sheet>
						<SheetTrigger>
							<img
								className=" h-14 "
								src="/chat.png"
								alt="chat"
							></img>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Start a chat</SheetTitle>
								<SheetDescription>
									This will be the chat section
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
				<div className="min-h-screen flex flex-col justify-between">
					<Navbar />
					{/* Content of the page */}
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
