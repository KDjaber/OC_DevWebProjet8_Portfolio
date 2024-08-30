import {MapPinIcon} from "@heroicons/react/24/solid";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {GithubIcon, LinkedInIcon} from "./components/utils";

const config = {
    profile: {
        username: "KDjaber",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Lyon"
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: "https://github.com/KDjaber",
                data: {
                    text: "GitHub",
                    value: "KDjaber"
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.linkedin.com/in/katia-djaber-b2a750140/",
                data: {
                    text: "LinkedIn",
                    value: "Katia Djaber"
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },
            {
                link: "mailto:katia.djaber@gmail.com",
                data: {
                    text: "Email",
                    value: "katia.djaber@gmail.com"
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: ["JavaScript", "React.js", "HTML", "CSS", "SaSS", "NodeJS", "Express", "MongoDB", "Git"],
        education: [
            {
                period: "2024",
                position: "Formation Développeur Web",
                institution: "Open Classrooms"
            },
            {
                period: "2017-2021",
                position: "Licence - Responsable Marketing & Communication",
                institution: "ESMOD"
            },
            {
                period: "2014-2016",
                position: "BP de Librairie",
                institution: "Institut National de Formation à la Librairie"
            },
        ],
        experience: [
            {
                period: "2021 - 2022",
                position: "Chargée de projet",
                institution: "Qualimetrie"
            },
            {
                period: "2020",
                position: "Gestion des opérations marketing",
                institution: "By Bamboù"
            },
            {
                period: "2019",
                position: "Assistante Rédactrice",
                institution: "Drawer"
            },
            {
                period: "2018",
                position: "Conseillère de vente",
                institution: "Tara Jarmon"
            },
            {
                period: "2017",
                position: "Volontaire en Service Civique",
                institution: "Association ZUPdeCO"
            },
            {
                period: "2014-2016",
                position: "Libraire",
                institution: "Librairie Internationale V.O."
            },
            {
                period: "2014",
                position: "Auxiliaire Vacances",
                institution: "Crédit Agricole"
            },
        ],
        tryProjects: [
            {
                image: "Grimoire.png",
                link: "https://github.com/KDjaber/OC_DevWebProjet6_Grimoire",
                title: "Mon Vieux Grimoire",
                description: "Ce projet a été réalisé dans le cadre de la formation Développeur Web d'Open Classrooms. Le but était de réaliser le back-end d'un site de notation de livres. Les problématiques principales étaient de créer un serveur et d ele connecter à une base de données. Il fallait également développer un modèle de données et en implémenter les opérations CRUD. J'ai dû et pu apprendre à créer un serveur mais aussi à gérer à une base de données. J'ai appris à comprendre et mettre en place le développement back-end avec Node.js, Express et MongoDB : des compétences essentielles pour la création d'application web modernes et performantes.",
                date: "Août 2024",
                techStack: [ "Javascript", "Node.js", "MongoDB" ]
            },
            {
                image: "Kasa.png",
                link: "https://github.com/KDjaber/OC_DevWebProjet5_Kasa",
                title: "Kasa",
                description: "Ce projet a été réalisé dans le cadre de la formation Développeur Web d'Open Classrooms. Le but était de réaliser une application web de location immobilière avec React. Les problématiques principales étaient d'implémenter le front-end d'une application en utilisant React et RTeact Router pour créer une expérience utilisateur moderne et réactive. J'ai appris à utiliser Create React App et Node.js, des compétences importantes dans le développement moderne. J'ai également appris à utiliser SaSS. La difficulté principale à été de réaliser un code mettant l'accent sur l'accessibilité ce que j'ai pu réaliser grâce aux différents cours de la plateforme et des des recherches.",
                date: "Juin 2024",
                techStack: [ "Javascript", "Node.js", "React", "HTML", "SCSS" ]
            },
        ]
    }
};

export default config