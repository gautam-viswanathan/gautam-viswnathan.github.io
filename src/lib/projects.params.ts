import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Monthly-vehicle-allocation',
		color: '#5e95e3',
		description:
			'In this project at Whirldata Labs, a comprehensive analysis was conducted across 18 locations for a customer. The objective was to optimize operational costs and enhance overall efficiency. Utilizing the Pandas library for data analysis, I extracted valuable insights from the datasets related to production and transportation. The analysis resulted in strategic decision-making, leading to a significant achievement of a 10% reduction in production costs and a 15% reduction in transportation costs. To implement these insights effectively, I developed the project using React.js for the frontend, ensuring a user-friendly interface, and employed Python for the backend, leveraging its capabilities for data processing and algorithm implementation. The combination of data-driven decision-making and proficient application development contributed to the successful outcome of cost reduction in production and transportation for the customer across multiple locations.',
		shortDescription:
			'Conducted a comprehensive analysis across 18 locations for a customer, leading to a 10% reduction in production costs and a 15% reduction in transportation costs. Utilized Pandas for data analysis and developed the project in React.js and Python.',
		links: [{ to: '', label: 'closed door' }],
		logo: Assets.Pandas,
		name: 'Monthly-budget-allocation',
		period: {
			from: new Date(2023,0),
			to:new Date(2023,4)
		},
		skills: getSkills('python', 'pandas', 'numpy'),
		type: 'Data Analytics'
	},
	{
		slug: 'Sobedecore',
		color: '#00A300',
		description:
			'Implemented and took ownership of crucial pages, namely user account, user profile, and order confirmation.Utilized React.js for the frontend development to create a seamless and responsive user interface.Integrated the frontend with Laravel-PHP on the backend to ensure efficient data processing and management. Incorporated Google OAuth 2.0 for user authentication, enhancing the security of user accounts.Implemented the code authorization flow to ensure a secure and reliable authentication process.This project showcases my proficiency in both frontend (React.js) and backend (Laravel-PHP) development, highlighting my ability to create a cohesive and secure user experience. The integration of Google OAuth 2.0 adds an extra layer of security to the user authentication process, demonstrating a comprehensive approach to web development.',
		shortDescription:
			'Implemented and owned user account, user profile, and order confirmation pages using React.js, integrated with Laravel-PHP. Additionally, incorporated Google OAuth 2.0 for secure user authentication.',
		links: [{ to: 'https://sobedecor.com/home', label: 'sobedecor' }],
		logo: Assets.ReactJs,
		name: 'E-commerce web app development',
		period: {
			from: new Date(2023,4),
			to:new Date(2023,6)
		},
		skills: getSkills('reactjs', 'ts', 'tailwind', 'css','html'),
		type: 'E-Commerece Website',
	},
	{
		slug: 'Inditress',
		color: '#FF3131',
		description:
			"In this project at Whirldata Labs, I took on the responsibility of architecting and implementing a comprehensive workforce management system for 50 employees, coupled with warehouse management for raw materials. The goal was to optimize operations, minimize waste, and enhance analytical capabilities. Over a span of three months, I successfully achieved a remarkable 20% reduction in waste, demonstrating effective resource utilization and process improvement. Additionally, I implemented dashboards using React.js and Flask, contributing to a 30% improvement in the analysis of operational data. These dashboards provided a visual representation of key metrics, empowering stakeholders with actionable insights for informed decision-making.My adept combination of architectural design, implementation, and data visualization played a pivotal role in achieving operational efficiency and waste reduction in this multifaceted project.",
		shortDescription:
			'Architected and implemented workforce management for 50 employees and warehouse management of raw material. Achieved a 20% waste reduction in 3 months and improved analysis by 30% through dashboards created using React.js and Flask.',
		links: [{ to: '', label: 'Closed door solution' }],
		logo: Assets.HTML,
		name: 'Work Force management',
		period: {
			from: new Date(2023,6),
			to:new Date(2023,9)
		},
		skills: getSkills('flask', 'js', 'css','html','project management'),
		type: 'Work Force management',
	},
	{
		slug: 'C3 Spectra Pro',
		color: '#add8e6',
		description:
			'In this project, I played a key role in designing and developing more than 30 APIs, adhering to the Model-View-Controller-Services (MVC-S) pattern. This architectural approach helps in structuring the codebase for better organization and maintainability. The APIs serve as the backbone of the system, handling data processing, logic, and interaction with the frontend. Additionally, I contributed to the frontend components by developing them in Ionic-React, a framework for building cross-platform mobile applications using web technologies. This choice allows for the creation of a consistent and user-friendly interface. By adopting MVC-S on the backend and utilizing Ionic-React on the frontend, I ensured a cohesive and efficient system, where the APIs seamlessly interact with the frontend components, contributing to the overall functionality and responsiveness of the system.',
		shortDescription:
			'Designed and developed 30+ APIs following the Model-View-Controller-Services pattern and developed frontent components in Ionic-React, contributing to the overall functionality and efficiency of the system.',
		links: [{ to: '', label: 'Closed door solution' }],
		logo: Assets.ReactJs,
		name: 'Deployment of SAS submissions',
		period: {
			from: new Date(2022,10),
			to:new Date(2023,10)
		},
		skills: getSkills('reactjs', 'js', 'css','html','python'),
		type: 'Deploying 5G across USA',
	},
	{
		slug: 'Angular PoC',
		color: '#DC143C',
		description:
			"I developed a Login and Home page in Angular to grasp its core features. This hands-on project provided practical insights into Angular's capabilities, focusing on user authentication, form validation, dynamic content display, and routing.",
		shortDescription:
			'Developed a Login and home page in angular to understand the basic features of angular.',
		links: [{ to: 'https://github.com/gautam-kasi/Angular-PoC', label: 'github' }],
		logo: Assets.Angular,
		name: 'Angular PoC',
		period: {
			from: new Date(2022,10),
			to:new Date(2022,11	)
		},
		skills: getSkills('angular', 'ts', 'css','html'),
		type: 'Learning Angular',
	},
	{
		slug: 'Leet Code',
		color: '#FFD700',
		description:
			"Learning is a continuous process, and I believe that what I learn should be regularly tested. That's why I turn to LeetCode to hone my skills and become better at problem-solving. LeetCode serves as my go-to platform, offering a diverse range of coding challenges and algorithmic problems. By actively engaging with these problems, I not only reinforce what I've learned but also expose myself to a variety of scenarios, enhancing my ability to devise effective and efficient solutions. The iterative and challenging nature of LeetCode problems provides a constant learning environment, allowing me to stay sharp and continually improve my problem-solving capabilities across various aspects of software development.",
		shortDescription:
			'Learning is a continous process and what has been learnt has to be repeatedly tested. Leet code is where i go to hone my skills and become better at solving problems',
		links: [{ to: 'https://github.com/gautam-viswanathan', label: 'github' }],
		logo: Assets.Python,
		name: 'Leet code',
		period: {
			from: new Date(2022,10),
		},
		skills: getSkills('python'),
		type: 'Learning DSA',
	},
	{
		slug: 'Finance Tracking app',
		color: '#FFD700',
		description:
			"I spearheaded the design and development of a secure, cross-platform financial tracking web application using Angular, Flask, and MySQL. This comprehensive tool encompasses features such as expense tracking, income recording, budget management, and detailed financial reporting. Emphasizing both functionality and user data security, I implemented robust encryption and authentication mechanisms, ensuring the confidentiality of sensitive financial information. This project showcases a seamless integration of Angular's dynamic frontend, Flask's efficient backend, and MySQL's reliable data storage, delivering a user-friendly and privacy-focused solution for managing diverse financial aspects.",
		shortDescription:
			'Designed and developed a secure, cross-platform web app for tracking expenses, income, budgets, and generating financial reports. Implemented comprehensive features using Angular, Flask-python, and MySql, ensuring cross-platform compatibility on various web browsers. Emphasized user data security and privacy through robust encryption and authentication mechanisms.',
		links: [{ to: '', label: 'github' }],
		logo: Assets.ReactJs,
		name: 'Finance Tracking app',
		period: {
			from: new Date(2023,7),
		},
		skills: getSkills('reactjs','flask','project management'),
		type: 'Cross platform app development',
	}
];

export default MY_PROJECTS;
