import { SkillCategory, type Skill } from "./types/skill"

export const skills: Skill[] = [
    {
        name: "C",
        description: "At university, I extensively used the C programming language to learn fundamental data structures and algorithms. C's low-level nature and direct memory manipulation taught me essential programming concepts and enhanced my problem-solving skills. It has been the language of choice for many university assignments and personal projects, giving me a strong foundation in programming principles.",
        experience: 1,
        icon: "c.svg",
        categories: [SkillCategory.ProgrammingLanguage]
    },
    {
        name: "Python",
        description: "I began my Python journey at the age of 12, and it quickly became my go-to language for various tasks. From creating utility scripts to automate repetitive tasks to more complex projects, Python has been an invaluable tool. Notably, I developed software to analyze word frequency in Japanese texts, aiding my language learning process. Additionally, I built an API wrapper for a Japanese novel website, simplifying data retrieval and analysis. Python's readability, versatility, and extensive library support make it an excellent choice for a wide range of projects.",
        experience: 7,
        icon: "python.svg",
        categories: [SkillCategory.ProgrammingLanguage, SkillCategory.Scripting, SkillCategory.WebDevelopment]
    },
    {
        name: "C#",
        description: " have been learning C# since the age of 12 and initially started with Windows application development. As my skills progressed, I delved into game development using Unity, where I am currently working on a game called Plantopia. C# has been instrumental in my journey as a game developer, allowing me to create interactive and engaging experiences for players. Its object-oriented nature and robust libraries make it a powerful language for various applications, and I continue to explore its capabilities in both personal and professional projects.",
        experience: 7,
        icon: "csharp.svg",
        categories: [SkillCategory.ProgrammingLanguage, SkillCategory.Scripting, SkillCategory.WebDevelopment, SkillCategory.SoftwareDevelopment]
    },
    {
        name: "Unity",
        description: "",
        experience: 1,
        icon: "unity.svg",
        categories: [SkillCategory.GameEngine, SkillCategory.Tool],
        imgStyling: "fill-white"
    },
    {
        name: "Bash",
        description: "Bash has been my go-to scripting language for utility tasks on Unix systems. I rely on it for automating various tasks, managing files and directories, and setting up development environments. Its powerful command-line interface and robust scripting capabilities have proven invaluable in simplifying complex tasks and enhancing my productivity in the Unix environment.",
        experience: 1,
        icon: "bash.svg",
        categories: [SkillCategory.ProgrammingLanguage, SkillCategory.Scripting, SkillCategory.Linux]
    },
    {
        name: "JavaScript",
        description: "JavaScript has been a central part of my web development journey, allowing me to create dynamic and interactive websites. For instance, I used it extensively in developing this portfolio, showcasing my skills in frontend web development. In a university group project, I utilized JavaScript to build a forum website, harnessing its capabilities to handle user interactions, data manipulation, and asynchronous requests effectively.",
        experience: 2,
        icon: "javascript.svg",
        categories: [SkillCategory.ProgrammingLanguage, SkillCategory.WebDevelopment]
    },
    {
        name: "TypeScript",
        description: "As an extension of JavaScript, TypeScript has been a game-changer in my backend development endeavors. With its static typing and strong tooling support, I have confidently built applications using frameworks like SvelteKit and Express.js. TypeScript's ability to catch potential errors early in the development process has significantly contributed to the reliability and maintainability of my projects.",
        experience: 2,
        icon: "typescript.svg",
        categories: [SkillCategory.ProgrammingLanguage, SkillCategory.WebDevelopment]
    },
    {
        name: "SvelteKit",
        description: "",
        experience: 1,
        icon: "svelte.svg",
        categories: [SkillCategory.WebDevelopment, SkillCategory.Frontend, SkillCategory.FullStack, SkillCategory.Backend]
    },
    {
        name: "ExpressJS",
        description: "",
        experience: 1,
        icon: "express.svg",
        categories: [SkillCategory.WebDevelopment, SkillCategory.Backend]
    },
    {
        name: "Supabase",
        description: "",
        experience: 1,
        icon: "supabase.svg",
        categories: [SkillCategory.Database, SkillCategory.Backend]
    },
    {
        name: "JetBrains IDEs",
        description: "",
        experience: 1,
        icon: "jetbrains.svg",
        categories: [SkillCategory.IDE, SkillCategory.Tool]
    },
    {
        name: "Visual Studio",
        description: "Visual Studio has been a constant companion in my programming journey, used extensively alongside C# for developing Windows and console applications since a young age. Its robust Integrated Development Environment (IDE) offers a rich set of tools, debugging capabilities, and project management features, enhancing my productivity and workflow. The seamless integration with version control systems like Git enables efficient collaboration with teams on various projects, and I have relied on its capabilities to deliver high-quality software solutions.",
        experience: 7,
        icon: "visualstudio.svg",
        categories: [SkillCategory.IDE, SkillCategory.Tool]
    },
    {
        name: "Visual Studio Code",
        description: "Visual Studio Code is my go-to code editor for a wide range of programming languages, including C, Python, Bash, TypeScript, HTML, and CSS. Its intuitive interface, extensive plugin ecosystem, and efficient debugging capabilities streamline my development process. Additionally, I use Visual Studio Code for SSH connections to my university, enabling seamless development on remote servers and enhancing my productivity on collaborative projects.",
        experience: 2,
        icon: "vscode.svg",
        categories: [SkillCategory.IDE, SkillCategory.Tool]
    },
    {
        name: "Git",
        description: "",
        experience: 1,
        icon: "git.svg",
        categories: [SkillCategory.VersionControl, SkillCategory.Tool]
    },
    {
        name: "GitHub",
        description: "I consider GitHub an essential platform to showcase my proficiency in various technologies. I use it to store and share my most notable personal projects, providing a valuable portfolio of my work. By maintaining repositories with detailed documentation and version history, I demonstrate my ability to work on diverse projects and collaborate effectively within a team environment.",
        experience: 5,
        icon: "github.svg",
        categories: [SkillCategory.VersionControl, SkillCategory.Tool]
    },
    {
        name: "GitLab",
        description: "",
        experience: 1,
        icon: "gitlab.svg",
        categories: [SkillCategory.VersionControl, SkillCategory.Tool]
    },
    {
        name: "Docker",
        description: "Docker has revolutionized my approach to testing and deploying web applications and databases. By encapsulating applications and their dependencies into lightweight containers, I can ensure consistency and portability across different environments. Docker's containerization technology simplifies the deployment process and minimizes compatibility issues, enabling seamless scaling and efficient resource utilization.",
        experience: 1,
        icon: "docker.svg",
        categories: [SkillCategory.Tool]
    },
    {
        name: "Linux",
        description: "",
        experience: 1,
        icon: "linux.svg",
        categories: [SkillCategory.Linux]
    },
    {
        name: "GraphQL",
        description: "",
        experience: 1,
        icon: "graphql.svg",
        categories: [SkillCategory.Database, SkillCategory.WebDevelopment]
    },
    {
        name: "React",
        description: "",
        experience: 1,
        icon: "react.svg",
        categories: [SkillCategory.Frontend, SkillCategory.WebDevelopment]
    },
    {
        name: "Electron",
        description: "Electron has empowered me to develop cross-platform desktop applications with web technologies. I utilized Electron to create 'Electron Timer,' a feature-rich app with various timer functionalities like intervals and looping. This experience demonstrated my proficiency in utilizing web development skills to build versatile desktop applications. I continue to explore Electron's capabilities in other small projects, benefiting from its broad community support and extensive libraries.",
        experience: 1,
        icon: "electron.svg",
        categories: [SkillCategory.SoftwareDevelopment, SkillCategory.WebDevelopment]
    },
    {
        name: "Vercel",
        description: "",
        experience: 1,
        icon: "vercel.svg",
        categories: [SkillCategory.DevOps, SkillCategory.WebDevelopment]
    },
    {
        name: "Azure",
        description: "I leveraged Microsoft Azure to host my personal business tutoring website, ensuring scalability, reliability, and robust performance. Azure's cloud services provided me with a flexible and cost-effective solution for deploying web applications. By managing the infrastructure and resources efficiently, I could focus on delivering valuable content and services to my clients.",
        experience: 1,
        icon: "azure.svg",
        categories: [SkillCategory.DevOps, SkillCategory.WebDevelopment]
    },
    {
        name: "Sass",
        description: "",
        experience: 1,
        icon: "sass.svg",
        categories: [SkillCategory.Frontend, SkillCategory.WebDevelopment]
    },
    {
        name: "TailwindCSS",
        description: "",
        experience: 1,
        icon: "tailwindcss.svg",
        categories: [SkillCategory.Frontend, SkillCategory.WebDevelopment]
    },
    {
        name: "Vim",
        description: "",
        experience: 1,
        icon: "vim.svg",
        categories: [SkillCategory.Tool]
    },
    {
        name: "Jest",
        description: "",
        experience: 1,
        icon: "jest.svg",
        categories: [SkillCategory.Testing, SkillCategory.WebDevelopment]
    },
    {
        name: "Babel",
        description: "Babel has been an indispensable tool in my university projects, where I utilized it as a transpiler to ensure cross-browser compatibility and support for modern JavaScript features. Babel's ability to convert cutting-edge JavaScript code into backward-compatible versions allowed me to explore the latest language features without sacrificing compatibility with older browsers.",
        experience: 1,
        icon: "babel.svg",
        categories: [SkillCategory.WebDevelopment]
    },
    {
        name: "Make",
        description: "",
        experience: 1,
        icon: "cmake.svg",
        categories: [SkillCategory.Tool]
    },
    {
        name: "HTML5",
        description: "",
        experience: 1,
        icon: "html5.svg",
        categories: [SkillCategory.WebDevelopment, SkillCategory.Frontend]
    },
    {
        name: "Pytest",
        description: "",
        experience: 1,
        icon: "pytest.svg",
        categories: [SkillCategory.Testing]
    }
]