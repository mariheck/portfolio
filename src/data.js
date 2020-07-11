import ImageFront from './assets/front.jpg';
import ImageBack from './assets/back.jpg';
import ImageResponsive from './assets/mobile.jpg';

import SavingThumbnail from './assets/saving.jpg';
import PortfolioThumbnail from './assets/homepage.jpg';

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
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte'
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
            tags: ['html', 'sass', 'react', 'node.js'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
            websiteUrl: 'https://github.com',
            githubLink: 'https://github.com/mariheck'
        },
        {
            id: 2,
            title: 'Portfolio',
            imageUrl: PortfolioThumbnail,
            tags: ['html', 'sass', 'react'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
            githubLink: 'https://github.com/mariheck/portfolio'
        },
        {
            id: 3,
            title: 'Test 3',
            imageUrl: PortfolioThumbnail,
            tags: ['html', 'sass', 'react', 'node.js'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
            githubLink: 'https://github.com/mariheck'
        },
        {
            id: 4,
            title: 'Test 4',
            imageUrl: PortfolioThumbnail,
            tags: ['html', 'sass', 'react', 'node.js'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
            githubLink: 'https://github.com/mariheck'
        }
    ]
};

export default data;
