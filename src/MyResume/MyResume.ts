import photo from '../components/image/photo.jpg'



export const MyResume = {
    en: {
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
    js(main), payton(less), mel(less), c++(less)`
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
                    street: ' 52 Mamikonyants St.',
                    country: ' Armenia',
                    city: ' Yerevan',
                },
                start: '2004',
                end: '2008',
            },
            javaScript: {
                name: 'JavaScript',
                educationalCenter: 'Microsoft Innovation Center',
                location: {
                    country: ' Armenia',
                    city: ' Yerevan',
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
            js: {
                languages: {
                    name: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
                },
                libraries: 'React',
                subLib: ['React hooks', 'React router dom', 'REST API',
                    'Axios', 'Redux', 'Redux Toolkit', 'Redux Thunk',
                    'Redux FinalForm', 'Formik', 'Yup','Styled components','Scss'],
                tools: ['Material UI', 'Bootstrap'],
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
                git: 'https://github.com/kotoghyan'
            }
        },
        aboutMe: {
            title: 'About Me',
            about: 'Hello! I am Karapet \n' +
                'I am an experienced 2D and 3D animator. I want to switch to Web Development.\n' +
                'I am a dedicated, organized and methodical individual. ' +
                'I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. ' +
                'I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done.' +
                ' I am determined and decisive. I identify and develop opportunities.'
        }
    },
    ru: {
        general: {
            profession: 'Front End Разработчик',
            name: 'Карапет',
            firstName: 'Котогян',
            img: photo
        },
        experience: {
            title: 'Опыт Работы',
            company: {
                ADiteve: {
                    name: 'ADiteve',
                    vacancy: '2D, 3D Generalist',
                    location: {
                        country: 'Армения',
                        city: 'Ереван',
                        street: 'Ул. Абовяна 26а',
                    },
                    start: 'Март 2021',
                    end: null,
                    aboutJob: `2D, 3D, Мультипликатор,
    Составитель выражений Используя языки программирования,
    js(основной), payton(реже), mel(реже), c++(реже)`
                },
                DigiStep: {
                    name: 'DigiStep',
                    location: {
                        country: null,
                        city: 'Ереван',
                        street: null,
                    },
                    start: 'Фев 2017',
                    end: 'Дек 2020',
                    aboutJob: '3D Аниматор, Мультипликатор'
                }
            },
            Freelance: {
                name: 'Фриланс',
                start: 'Янв 2021',
                aboutJob: `Создание небольших веб-приложений
    Рефакторинг приложеней из ванила JS,
    Исправления ошибок, проблем, багов, добавление новых свойств, атрибутов`
            }
        },
        education: {
            title: 'Образование',
            programming: {
                name: 'Программироование',
                educationalCenter: 'Ереванский государственный колледж информатики',
                location: {
                    street: ' Ул. Мамиконянц 52',
                    country: ' Армения',
                    city: ' Ереван',
                },
                start: '2004',
                end: '2008',
            },
            javaScript: {
                name: 'JavaScript',
                educationalCenter: 'Microsoft Innovation Center',
                location: {
                    country: ' Армения',
                    city: ' Ереван',
                },
                start: 'Сен. 2020',
                end: 'Дек. 2020'
            }
        },
        skills: {
            title: 'Навыки',
            skills: ['Командная работа', 'Решение проблем', 'Лидерство', 'Разрешение конфликтов', 'наставничество'],
        },
        languages: {
            title: 'Языки',
            armenian: {
                lang: 'Армянский',
                know: 'Родной',
            },
            russian: {
                lang: 'Русский',
                know: 'C2+',
            },
            english: {
                lang: 'Английский',
                know: 'A2+',
            },
        },
        jsSkills: {
            title: 'JS умения',
            js: {
                languages: {
                    name: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
                },
                libraries: 'React',
                subLib: ['React hooks', 'React router dom', 'REST API',
                    'Axios', 'Redux', 'Redux Toolkit', 'Redux Thunk',
                    'Redux FinalForm', 'Formik', 'Yup','Styled components','Scss'],
                tools: ['Material UI', 'Bootstrap'],
            }

        },
        contacts: {
            title: 'Контакты',
            email: 'kotoghyan.karapet@gmail.com',
            address: {
                country: 'Армения',
                city: 'Ереван',
                street: 'Ул. Кочаряна 8',
            },
            phone: '+374 55219664',
            dateOfBirth: 'Янв 6, 1990',
            Nationality: 'армянин',
            social: {
                linkedin: 'https://www.linkedin.com/in/karo-kotoghyan-5b8061226/',
                git: 'https://github.com/kotoghyan'
            }
        },
        aboutMe: {
            title: 'Обо мне',
            about: 'Привет!  Я Карапет. \n' +
                'Я опытный 2D и 3D аниматор.  Хочу поменять профиль на веб-разработку. \n' +
                'Я преданный, организованный и методичный человек. У меня хорошие навыки межличностного общения, я отлично работаю в команде и очень хочу учиться и развивать новые навыки. \n ' +
                'В работе надежен и часто ищу новые обязанности в широком диапазоне областей занятости.  У меня активный и динамичный подход к профессии и достижению цели.  Я решителен и сфокусирован. \n ' +
                'Стараюсь выявлять и развивать возможности.'
        }
    },
} as const


export const languages: Record<string, Record<string, string>> = {
    en: {
        aboutMe: 'AboutMe',
        experience: 'Experience',
        skills: 'Skills',
        javaScript: 'JavaScript',
        languages: 'Languages',
        education: 'Education',
        contact: 'Contact',
        downloadCV:'Download CV',
        tools: 'Tools'
    },
    ru: {
        aboutMe: 'Обо мне',
        experience: 'Опыт работы',
        skills: 'Навыки',
        javaScript: 'JavaScript',
        languages: 'Языки',
        education: 'Образование:',
        contact: 'Контакт',
        downloadCV:'Скачать Резюме',
        tools:'Инструменты'
    },
}