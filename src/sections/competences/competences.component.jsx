import React from 'react';
import CompetenceCard from '../../components/competence-card/competence-card.component';
import data from '../../data';

class CompetencesSection extends React.Component {
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
                    <CompetenceCard
                        imageUrl={competences[displayedCompetence].imageUrl}
                        id={`00${competences[displayedCompetence].id}`}
                        totalCards={`00${competencesTotal}`}
                        title={competences[displayedCompetence].title}
                        tags={competences[displayedCompetence].tags}
                        description={
                            competences[displayedCompetence].description
                        }
                        previousCard={this.previousCard}
                        nextCard={this.nextCard}
                    />
                </div>
            </section>
        );
    }
}

export default CompetencesSection;
