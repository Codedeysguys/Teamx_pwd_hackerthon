import TextToSignLanguage from "./widgets/TextToSignLanguage";

export const metadata = {
	title: "SupportSync - Text to Kenyan Sign Language",
	description:
		"SupportSync provides an AI-powered text-to-sign language converter, enabling users to translate written text into Kenyan Sign Language for better communication.",
	keywords:
		"text to sign language, Kenyan sign language, AI translation, sign language video, PWD platform",
	author: "SupportSync Team",
};

export default function Page() {
	return (
		<main className="min-h-screen bg-gray-100">
			<TextToSignLanguage />
		</main>
	);
}
