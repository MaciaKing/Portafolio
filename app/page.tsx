"use client";
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import PersonalProjectsSection from './components/PersonalProjectsSection';
import StudiesSection from './components/StudiesSection';
import { useLang } from "@/context/LanguageContext";


export default function MinimalistPortfolio() {
	const { lang, toggleLang } = useLang();
	return (
		<main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">

			{/* Botón cambiar idioma */}
			<div className="p-4 flex justify-end">
				<button
					onClick={toggleLang}
					className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
					{lang === "en" ? "ES" : "EN"}
				</button>
			</div>

			<div className="flex-1 grid grid-cols-1 md:grid-cols-5">
				{/* Left Column - Profile */}
				<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
					<ProfileSection />
				</div>

				{/* Right Column - Skills and Experience */}
				<div className="md:col-span-3 flex flex-col md:justify-center">
					{/* Skills Section */}
					<div className="">
						<SkillsSection />
					</div>

					{/* Experience Section */}
					<div>
						<ExperienceSection />
					</div>

				</div>
			</div>

			{/* Studies Section*/}
			<div>
				<StudiesSection />
			</div>

			{/* Personal Projects Section*/}
			<div>
				<PersonalProjectsSection />
			</div>
		</main>
	);
}
