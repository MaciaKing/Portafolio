"use client";

import { useLang } from "@/context/LanguageContext";

const SkillsSection = () => {
	const { lang } = useLang();

	const skills = [
		{
			category: {
				en: 'Programming Languages',
				es: 'Lenguajes de programación'
			},
			items: ['Python', 'Go', 'Ruby on Rails'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 6h18M3 12h18M3 18h18" />
				</svg>
			),
		},
		{
			category: {
				en: 'Machine Learning',
				es: 'Machine Learning'
			},
			items: ['Scikit-learn', 'TensorFlow', 'PyTorch'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M12 3v18M3 12h18" />
				</svg>
			),
		},
		{
			category: { 
				en: 'Data Engineering',
				es: 'Ingeniero de Datos'
			},
			items: ['Spark', 'ETL / ELT', 'PostgreSQL', 'Redis', 'RabbitMQ'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M4 4h16v6H4zM4 14h16v6H4z" />
				</svg>
			),
		},
		{
			category:{ 
				en: 'MLOps & DevOps',
				es: 'MLOps & DevOps'
			},
			items: ['Docker', 'Swarm', 'Kubernetes', 'Linux', 'Github'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M12 2l4 4-4 4-4-4 4-4zm0 12l4 4-4 4-4-4 4-4z" />
				</svg>
			),
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
						{lang === "en" ? "Skills" : "Habilidades"}
					</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category[lang]}>
							<div className="flex items-center space-x-2 mb-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
									{skillGroup.category[lang]}
								</h4>
							</div>

							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
