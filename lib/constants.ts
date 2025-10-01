export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		// {
		// 	title: 'About',
		// 	href: '/about',
		// },
		// {
		// 	title: 'Education',
		// 	href: '/education',
		// },
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		// {
		// 	title: 'Certificates',
		// 	href: '/certificates',
		// },
		// {
		// 	title: 'Blog',
		// 	href: '/blog',
		// },
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/HarutoshiOkumura',
		linkedin: 'https://www.linkedin.com/in/harutoshi-okumura/',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:HOkumura032@gmail.com',
		phone: 'tel:+1234567890',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Technical Advisor (Gen AI) Intern',
		company: 'Scale AI',
		location: 'San Francisco, CA',
		startDate: 'May 2025',
		endDate: 'Aug 2025',
		description: [
			'Researched generative model reasoning in C++/Python, boosting competitive programming benchmarks by 20%',
			'Enhanced LLM SWE agent’s ability to navigate large codebases leveraging Git, Docker, and Python',
			'Reduced model reasoning error rate by 25% through cross-functional error analysis with AI research teams and targeted fine-tuning of LLM architectures',
		],
		technologies: ['C++', 'Python', 'Git', 'Docker', 'LLM', 'Algorithmic Analysis'],
	},
	{
		title: 'Founding Software Engineer',
		company: 'Robust.io',
		location: 'New York City, NY',
		startDate: 'Jun 2025',
		endDate: 'Sep 2025',
		description: [
			'Designed an end-to-end, Agent Controller (TypeScript + Fastify) to orchestrate creation, tracking, and termination of cloud Letta agents and local sandbox workers, establishing an unified, reusable lifecycle API',
			'Architected a multi-agent orchestration platform with Redis caching for completed workstreams and SQL snapshotting for execution-state tracking, enabling parallel agent workflows with robust global-undo support',
			'Engineered a Fastify backend ingesting, indexing, and searching files, enabling sub -100 ms latency in retrieval',
		],
		technologies: ['TypeScript', 'Fastify', 'Redis', 'SQL', 'Stateful Agents (MeMGPT)', 'Multi-Agent Orchestration', 'File Indexing', 'Context Engineering'],
	},
	{
		title: 'Software Engineer',
		company: 'Pagent TV',
		location: 'Boston, MA',
		startDate: 'Mar 2025',
		endDate: 'Jun 2025',
		description: [
			'Built a recommendation system using TensorFlow Serving, hosted DeepFM model with Apache Flink Kafka joins and GPU-accelerated inference, cutting p99 latency by 90%',
			'Engineered a two-tiered storage solution for unused Kafka streams, leveraging AWS Redis for immediate caching & S3 Glacier Deep Archive for long-term storage, optimizing cost-performance by 95.7%',
			'Exposed a Socket.io API for live match updates and real-time WebSocket communications, supporting over 1000 concurrent players with 97.8% uptime',
			'Engineered a MongoDB-backed scheduling engine that executes recurring workflows with Node.js',
			'Built & published video ranker for a TikTok-style video competition mobile app using React-Native & Swift',
			'Containerized the application stack with Docker to provision reproducible multi-container environments, cutting CI/CD deployment failures by 40%',
		],
		technologies: ['TypeScript', 'Node.js', 'React-Native', 'Docker', 'Kafka', 'MongoDB', 'Redis', 'Socket.io', 'TensorFlow', 'Apache Flink', 'CUDA', 'CI/CD', 'Scheduling Engines', 'Recommendation Systems'],
	},
	{
		title: 'Software Engineer Intern',
		company: 'KnoWhiz',
		location: 'Bellevue, WA',
		startDate: 'Jun 2024',
		endDate: 'Dec 2024',
		description: [
			'Researched MCQ generation using LLMs with Q&A fine-tuning, driving accuracy from 76% to 92%',
			'Engineered an asynchronous math pipeline using Quart & integrating Azure Blob Storage, MongoDB, & OpenAI to automate generation & storage of math learning material, increasing STEM engagement by 20%',
			'Diagnosed LLM content generation latency issues & optimized delivery by dynamically rendering courses, improving render time by 30% & active customer base to 300',
			'Developed an optimized study feature using a job scheduling algorithm (MFQS) to prioritize new flashcards & revisit earlier topics systematically',
		],
		technologies: ['TypeScript', 'Node.js', 'Quart', 'Azure Blob Storage', 'MongoDB', 'OpenAI APIs', 'GenAI', 'Job Scheduling Algorithms', 'Asynchronous Processing', 'React', 'Java', 'Spring Boot', 'REST APIs'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Automatic Contradiction Detection in Logical Texts with LLM',
		description:
			'Designed a novel framework integrating Symbolic AI (formal logic) & LLMs to classify debate statements & identify logical inconsistencies using a proprietary taxonomy based on Aristotle’s law',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['LLM', 'RoBERTa', 'NLP / NLI', 'Python', 'Pipelines', 'HuggingFace'],
		link: '#',
		repo: '#',
	},
	{
		title: 'PPM Image Editing Command Line Tool',
		description:
			'Developed a command line tool (in C) for image editing using PPM format, allowing users to apply various filters and transformations to images.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['C', 'Vanguard', 'Image Processing', 'Command Line Tool', 'Linux', 'Memory Management'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Pediatric Savior Airway Management Simulation Chatbot',
		description:
			'Developed a chatbot for pediatric airway management simulation, training 100+ medical students asynchronously with flexibility in airway management scenarios.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['LLM', 'Python', 'FastAPI', 'React', 'Docker', 'AWS'],
		link: '#',
		repo: 'https://github.com/JunyiZhou-Conny/Airway-Management-Assistant',
	},
	{
		title: 'Insurance Policy Normalizor & Classifier',
		description:
			'Developed a pipeline for normalizing insurance policy data () into a standard format with 98% accuracy, Plaid but for Insurance.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Typescript', 'Next.js', 'Pipelines', 'React', 'Docker', 'AWS'],
		link: '#',
		repo: 'https://github.com/HarutoshiOkumura/mini-axle?tab=readme-ov-file',
	},
	{
		title: 'NBA Player Performance Predictor',
		description:
			'Researched with multiple Machine Learning Models to predict NBA player performance using past NBA performance from Kaggle. ',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Python', 'Machine Learning', 'Random Forest', 'CNN', 'Feature Engineering', 'Rigid Regression', 'Pipelines'],
		link: '#',
		repo: 'https://github.com/blakegrudzien/MLFinal?tab=readme-ov-file',
	},
	{
		title: 'Official Website for Emory University\'s Asian Student Organization',
		description:
			'Developing the official website for Emory University\'s Asian Student Organization, making advertisment, event management and merch sales easier. ',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'Framer Motion', 'Vercel'],
		link: '#',
		repo: 'https://github.com/HarutoshiOkumura/aso-website',
	},

];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'University Name',
		location: 'City, Country',
		startDate: 'Sep 2020',
		endDate: 'Present',
		gpa: '3.8/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
	{
		degree: 'High School Diploma',
		field: 'Science and Mathematics',
		institution: 'High School Name',
		location: 'City, Country',
		startDate: 'Sep 2016',
		endDate: 'Jun 2020',
		gpa: '4.0/4.0',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Database & Services
	{ name: 'MySQL', level: 9, category: 'technical' },
	{ name: 'PostgreSQL', level: 7, category: 'technical' },
	{ name: 'AWS', level: 8, category: 'technical' },
	{ name: 'Azure', level: 5, category: 'technical' },
	{ name: 'Redis', level: 7, category: 'technical' },
	{ name: 'MongoDB', level: 9, category: 'technical' },
	{ name: 'GraphQL', level: 7, category: 'technical' },
	{ name: 'Google Cloud', level: 7, category: 'technical' },

	// Software Languages
	{ name: 'Python', level: 9, category: 'software' },
	{ name: 'TypeScript', level: 8, category: 'software' },
	{ name: 'C++', level: 4, category: 'software' },
	{ name: 'Java', level: 9, category: 'software' },
	{ name: 'C', level: 7, category: 'software' },
	{ name: 'Git', level: 8, category: 'software' },
	{ name: 'SQL', level: 8, category: 'software' },
	{ name: 'HTML/CSS', level: 8, category: 'software' },


	// Frameworks 

	{ name: 'React', level: 8, category: 'soft' },
	{ name: 'Next.js', level: 7, category: 'soft' },
	{ name: 'OpenAI', level: 6, category: 'soft' },
	{ name: 'Node.js', level: 5, category: 'soft' },
	{ name: 'PyTorch', level: 5, category: 'soft' },
	{ name: 'TensorFlow', level: 4, category: 'soft' },
	{ name: 'FastAPI', level: 8, category: 'soft' },
	{ name: 'Quart', level: 7, category: 'soft' },
	{ name: 'Docker', level: 8, category: 'soft' },
	{ name: 'Kafka', level: 5, category: 'soft' },
	{ name: 'CUDA', level: 3, category: 'soft' },
	{ name: 'CI/CD', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Cantonese', level: 10, category: 'language' },
	{ name: 'Japanese', level: 6, category: 'language' },
	{ name: 'Chinese', level: 7, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];