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
            imageUrl:
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
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
            imageUrl:
                'https://images.unsplash.com/photo-1594709286083-5f89db74aad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            tags: ['html', 'sass', 'react', 'node.js'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
            githubLink: 'https://github.com/mariheck'
        },
        {
            id: 4,
            title: 'Test 4',
            imageUrl:
                'https://images.unsplash.com/photo-1594698434973-12099e222c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            tags: ['html', 'sass', 'react', 'node.js'],
            description:
                'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
            githubLink: 'https://github.com/mariheck'
        }
    ]
};

export default data;
