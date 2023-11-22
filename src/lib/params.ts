import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type ExperiencePageParams,
	type HomePageParams,
	type ProjectPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type SkillsPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Know Gautam';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Gautam',
	lastName: 'Viswanathan',
	description:
		`A results-driven freelance full-stack developer | Business analyst | Data analyst, my approach revolves around
            three key steps: Understand, Analyze, Solve. I start by deeply
            understanding the intricacies of a problem, then analyze its
            components rigorously, and finally leverage creativity and technical
            expertise to deliver effective and scalable solutions. This
            systematic and thoughtful process ensures I tackle challenges
            comprehensively, delivering results that stand the test of time.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/gautam-viswanathan' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/gautam-viswanathan/'
		},
		{
			platform: Platform.Email,
			link: 'gautam.k.viswanathan@gmail.com'
		},
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/1617vFyEoVDiea3N5xLJYcag2QX_DHLqA/view?usp=drive_link'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
