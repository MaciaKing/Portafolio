"use client";

import { useLang } from "@/context/LanguageContext";

const ExperienceSection = () => {
	const { lang } = useLang();
	type ProjectType = "kaggle" | "github";

	type Experience = {
		projectTitle: {
			en: string;
			es: string;
		};
		link: string;
		type: ProjectType;
		test: boolean;
		highlights: {
			en: string;
			es: string;
		};
	};


	const experiences: Experience[] = [
		{
			projectTitle: {
				en: 'Training and Production Deployment of a CNN for MNIST Digit Recognition',
				es: 'Entrenamiento y Puesta en Producción de una CNN para Reconocimiento de Dígitos MNIST',
			},
			link: 'https://github.com/MaciaKing/MNIST_CNN',
			type: 'github',
			test: true,
			highlights: {
				en: 'A complete end-to-end project that starts with training a basic Convolutional Neural Network (CNN) on the MNIST dataset and continues through to model optimization, TensorFlow Lite conversion, and real production deployment. It includes a testable interface where users can draw digits and validate real-time predictions, simulating a full ML development and deployment workflow.',
				es: 'Un proyecto completo de extremo a extremo que comienza con el entrenamiento de una red neuronal convolucional (CNN) básica sobre el dataset MNIST y continúa con la optimización del modelo, conversión a TensorFlow Lite y puesta en producción real. Incluye una interfaz de prueba donde el usuario puede dibujar números y validar las predicciones en tiempo real, simulando un flujo completo de desarrollo y despliegue en Machine Learning.'
			}
		},
		{
			projectTitle: {
				en: 'Dataset publication',
				es: 'Publicación de un dataset',
			},
			link: 'https://www.kaggle.com/datasets/macisalvsalv/cybersecurity-dataset',
			type: 'kaggle',
			test: false,
			highlights: {
				en: 'A dataset designed for classifying websites as malicious or benign, providing key features to support threat detection and cybersecurity research. It simulates real SOC workflows—such as identifying risky domains, blocking threats, and comparing automated detection with human analysis—making it ideal for training, evaluation, and model experimentation.',
				es: 'Un conjunto de datos diseñado para clasificar sitios web como maliciosos o benignos, que proporciona características clave para respaldar la detección de amenazas y la investigación en ciberseguridad. Simula flujos de trabajo reales de SOC, como la identificación de dominios de riesgo, el bloqueo de amenazas y la comparación de la detección automatizada con el análisis humano, lo que lo hace ideal para la formación, la evaluación y la experimentación con modelos.'
			}
		},
		{
			projectTitle: {
				en: 'Cybersecurity Data Extraction',
				es: 'Proyecto de extracción de datos de ciberseguridad'
			},
			link: 'https://github.com/MaciaKing/CyberIntelLake',
			type: 'github',
			test: false,
			highlights: {
				en: 'A data extraction pipeline built to support the malicious–benign website classification dataset. It follows a raw-silver-gold architecture, automating data collection, cleaning, and enrichment to produce high-quality, analysis-ready cybersecurity data.',
				es: 'Un canal de extracción de datos creado para respaldar el conjunto de datos de clasificación de sitios web maliciosos y benignos. Sigue una arquitectura raw-silver-gold, automatizando la recopilación, limpieza y enriquecimiento de datos para producir datos de ciberseguridad de alta calidad y listos para su análisis.'
			}
		},
		{
			projectTitle: {
				en: 'Chatbot about my resume',
				es: 'Chatbot sobre mi CV'
			},
			link: 'https://github.com/MaciaKing/curriculum-chatbot',
			type: 'github',
			test: false,
			highlights: {
				en: 'A personal chatbot built using an intents-based architecture. It includes a custom grid-search mechanism to determine the optimal decision threshold, and relies on a TF-IDF vectorizer combined with an SVC model to classify user queries accurately.',
				es: 'Un chatbot personal creado utilizando una arquitectura basada en intenciones. Incluye un mecanismo de búsqueda por cuadrícula personalizado para determinar el umbral de decisión óptimo y se basa en un vectorizador TF-IDF combinado con un modelo SVC para clasificar con precisión las consultas de los usuarios.'
			}
		},
	];

	// Diccionario de iconos dinámicos
	const icons: Record<ProjectType, React.ReactNode> = {
		kaggle: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="text-gray-500 hover:text-blue-500"
			>
				<path d="M12.016 0C5.396 0 0 5.396 0 12.016c0 6.62 5.396 12.016 12.016 12.016 6.62 0 12.016-5.396 12.016-12.016C24.032 5.396 18.636 0 12.016 0zm3.26 17.174h-2.07l-2.63-3.4v3.4H8.51V6.857h2.066v6.318l2.57-3.26h2.15l-3.06 3.59 3.04 3.67z" />
			</svg>
		),

		github: (
			<svg
				className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.65 1.653.245 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
			</svg>
		)
	};

	const TestSVG = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="18"
			height="18"
			aria-hidden="true"
		>
			<defs>
				<linearGradient id="gradTest" x1="0%" x2="100%" y1="0%" y2="0%">
					<stop offset="0%" stopColor="#6366F1" />
					<stop offset="100%" stopColor="#EC4899" />
				</linearGradient>
			</defs>
			<rect x="1" y="3" width="22" height="14" rx="3" fill="url(#gradTest)" opacity="0.98" />
			<path d="M7 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="#fff" opacity="0.9" />
			<path d="M11 8v6l4-3z" fill="#fff" />
		</svg>
	);

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">
						{lang === "en" ? "Personal Projects" : "Proyectos Personales"}
					</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>


				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.projectTitle[lang]} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />


								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900 dark:text-white">
											{exp.projectTitle[lang]}
										</h4>


										{/* Contenedor de botones: icono + (opcional) Test button */}
										<div className="mt-2 md:mt-0 flex items-center gap-3">
											{exp.link && (
												<a
													href={exp.link}
													target="_blank"
													rel="noopener noreferrer"
													className="p-1 rounded-md flex items-center"
												>
													{icons[exp.type]}
												</a>
											)}


											{/* Mostrar el botón de TEST solo si existe otro botón al lado (exp.link) y exp.test === true */}
											{exp.link && exp.test && (
												<a
													href="/numbers_detector"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg transform transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													style={{ background: 'linear-gradient(90deg,#6366F1 0%,#EC4899 100%)' }}
													aria-label={lang === 'en' ? 'Test project' : 'Probar proyecto'}
												>
													{/* SVG llamativo dentro del botón */}
													<span className="sr-only">{lang === 'en' ? 'Test' : 'Probar'}</span>
													<TestSVG />
													<span className="text-white text-sm font-semibold ml-1 hidden sm:inline">{lang === 'en' ? 'Test' : 'Probar'}</span>
												</a>
											)}
										</div>
									</div>


									<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
										{exp.highlights[lang]}
									</p>
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