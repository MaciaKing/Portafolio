"use client";

import { useLang } from "@/context/LanguageContext";

const StudiesSection = () => {
	const { lang } = useLang();
	const experiences = [
		{
			study_name: {
				en: 'Master\'s degree in artificial intelligence reserch',
				es: 'Master en investigación en Inteligencia Artificial'
			},
			study_center: 'Universidad Nacional de Educación a Distancia (UNED)',
			period: '2024 - 2026',
		},
		{
			study_name: {
				en: 'Master\'s degree in offensive security',
				es: 'Master en Seguridad Ofensiva'
			},
			study_center: 'Universidad católica de Murcia (UCAM)',
			period: '2023 - 2024',
		},
		{
			study_name:{
				en: 'Bachelor\'s Degree in Computer Engineering with a specialization in AI',
				es: 'Grado en Ingeniería informatica con mención en Inteligencia Artificial'
			},
			study_center: 'Universitat de les illes Balears (UIB)',
			period: '2017 - 2022',
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
						{lang === "en" ? "Education" : "Educación"}
					</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.study_name[lang]} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.study_name[lang]}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.study_center}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default StudiesSection;
