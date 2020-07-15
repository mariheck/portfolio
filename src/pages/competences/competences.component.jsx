import React from 'react';
import Card from '../../components/card/card.component';
import data from '../../data';

class CompetencesPage extends React.Component {
    state = {
        displayedCompetence: 0,
        competences: data.competences
    };

    previousCard = () => {
        let currentCard = this.state.displayedCompetence;
        currentCard--;
        currentCard < 0
            ? this.setState({
                  ...this.state,
                  displayedCompetence: this.state.competences.length - 1
              })
            : this.setState({
                  ...this.state,
                  displayedCompetence: currentCard
              });
    };

    nextCard = () => {
        let currentCard = this.state.displayedCompetence;
        currentCard++;
        currentCard > this.state.competences.length - 1
            ? this.setState({
                  ...this.state,
                  displayedCompetence: 0
              })
            : this.setState({
                  ...this.state,
                  displayedCompetence: currentCard
              });
    };

    render() {
        const { competences, displayedCompetence } = this.state;
        const competencesTotal = competences.length;

        return (
            <section id="competences">
                <h3>Compétences</h3>

                <div className="container">
                    <Card
                        id={`00${competences[displayedCompetence].id}`}
                        projectsNumber={`00${competencesTotal}`}
                        title={competences[displayedCompetence].title}
                        imageUrl={competences[displayedCompetence].imageUrl}
                        tags={competences[displayedCompetence].tags}
                        description={
                            competences[displayedCompetence].description
                        }
                        large
                        swipable
                        previousCard={this.previousCard}
                        nextCard={this.nextCard}
                    />
                </div>
            </section>
        );
    }
}

export default CompetencesPage;
