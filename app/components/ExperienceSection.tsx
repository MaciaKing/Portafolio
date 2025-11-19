"use client";

import { useLang } from "@/context/LanguageContext";

const ExperienceSection = () => {
	const { lang } = useLang();

	const experiences = [
		{
			role: { 
				en: 'Machine Learning / Data Engineer',
				es: 'Ingeniero de Datos / Machine Learning'
			},
			company: 'Fundacio Mallorca Turisme Responsable.',
			period: '2025 - Current',
			highlights:{ 
				en: 'I lead data engineering and machine learning projects from concept to implementation. I manage large-scale national initiatives such as MallorcaPID (€4.88M, NextGenerationEU), and design and optimize data pipelines to improve efficiency and quality.',
				es: 'Lidero proyectos de ingeniería de datos y machine learning desde el concepto hasta la implementación. Gestiono iniciativas nacionales a gran escala como MallorcaPID (4,88M€, NextGenerationEU) y diseño y optimizo pipelines de datos para mejorar eficiencia y calidad.'
			},
		},
		{
			role: { 
				en: 'Computer science vocational training instructor',
				es: 'Professor de FP de grado medio'
			},
			company: 'Aula Balear',
			period: '2023 - 2025',
			highlights:{ 
				en: 'Instructor of Single-User Operating Systems, Network Operating Systems, and Network Services.',
				es: 'Docente de Sistemas Operativos Monopuesto, Sistemas Operativos en Red y Servicios de Red.'
			}
		},
		{
			role: {
				en: 'Backend / Data Engineer',
				es: 'Ingeniero Backend / Datos'
			},
			company: 'Atalis Funding (Startup)',
			period: '2023 - 2025',
			highlights:{ 
				en: 'Design and automation of cloud-based data pipelines using AWS, development of REST APIs for data management, and creation of a language model (LLM) for automatic document summarization.',
				es: 'Diseño y automatización de pipelines de datos en la nube con AWS, desarrollo de REST APIs y creación de un modelo de lenguaje (LLM) para resumen automático de documentos.'
			}
		},
		{
			role: {
				en: 'Full Stack Developer',
				es: 'Full Stack Developer'
			},
			company: 'Omniaccess',
			period: '2022 - 2023',
			highlights:{ 
				en: 'Development of a SOAR system in Python, creation of data-driven alerts to automate incident response, participation in high-availability data management and security analysis projects, and development of an AI system to automate manual tasks in cybersecurity.',
				es: 'Desarrollo de un sistema SOAR en Python, creación de alertas basadas en datos para automatizar la respuesta a incidentes, participación en proyectos de gestión de datos de alta disponibilidad y análisis de seguridad, y desarrollo de un sistema de IA para automatizar tareas manuales en ciberseguridad.'
			}
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
						{lang === "en" ? "Experience" : "Experiencia"}

					</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role[lang]}</h4>
										<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.highlights[lang]}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
