import { SkillCategory, type Skill } from './types/skill';

export const skills: Skill[] = [
	{
		name: 'C',
		description:
			"At university, I extensively used the C programming language to learn fundamental data structures and algorithms. C's low-level nature and direct memory manipulation taught me essential programming concepts and enhanced my problem-solving skills. It has been the language of choice for many university assignments and personal projects, giving me a strong foundation in programming principles.",
		experience: 1,
		icon: 'c.svg',
		categories: [SkillCategory.ProgrammingLanguage]
	},
	{
		name: 'Python',
		description:
			"I began my Python journey at the age of 12, and it quickly became my go-to language for various tasks. From creating utility scripts to automate repetitive tasks to more complex projects, Python has been an invaluable tool. Notably, I developed software to analyze word frequency in Japanese texts, aiding my language learning process. Additionally, I built an API wrapper for a Japanese novel website, simplifying data retrieval and analysis. Python's readability, versatility, and extensive library support make it an excellent choice for a wide range of projects.",
		experience: 7,
		icon: 'python.svg',
		categories: [
			SkillCategory.ProgrammingLanguage,
			SkillCategory.Scripting,
			SkillCategory.WebDevelopment
		]
	},
	{
		name: 'C#',
		description:
			' have been learning C# since the age of 12 and initially started with Windows application development. As my skills progressed, I delved into game development using Unity, where I am currently working on a game called Plantopia. C# has been instrumental in my journey as a game developer, allowing me to create interactive and engaging experiences for players. Its object-oriented nature and robust libraries make it a powerful language for various applications, and I continue to explore its capabilities in both personal and professional projects.',
		experience: 7,
		icon: 'csharp.svg',
		categories: [
			SkillCategory.ProgrammingLanguage,
			SkillCategory.Scripting,
			SkillCategory.WebDevelopment,
			SkillCategory.SoftwareDevelopment
		]
	},
	{
		name: 'Unity',
		description:
			'Proficient in utilizing C# to craft engaging games, leveraging Object-Oriented Programming principles and adeptly applying design patterns to ensure efficient and scalable code. Demonstrates expertise in developing intricate systems within Unity, showcasing the ability to create expansive, functional environments.',
		experience: 2,
		icon: 'unity.svg',
		categories: [SkillCategory.GameEngine, SkillCategory.Tool],
		imgStyling: 'fill-white'
	},
	{
		name: 'Bash',
		description:
			'Bash has been my go-to scripting language for utility tasks on Unix systems. I rely on it for automating various tasks, managing files and directories, and setting up development environments. Its powerful command-line interface and robust scripting capabilities have proven invaluable in simplifying complex tasks and enhancing my productivity in the Unix environment.',
		experience: 1,
		icon: 'bash.svg',
		categories: [SkillCategory.ProgrammingLanguage, SkillCategory.Scripting, SkillCategory.Linux]
	},
	{
		name: 'JavaScript',
		description:
			'JavaScript has been a central part of my web development journey, allowing me to create dynamic and interactive websites. For instance, I used it extensively in developing this portfolio, showcasing my skills in frontend web development. In a university group project, I utilized JavaScript to build a forum website, harnessing its capabilities to handle user interactions, data manipulation, and asynchronous requests effectively.',
		experience: 2,
		icon: 'javascript.svg',
		categories: [SkillCategory.ProgrammingLanguage, SkillCategory.WebDevelopment]
	},
	{
		name: 'TypeScript',
		description:
			"As an extension of JavaScript, TypeScript has been a game-changer in my backend development endeavors. With its static typing and strong tooling support, I have confidently built applications using frameworks like SvelteKit and Express.js. TypeScript's ability to catch potential errors early in the development process has significantly contributed to the reliability and maintainability of my projects.",
		experience: 2,
		icon: 'typescript.svg',
		categories: [SkillCategory.ProgrammingLanguage, SkillCategory.WebDevelopment]
	},
	{
		name: 'SvelteKit',
		description:
			'The cornerstone of this portfolio and a go-to choice for numerous personal projects, SvelteKit stands out as a favorite web technology. Proficiently harness its power to swiftly create captivating user experiences, demonstrating a deep understanding of its capabilities and maximizing productivity through its intuitive development approach.',
		experience: 1,
		icon: 'svelte.svg',
		categories: [
			SkillCategory.WebDevelopment,
			SkillCategory.Frontend,
			SkillCategory.FullStack,
			SkillCategory.Backend
		]
	},
	{
		name: 'ExpressJS',
		description:
			'Applied ExpressJS to collaboratively construct a dynamic forum application as part of a university group project. Skilled in crafting versatile and efficient backend systems, particularly adept at developing medium-sized backends that seamlessly manage data flow and user interactions.',
		experience: 1,
		icon: 'express.svg',
		categories: [SkillCategory.WebDevelopment, SkillCategory.Backend]
	},
	{
		name: 'Supabase',
		description:
			'The preferred database solution, seamlessly interfacing with Prisma for streamlined data management. Eliminating the need for a dedicated server, Supabase accelerates development while maintaining a focus on data integrity. Adeptly navigates its features to create efficient and robust database structures, contributing to a smooth and gratifying development experience.',
		experience: 1,
		icon: 'supabase.svg',
		categories: [SkillCategory.Database, SkillCategory.Backend]
	},
	{
		name: 'JetBrains IDEs',
		description:
			'Highly skilled in efficiently navigating PyCharm, Rider, and similar software, effectively managing professional-level projects like JSpeak and Plantopia. Capitalizes on the robust features of these IDEs to enhance coding speed, code quality, and project organization. Adeptly integrates various tools and plugins, showcasing a comprehensive understanding of the JetBrains ecosystem for seamless project development and management.',
		experience: 1,
		icon: 'jetbrains.svg',
		categories: [SkillCategory.IDE, SkillCategory.Tool]
	},
	{
		name: 'Visual Studio',
		description:
			'Visual Studio has been a constant companion in my programming journey, used extensively alongside C# for developing Windows and console applications since a young age. Its robust Integrated Development Environment (IDE) offers a rich set of tools, debugging capabilities, and project management features, enhancing my productivity and workflow. The seamless integration with version control systems like Git enables efficient collaboration with teams on various projects, and I have relied on its capabilities to deliver high-quality software solutions.',
		experience: 7,
		icon: 'visualstudio.svg',
		categories: [SkillCategory.IDE, SkillCategory.Tool]
	},
	{
		name: 'Visual Studio Code',
		description:
			'Visual Studio Code is my go-to code editor for a wide range of programming languages, including C, Python, Bash, TypeScript, HTML, and CSS. Its intuitive interface, extensive plugin ecosystem, and efficient debugging capabilities streamline my development process. Additionally, I use Visual Studio Code for SSH connections to my university, enabling seamless development on remote servers and enhancing my productivity on collaborative projects.',
		experience: 2,
		icon: 'vscode.svg',
		categories: [SkillCategory.IDE, SkillCategory.Tool]
	},
	{
		name: 'Git',
		description:
			"A proficient user who expertly employs its version control capabilities to manage a diverse array of personal, work, and university projects. Implements best practices including branch management with master, staging, and dev branches, as well as employing tagging and descriptive commits to maintain a comprehensive project history. Demonstrates a deep understanding of Git's intricacies, ensuring efficient collaboration and organized project development across various contexts.",
		experience: 5,
		icon: 'git.svg',
		categories: [SkillCategory.VersionControl, SkillCategory.Tool]
	},
	{
		name: 'GitHub',
		description:
			'I consider GitHub an essential platform to showcase my proficiency in various technologies. I use it to store and share my most notable personal projects, providing a valuable portfolio of my work. By maintaining repositories with detailed documentation and version history, I demonstrate my ability to work on diverse projects and collaborate effectively within a team environment.',
		experience: 5,
		icon: 'github.svg',
		categories: [SkillCategory.VersionControl, SkillCategory.Tool]
	},
	{
		name: 'GitLab',
		description:
			"Integral to university projects at UNSW, GitLab serves as a crucial platform for version control and collaborative development. Leverages its functionalities, akin to GitHub, to implement robust continuous integration practices that enhance code quality and streamline development workflows. Proficiently integrates automated testing and deployment pipelines, showcasing a strong grasp of GitLab's capabilities for optimizing project development within an academic setting.",
		experience: 1,
		icon: 'gitlab.svg',
		categories: [SkillCategory.VersionControl, SkillCategory.Tool]
	},
	{
		name: 'Docker',
		description:
			"Docker has revolutionized my approach to testing and deploying web applications and databases. By encapsulating applications and their dependencies into lightweight containers, I can ensure consistency and portability across different environments. Docker's containerization technology simplifies the deployment process and minimizes compatibility issues, enabling seamless scaling and efficient resource utilization.",
		experience: 1,
		icon: 'docker.svg',
		categories: [SkillCategory.Tool]
	},
	{
		name: 'Linux',
		description:
			"A daily driver as the preferred operating system, showcasing adeptness in seamlessly navigating popular distributions like Debian and Ubuntu. Proficiently integrates command-line prowess, leveraging strong bash skills to efficiently manage tasks, automate processes, and streamline development workflows. Demonstrates a comprehensive understanding of Linux's architecture and tools, contributing to a smooth and productive computing experience across various tasks and environments.",
		experience: 1,
		icon: 'linux.svg',
		categories: [SkillCategory.Linux]
	},
	{
		name: 'GraphQL',
		description:
			'Leveraged within this portfolio to interact seamlessly with the GitHub API, showcasing its versatility and efficiency as an alternative to traditional REST APIs. Recognizes the substantial benefits of GraphQL, including a superior developer experience and simplified data retrieval through its tailored queries. Proficiently crafts GraphQL queries and mutations, harnessing its ease of use to swiftly fetch and manipulate data, contributing to an enhanced user experience and streamlined backend interactions.',
		experience: 1,
		icon: 'graphql.svg',
		categories: [SkillCategory.Database, SkillCategory.WebDevelopment]
	},
	{
		name: 'React',
		description:
			"Employed in personal projects to develop small-scale applications, demonstrating a solid proficiency in its fundamentals. While React is utilized effectively, a preference for other frontend technologies like Svelte is apparent, stemming from an affinity for its streamlined development approach. Adapts React's component-based architecture to create interactive user interfaces and engaging experiences, while also exploring alternative technologies to achieve optimal frontend outcomes.",
		experience: 1,
		icon: 'react.svg',
		categories: [SkillCategory.Frontend, SkillCategory.WebDevelopment]
	},
	{
		name: 'Electron',
		description:
			"Electron has empowered me to develop cross-platform desktop applications with web technologies. I utilized Electron to create 'Electron Timer,' a feature-rich app with various timer functionalities like intervals and looping. This experience demonstrated my proficiency in utilizing web development skills to build versatile desktop applications. I continue to explore Electron's capabilities in other small projects, benefiting from its broad community support and extensive libraries.",
		experience: 1,
		icon: 'electron.svg',
		categories: [SkillCategory.SoftwareDevelopment, SkillCategory.WebDevelopment]
	},
	{
		name: 'Vercel',
		description:
			"The preferred hosting platform for personal projects due to its generous free tier and seamless deployment integration with GitHub Actions. Utilizes Vercel's efficient deployment process to swiftly bring projects to the web, capitalizing on its user-friendly interface and streamlined workflow. Adeptly leverages its features to ensure optimal performance and availability, contributing to a satisfying end-user experience and allowing projects to shine on the online stage.",
		experience: 1,
		icon: 'vercel.svg',
		categories: [SkillCategory.DevOps, SkillCategory.WebDevelopment]
	},
	{
		name: 'Azure',
		description:
			"I leveraged Microsoft Azure to host my personal business tutoring website, ensuring scalability, reliability, and robust performance. Azure's cloud services provided me with a flexible and cost-effective solution for deploying web applications. By managing the infrastructure and resources efficiently, I could focus on delivering valuable content and services to my clients.",
		experience: 1,
		icon: 'azure.svg',
		categories: [SkillCategory.DevOps, SkillCategory.WebDevelopment]
	},
	{
		name: 'Sass',
		description:
			'Utilized in previous personal projects to significantly enhance style development efficiency. Proficiently wields Sass to expedite style writing, effectively doubling the speed compared to conventional CSS. Leverages its advanced features such as variables, mixins, and nesting to create maintainable and organized stylesheets, resulting in visually appealing and cohesive designs that are quickly brought to fruition.',
		experience: 1,
		icon: 'sass.svg',
		categories: [SkillCategory.Frontend, SkillCategory.WebDevelopment]
	},
	{
		name: 'TailwindCSS',
		description:
			"Employed to craft the aesthetics of this portfolio, Tailwind CSS stands out as a choice tool for rapid development with visually appealing styles. Embraces its utility-first approach to efficiently create attractive interfaces, particularly favored for personal projects and applications of moderate scope. Demonstrates a keen understanding of Tailwind's class-based styling system, leveraging its pre-designed components and customization options to swiftly create captivating designs that enhance both aesthetics and development speed.",
		experience: 1,
		icon: 'tailwindcss.svg',
		categories: [SkillCategory.Frontend, SkillCategory.WebDevelopment]
	},
	{
		name: 'Vim',
		description:
			"Skillfully navigates Vim as an occasional editor in daily activities, particularly beneficial for SSH development scenarios where only a command-line interface is accessible. Demonstrates adeptness in efficiently editing code and text within Vim's modal interface, capitalizing on its lightweight nature and availability on various environments. Utilizes its keybindings and features to navigate, manipulate, and modify text swiftly, contributing to a productive coding experience even in constrained settings.",
		experience: 1,
		icon: 'vim.svg',
		categories: [SkillCategory.Tool]
	},
	{
		name: 'Jest',
		description:
			"Introduced through a university group project, Jest has since become a favored JavaScript testing library. Proficiently navigates its testing ecosystem, leveraging its comprehensive features to create robust test suites. Recognizes its value in ensuring code quality and maintaining project stability, showcasing an in-depth understanding of Jest's capabilities and a knack for crafting effective test cases that contribute to a smooth development process.",
		experience: 1,
		icon: 'jest.svg',
		categories: [SkillCategory.Testing, SkillCategory.WebDevelopment]
	},
	{
		name: 'Babel',
		description:
			"Babel has been an indispensable tool in my university projects, where I utilized it as a transpiler to ensure cross-browser compatibility and support for modern JavaScript features. Babel's ability to convert cutting-edge JavaScript code into backward-compatible versions allowed me to explore the latest language features without sacrificing compatibility with older browsers.",
		experience: 1,
		icon: 'babel.svg',
		categories: [SkillCategory.WebDevelopment]
	},
	{
		name: 'Make',
		description:
			"The go-to build tool for all C projects, prominently employed during university studies. Proficiently harnesses Make's capabilities to construct intricate build files that streamline the compilation and linking process. Demonstrates a strong command of Make's syntax and features, effectively managing dependencies and optimizing project compilation. Adeptly navigates its complexities to ensure efficient code building, reflecting a thorough understanding of build automation and project management within the C ecosystem.",
		experience: 1,
		icon: 'cmake.svg',
		categories: [SkillCategory.Tool]
	},
	{
		name: 'HTML5',
		description:
			'Possesses a comprehensive understanding of semantic HTML, skillfully implementing tags to enhance both the structure of web content and its accessibility. Demonstrates proficiency in utilizing HTML5 elements to accurately represent the purpose and hierarchy of page elements, contributing to improved search engine optimization and user experience. Prioritizes the integration of ARIA attributes to ensure compatibility with assistive technologies, showcasing a commitment to creating web content that is inclusive and user-friendly.',
		experience: 1,
		icon: 'html5.svg',
		categories: [SkillCategory.WebDevelopment, SkillCategory.Frontend]
	},
	{
		name: 'Pytest',
		description:
			"Proficiently employs Pytest as the testing framework of choice for all Python projects, both personal and professional. Leverages its features to create comprehensive and effective test suites, ensuring code reliability and maintainability. Demonstrates a deep understanding of Pytest's capabilities, efficiently crafting test cases, fixtures, and assertions to thoroughly validate Python code. Embraces its flexible and intuitive syntax to foster a robust testing culture, contributing to the development of high-quality and dependable Python applications.",
		experience: 1,
		icon: 'pytest.svg',
		categories: [SkillCategory.Testing]
	}
];
