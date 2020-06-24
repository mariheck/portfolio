import React from 'react';
import Card from '../../components/card/card.component';
import './services.styles.scss';

class ServicesPage extends React.Component {
    state = {
        displayedService: 0,
        services: [
            {
                id: 1,
                title: 'Développement Front-End',
                imageUrl: './images/saving.jpg',
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
                imageUrl: './images/saving.jpg',
                tags: ['node.js', 'mongoDB'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte'
            },
            {
                id: 3,
                title: 'Responsive Design',
                imageUrl: './images/saving.jpg',
                tags: ['desktop', 'mobile', 'tablet'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte'
            }
        ]
    };

    previousCard = () => {
        let currentCard = this.state.displayedService;
        currentCard--;
        currentCard < 0
            ? this.setState({
                  ...this.state,
                  displayedService: this.state.services.length - 1
              })
            : this.setState({ ...this.state, displayedService: currentCard });
    };

    nextCard = () => {
        let currentCard = this.state.displayedService;
        currentCard++;
        currentCard > this.state.services.length - 1
            ? this.setState({
                  ...this.state,
                  displayedService: 0
              })
            : this.setState({ ...this.state, displayedService: currentCard });
    };

    render() {
        const { services, displayedService } = this.state;
        const servicesTotal = services.length;

        return (
            <main>
                <h3>Services</h3>

                <div className="container">
                    <Card
                        id={`00${services[displayedService].id}`}
                        projectsNumber={`00${servicesTotal}`}
                        title={services[displayedService].title}
                        imageUrl={services[displayedService].imageUrl}
                        tags={services[displayedService].tags}
                        description={services[displayedService].description}
                        large
                        previousCard={this.previousCard}
                        nextCard={this.nextCard}
                    />
                </div>
            </main>
        );
    }
}

export default ServicesPage;
