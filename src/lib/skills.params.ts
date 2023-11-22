import Assets from './data/assets';
import type { Skill } from './types';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			"JavaScript is a core skill in my toolkit as a Fullstack Developer. With proficiency in JavaScript and related technologies, I excel in building dynamic and responsive web applications. My expertise encompasses the utilization of JavaScript frameworks like React.js, allowing me to create interactive and seamless user interfaces. My skill set in JavaScript extends to backend development, where I efficiently integrated frontend components with server-side technologies such as Laravel-PHP, showcasing a well-rounded command of this versatile programming language.",
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'My skill set also includes TypeScript. TypeScript is a statically-typed superset of JavaScript, and proficiency in TypeScript enhances his ability to develop scalable and maintainable web applications. With its strong typing system, TypeScript provides me with improved code quality and better collaboration in large codebases. This skill allows me to catch potential errors during development and facilitates a smoother development process, contributing to the overall robustness of his software projects.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'I possess a strong skill set in CSS (Cascading Style Sheets), a fundamental component of web development. With expertise in CSS, I can skillfully design and style web pages, ensuring a visually appealing and user-friendly experience. My proficiency includes working with layouts, responsive design, and implementing custom styling to enhance the presentation of web applications. My CSS skills contribute to creating aesthetically pleasing and well-structured interfaces, complementing his overall capabilities as a Fullstack Developer.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'I have demonstrated a proficient skill set in HTML (Hypertext Markup Language), a foundational language for web development. With expertise in HTML, I effectively structures and organizes content on web pages, laying the groundwork for a cohesive and user-friendly online experience. My proficiency extends to creating well-formed and semantically meaningful HTML code, ensuring accessibility and search engine optimization. My HTML skills are integral to his role as a Fullstack Developer, as they form the backbone of web development, providing the essential structure for the presentation of information on the internet.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'I have showcased a strong skill set in React.js, a popular JavaScript library for building user interfaces. With expertise in React, I excels in developing dynamic and interactive frontend components for web applications. My proficiency extends to seamlessly integrating React.js with backend technologies, such as Laravel-PHP, demonstrating my ability to create cohesive and efficient full-stack solutions. My skill set in React allows me to design and implement user interfaces that enhance the overall user experience, leveraging the component-based architecture and virtual DOM for optimal performance. Overall, my mastery of React.js contributes significantly to his role as a Fullstack Developer, enabling me to build modern and responsive web applications.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug:'python',
		color:'',
		description:'I possess a robust skill set in Python, a versatile and powerful programming language. With proficiency in Python, I have demonstrated expertise in various domains, including web development, data analytics, and automation. My ability to work with frameworks such as Django and Flask showcases my aptitude for backend web development, while my familiarity with data analytics libraries like Pandas and NumPy underlines my capabilities in extracting insights from datasets. My Python skills extend to scripting and automation, contributing to efficient and scalable solutions. Overall, my mastery of Python enhances his versatility as a Fullstack Developer, allowing me to tackle a wide range of projects with precision and effectiveness.',
		logo:Assets.Python,
		name:'Python'
	}),
	s({
		slug:'pandas',
		color:'',
		description:"I have demonstrated a strong skill set in Pandas, a versatile data manipulation and analysis library for Python. With expertise in Pandas, I excel in handling and transforming structured data, utilizing its powerful data structures like DataFrames and Series. My proficiency allows him to efficiently clean, reshape, and analyze datasets, making data-driven decisions and extracting valuable insights. My skill set in Pandas enhances his capabilities in data preprocessing and manipulation, crucial for tasks ranging from exploratory data analysis to preparing data for machine learning models. Overall, my mastery of Pandas contributes significantly to his role as a Fullstack Developer, particularly in projects involving data analytics and manipulation.",
		logo:Assets.Pandas,
		name:'Pandas'
	}),
	s({
		slug:'numpy',
		color:'',
		description:"I have exhibited a strong skill set in NumPy, a fundamental library for numerical computing in Python. With expertise in NumPy, I proficiently manipulate and analyzes large datasets, leveraging its powerful array and mathematical functions. My capabilities in using NumPy contribute to efficient data processing, enabling tasks such as data cleaning, transformation, and statistical analysis. My skill set in NumPy underscores my proficiency in handling numerical computations and enhances my abilities in data analytics and scientific programming. Overall, my mastery of NumPy strengthens my toolkit as a Fullstack Developer, particularly in projects involving data-centric tasks.",
		logo:Assets.Numpy,
		name:'Numpy'
	}),
	s({
		slug:'angular',
		color:'',
		description:"I have demonstrated a robust skill set in Angular, a powerful front-end framework for building dynamic web applications. With expertise in Angular, I excel in creating single-page applications (SPAs) with a modular and structured approach. My proficiency in leveraging Angular's features, such as two-way data binding and dependency injection, allows me to develop scalable and maintainable codebases. My skill set in Angular extends to implementing complex user interfaces and seamlessly connecting them with backend services, showcasing my full-stack development capabilities. Overall, my mastery of Angular contributes significantly to my role as a Fullstack Developer, enabling the creation of sophisticated and responsive web applications.",
		logo:Assets.Angular,
		name:'Angular'
	}),
	s({
		slug:'tatilwind',
		color:'',
		description:'I possess expertise in Tailwind, a utility-first CSS framework. With my skill set in Tailwind, I efficiently styles and designs web applications by leveraging a set of pre-defined utility classes. This approach allows for rapid and consistent styling, enhancing the development workflow and maintaining a clean code structure. My proficiency in Tailwind extends to creating visually appealing and responsive user interfaces while emphasizing simplicity and scalability in the styling process. Overall, my knowledge of Tailwind contributes to my effectiveness as a Fullstack Developer, enabling streamlined and efficient CSS development for modern web applications.',
		logo:Assets.Tailwind,
		name:'Tailwind'
	}),
	s({
		slug:'flask',
		color:'yellow',
		description:'I possess a specialized skill set in Flask, a lightweight and versatile web framework for Python. With expertise in Flask, I have demonstrated proficiency in developing scalable and efficient web applications. My ability to design and implement robust APIs using Flask showcases his adeptness in building backend systems that facilitate seamless communication in web development projects. My skill set in Flask enables me to create dynamic and responsive web applications, emphasizing simplicity and flexibility in his approach. Overall, my proficiency in Flask contributes to my effectiveness as a Fullstack Developer, particularly in the realm of backend development with Python.',
		logo:Assets.Flask,
		name:'Flask'
	}),
	s({
		slug: 'project management',
		color: 'yellow',
		description:
			"Demonstrated effective project management skills, adept at planning, organizing, and coordinating tasks to achieve project goals efficiently and within specified timelines.",
		logo: Assets.Unknown,
		name: 'Project management'
	})
	
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
