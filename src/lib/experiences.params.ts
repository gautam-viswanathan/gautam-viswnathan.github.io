import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'I am currently open to freelance opportunities, leveraging my skills in full-stack development, data analysis, and software solutions. With a strong foundation in various technologies and a commitment to delivering exceptional results, I am eager to collaborate on diverse projects and contribute to the success of freelance endeavors.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Chennai',
		period: { from: new Date(2022,11) },
		skills: getSkills('ts', 'js','html','flask','python','reactjs','angular'),
		name: 'Open Source Developer',
		color: '#d8d8d8',
		links: [],
		logo: Assets.Angular,
		shortDescription: 'Open to freelance work, bringing a wealth of expertise in full-stack development, data analysis, and software solutions to deliver high-quality and tailored projects.'
	},
	{
		slug: 'software-developer',
		company: 'Whirldata labs',
		description: 'During my tenure at Whirldata Labs, I played a pivotal role in various projects showcasing my versatility as a Full-stack Developer. In the first project, I implemented and managed critical user-facing pages such as user account, user profile, and order confirmation using React.js integrated with Laravel-PHP, ensuring a seamless and secure experience through the incorporation of Google OAuth 2.0 for user authentication. In the second project, I successfully architected workforce management for 50 employees and streamlined warehouse operations, achieving noteworthy reductions in waste and enhancing analytical capabilities through React.js and Flask dashboards. The third project involved the design and development of over 30 APIs following the Model-View-Controller-Services pattern, contributing significantly to the overall functionality of the system. Finally, in the fourth project, I led a comprehensive analysis across 18 locations, resulting in a substantial reduction in production and transportation costs. My proficiency in data analysis using Pandas and adeptness in React.js and Python were instrumental in the successful execution of these impactful projects at Whirldata Labs.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Chennai',
		period: { from: new Date(2022,10),
		to:new Date(2023,10) },
		skills: getSkills('ts', 'css', 'html', 'js','reactjs'),
		name: 'Solutions associate',
		color: '#add8e6',
		links: [],
		logo: Assets.ReactJs,
		shortDescription: ' Full-stack Developer at Whirldata Labs, leading the implementation of critical user-facing pages '
	},
	{
		slug: 'SAP Basis Admin',
		company: 'Pythian',
		description: 'As a SAP Basis Administrator, I oversaw the entire technical cycle for multiple SAP systems, from installation to maintenance. My responsibilities included managing production, development, and testing setups. He implemented reliable backup and recovery protocols, ensuring the safeguarding of crucial business data and minimizing downtime during system failures. Additionally, I led sessions for users and teams, contributing to the enhancement of Basis understanding and maintenance skills.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Banglore',
		period: { from: new Date(2021, 10), to: new Date(2022,9) },
		skills: getSkills(),
		name: 'Sap Basis Admin',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Handled entire technical cycle for multiple SAP systems, from installation to maintenance, encompassing production, development, and testing setups.'
	},
	{
		slug: 'Software developer intern',
		company: 'DheeYantra',
		description: "During my internship at DheeYantra Research Labs, I excelled in two key projects. In the first project, he employed Python's Selenium for web scraping and data mining, analyzing an extensive dataset and ensuring data quality through thorough cleansing and transformation processes. Additionally, I demonstrated my proficiency in data analytical functions, utilizing techniques like stemming, lemmatization, and part-of-speech tagging. In the second project, he showcased my skills in API development by designing robust APIs using Flask in Python. Furthermore, I conducted effective performance testing using Apache JMeter, ensuring optimal functionality under varying loads. My contributions underscored my versatility as a software developer intern, excelling in both data-driven analysis and the development of robust APIs.",
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Banglore',
		period: { from: new Date(2020, 10), to: new Date(2021,5) },
		skills: getSkills('python','numpy','pandas','flask'),
		name: 'Software developer intern',
		color: '#00A300',
		links: [],
		logo: Assets.Python,
		shortDescription: 'I showcased my expertise through successful projects in web scraping, data analysis, and API development, contributing significantly as a versatile and skilled software developer intern.'
	}
];

export default MY_EXPERIENCES;
