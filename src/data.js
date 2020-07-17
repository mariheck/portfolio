import ImageFront from './assets/front.jpg';
import ImageBack from './assets/back.jpg';
import ImageResponsive from './assets/mobile.jpg';

import SavingThumbnail from './assets/saving.jpg';
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
                "Du simple site vitrine à l'application une page, je saurai apporter mon savoir faire pour un résultat optimal. En effet, au delà de l'utilisation du html et du css, je travaille également avec React.js pour une expérience utilisateur la plus agréable possible. Etant en formation continue, je saurai également appliquer les technologies les plus récentes et performantes."
        },
        {
            id: 2,
            title: 'Développement Back-End',
            imageUrl: ImageBack,
            tags: ['node.js', 'mongoDB'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte'
        },
        {
            id: 3,
            title: 'Responsive Design',
            imageUrl: ImageResponsive,
            tags: ['desktop', 'mobile', 'tablet'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte'
        }
    ],
    projects: [
        {
            id: 1,
            title: 'Saving',
            imageUrl: SavingThumbnail,
            tags: ['react', 'sass', 'node.js', 'mongoDB'],
            description:
                "Portfolio photo et vidéo réalisé avec React.js. Dispose d'un tableau de bord administrateur développé avec node.js, et d'une base de données réalisée avec MongoDB.",
            links: [
                {
                    linkUrl: 'https://github.com',
                    info: 'Voir le site',
                    icon: 'linkify'
                },
                {
                    linkUrl: 'https://github.com/mariheck',
                    info: 'Code source',
                    icon: 'github'
                }
            ]
        },
        {
            id: 2,
            title: 'Portfolio',
            imageUrl: PortfolioThumbnail,
            tags: ['react', 'sass', 'react router'],
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
            id: 3,
            title: 'Smart Brain',
            imageUrl: SmartbrainThumbnail,
            tags: ['react', 'node.js', 'postgreSQL'],
            description:
                'Application de détection de visages. La partie front-end a été réalisée avec React.js. La partie serveur a été développée avec node.js, et la base de données avec PostgreSQL.',
            links: [
                {
                    linkUrl: 'https://mariheck-smartbrain.herokuapp.com',
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
                    icon: 'node js'
                }
            ]
        },
        {
            id: 4,
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
