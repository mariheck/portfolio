import ImageFront from './assets/front.jpg';
import ImageBack from './assets/back.jpg';
import ImageResponsive from './assets/mobile.jpg';

import SavingThumbnail from './assets/saving.jpg';
import SavingDemoThumbnail from './assets/saving-demo.jpg';
import PortfolioThumbnail from './assets/homepage.jpg';
import SmartbrainThumbnail from './assets/smartbrain.jpg';
import ZentogoThumbnail from './assets/zentogo.jpg';

const data = {
    competences: [
        {
            id: 1,
            title: 'Développement Front-End',
            imageUrl: ImageFront,
            tags: [
                'html',
                'css',
                'sass',
                'javascript',
                'react',
                'redux',
                'hook'
            ],
            description:
                "Du simple site vitrine à la single page application, je saurai m'adapter à chaque projet pour un résultat optimal. En effet, au delà de l'utilisation du html et du css, je travaille également avec React.js pour la réalisation d'applications web dynamiques et performantes."
        },
        {
            id: 2,
            title: 'Développement Back-End',
            imageUrl: ImageBack,
            tags: ['node.js', 'express.js', 'mongoDB'],
            description:
                "Pour les applications plus complexes nécessitant un serveur, j'utilise la technologie Node.js ainsi que le framework Express.js, se basant sur le language JavaScript. J'utilise également MongoDB pour l'intégration d'une base de données NoSQL."
        },
        {
            id: 3,
            title: 'Responsive Design',
            imageUrl: ImageResponsive,
            tags: ['desktop', 'mobile', 'tablet'],
            description:
                "Pour chaque projet sur le quel je travaille, je porte une attention toute particulière à la mise en place d'un comportement responsif et à la compatibilité avec les principaux explorateurs afin d'apporter la même qualité d'expérience utilisateur quelque soit le support."
        }
    ],
    projects: [
        {
            id: 1,
            title: 'Saving',
            imageUrl: SavingThumbnail,
            tags: ['react', 'sass', 'node.js', 'mongoDB'],
            description:
                'Portfolio photo et vidéo réalisé avec React.js. Tableau de bord administrateur développé avec node.js, base de données réalisée avec MongoDB, stockage des photos sur Firebase. [Projet en cours]',
            links: [
                {
                    linkUrl: 'https://saving-portfolio.herokuapp.com',
                    info: 'Voir le site',
                    icon: 'linkify'
                },
                {
                    linkUrl: 'https://github.com/mariheck/saving-api',
                    info: 'Code source API',
                    icon: 'github'
                }
            ]
        },
        {
            id: 2,
            title: 'Saving Démo',
            imageUrl: SavingDemoThumbnail,
            tags: ['react', 'sass', 'node.js'],
            description:
                'Version démo du dashboard administrateur du portfolio Saving. Les fonctionnalités liées à Firebase, MongoDB ou Passport ne sont pas visibles dans cette version.',
            links: [
                {
                    linkUrl: 'https://saving-demo.herokuapp.com',
                    info: 'Voir le site',
                    icon: 'linkify'
                },
                {
                    linkUrl: 'https://github.com/mariheck/saving-demo',
                    info: 'Code source',
                    icon: 'github'
                }
            ]
        },
        {
            id: 3,
            title: 'Portfolio',
            imageUrl: PortfolioThumbnail,
            tags: ['react', 'sass', 'react router', 'hook'],
            description:
                "Site vitrine personnel développé avec React.js. Single Page Application, utilisant React Router pour la mise à jour de l'url, ainsi que hook pour la mise à jour des différents états.",
            links: [
                {
                    linkUrl: 'https://github.com/mariheck/portfolio',
                    info: 'Code source',
                    icon: 'github'
                }
            ]
        },
        {
            id: 4,
            title: 'Smart Brain',
            imageUrl: SmartbrainThumbnail,
            tags: ['react', 'node.js', 'postgreSQL'],
            description:
                'Application de détection de visages. La partie front-end a été réalisée avec React.js. La partie serveur a été développée avec node.js, et la base de données avec PostgreSQL.',
            links: [
                {
                    linkUrl: 'https://mariheck.github.io/smart-brain/',
                    info: 'Voir le site',
                    icon: 'linkify'
                },
                {
                    linkUrl: 'https://github.com/mariheck/smart-brain',
                    info: 'Code source frontend',
                    icon: 'react'
                },
                {
                    linkUrl: 'https://github.com/mariheck/smart-brain-api',
                    info: 'Code source backend',
                    icon: 'github'
                }
            ]
        },
        {
            id: 5,
            title: 'Zen To Go',
            imageUrl: ZentogoThumbnail,
            tags: ['html', 'css', 'bootstrap', 'node.js', 'ejs'],
            description:
                "Site vitrine pour professeur de yoga. Gestion du formulaire de contact via nodemailer. Création d'un template grâce à EJS, pour pouvoir changer le langage sans dupliquer le code html.",
            links: [
                {
                    linkUrl: 'https://immense-anchorage-89476.herokuapp.com',
                    info: 'Voir le site',
                    icon: 'linkify'
                },
                {
                    linkUrl: 'https://github.com/mariheck/zen-to-go',
                    info: 'Code source',
                    icon: 'github'
                }
            ]
        }
    ]
};

export default data;
