import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import tick from '/public/image/tick.png';


export const projectsData = [
    {
        id: 1,
        name: 'EasyAlgo Dynamic Website | Deployment: AWS ',
        description: "Eayalgo provides all the tech related resources free of cost to help students in interview and coding rounds.Implemented advanced features such as authentication, dynamic content management, like/dislike, comment function- alities,and more.Integrated TinyMCE for rich text editing capabilities and ensured responsive design for seamless user experiences",
        tools: [ "Django", "PostgreSQL", "JWT", "Tailwind CSS","Html","TinyMce", 'EC2','Nginx'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Disease Prediction Web Platform',
        description: 'Integrated ML models in Django for precise disease prediction, enhancing diagnostic capabilities with user-input symp-toms.) Enabled seamless online doctor consultations via secure channels within Django, enhancing user experience and value proposition',
        tools: ["Django", "PostgreSQL", "CSS","Html","JavaScript", "machine learning"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Online Fire-Reporting Management ',
        description: 'Web-based application for immediate fire incident reporting for mid-scale enterprises.',
        tools: ["Python", "HTML", "CSS", "JS", "SQLite", "Django",  'Bootstrap'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://github.com/surajbhan93/Disease-Prediction-Web-Platform',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Dragon Real Estate',
        description: "Performed ExploraThe Accuracy for this Machine Learning Model came out to be: -99.562 % (Training Dataset) -95.348 % (Test Dataset)",
        tools: ['Python', 'Material UI', 'Jupyter Notebook', 'Sun Editor', "Calendar","Pandas","Numpy","Sklearn"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Data Training',
    },
    {
        id: 5,
        name: 'Tictactoe',
        description: "This is a very simple and light tic tac toe web game made using HTML, CSS and JS. This game is very easy to play.",
        tools: ["Html","Css","JavaScript",],
        code: '',
        demo: '',
        image: tick,
        role: 'Front Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },