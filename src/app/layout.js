import "./globals.css";
import Footer from "./widgets/Footer";
import Navbar from "./widgets/Navbar";
import Chat from "./widgets/Chat"; // Make sure the path is correct
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetDescription,
} from "../components/ui/sheet";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="fixed bottom-10 right-10">
					<Sheet>
						<SheetTrigger>
							<img
								className="h-16"
								src="/chat.png"
								alt="chat"
							/>
						</SheetTrigger>
						<SheetContent className="max-w-md h-[80vh] rounded-lg mt-10">
							<SheetHeader>
								<SheetTitle className="relative bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg text-center animate-fadeIn">
									<h2 className="text-2xl font-bold text-white mb-2 animate-bounce">
										Meet Maish, Your Friendly Assistant
									</h2>
									<p className="text-white text-opacity-90 text-lg">
										I&apos;m here to answer any of your questions
									</p>
								</SheetTitle>
								<SheetDescription>
									<Chat /> {/* Place the Chat component here */}
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
				<div className="min-h-screen flex flex-col justify-between">
					<Navbar />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
