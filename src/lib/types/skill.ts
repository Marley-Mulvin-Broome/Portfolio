export interface Skill {
	name: string;
	description: string;
	experience: number;
	icon: string;
	categories: SkillCategory[];
	imgStyling?: string;
}

export enum SkillCategory {
	ProgrammingLanguage = 'Programming Language',
	Scripting = 'Scripting',
	GameEngine = 'Game Engine',
	Linux = 'Linux',
	WebDevelopment = 'Web Development',
	Database = 'Database',
	Backend = 'Backend',
	Frontend = 'Frontend',
	FullStack = 'Full Stack',
	SoftwareDevelopment = 'Software Development',
	IDE = 'IDE',
	Tool = 'Tool',
	VersionControl = 'Version Control',
	DevOps = 'DevOps',
	Testing = 'Testing'
}
