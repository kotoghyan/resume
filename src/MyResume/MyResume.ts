import photo from '../components/image/photo.jpg'

export const MyResume = {
    general: {
        profession: 'Front End Developer',
        name: 'Karapet',
        firstName: 'Kotoghyan',
        img: photo
    },
    experience: {
        title: 'Experience',
        company: {
            ADiteve: {
                name: 'ADiteve',
                vacancy: '2D, 3D Generalist',
                location: {
                    country: 'Armenia',
                    city: 'Yerevan',
                    street: '26a Abovyan St.',
                },
                start: 'Mar 2021',
                end: null,
                aboutJob: `2D, 3D, Video Cartoon Creator, 
    Expression writer Using programing languages, 
    sing js(main), payton(less), mel(less), c++(less)`
            },
            DigiStep: {
                name: 'DigiStep',
                location: {
                    country: null,
                    city: 'Yerevan',
                    street: null,
                },
                start: 'Feb 2017',
                end: 'Dec 2020',
                aboutJob: '3D Cartoon Animator'
            }
        },
        Freelance: {
            name: 'Freelance',
            start: 'Jan 2021',
            aboutJob: `Creating small web-applications
    Refactoring applications from Native JS,
    Fixing errors, problems, bugs, adding new features`
        }
    },
    education: {
        title: 'Education',
        programming: {
            name: 'Programming',
            educationalCenter: 'Yerevan State College of Informatics',
            location: {
                street:'52 Mamikonyants St.',
                country: 'Armenia',
                city: 'Yerevan',
            },
            start: 'Sep 2020',
            end: 'Dec 2020',
        },
        javaScript: {
            name: 'JavaScript',
            educationalCenter: 'Microsoft Innovation Center',
            location: {
                country: 'Armenia',
                city: 'Yerevan',
            },
            start: 'Sep 2020',
            end: 'Dec 2020'
        }
    },
    skills: {
        title: 'Skills',
        skills: ['Teamwork', 'Problem-Solving', 'Leadership', 'Handling conflicts', 'Mentoring'],
    },
    languages: {
        title: 'Languages',
        armenian: {
            lang: 'Armenian',
            know: 'Native',
        },
        russian: {
            lang: 'Russian',
            know: 'C2+',
        },
        english: {
            lang: 'English',
            know: 'A2+',
        },
    },
    jsSkills: {
        title: 'JS skills',
        js:{
            languages:{
                name:['JavaScript','TypeScript','HTML5', 'CSS3' ]
            },
            libraries: 'React',
            subLib:['React hooks','React router dom','REST API',
                'Axios','Redux','Redux Toolkit','Redux Thunk',
                'Redux FinalForm','Formik','Yup'],
            tools: ['Styled components','Scss','Material UI','Bootstrap'],
        }

    },
    contacts: {
        title: 'Contact',
        email: 'kotoghyan.karapet@gmail.com',
        address: {
            country: 'Armenia',
            city: 'Yerevan',
            street: '8 Qocharyan St.',
        },
        phone: '+374 55219664',
        dateOfBirth: 'Jan 6, 1990',
        Nationality: 'Armenian',
        social: {
            linkedin: 'https://www.linkedin.com/in/karo-kotoghyan-5b8061226/',
        }
    },
    aboutMe: {
        title: 'About Me',
    }
} as const