import React from 'react';
import CompetenceCard from '../../components/competence-card/competence-card.component';
import data from '../../data';

class CompetencesSection extends React.Component {
    state = {
        displayedCompetence: 0,
        competences: data.competences
    };

    changeCard = direction => {
        let currentCard = this.state.displayedCompetence;

        if (direction === 'previous') {
            currentCard--;
        } else if (direction === 'next') {
            currentCard++;
        }

        if (currentCard < 0) {
            this.setState({
                ...this.state,
                displayedCompetence: this.state.competences.length - 1
            });
        } else if (currentCard > this.state.competences.length - 1) {
            this.setState({
                ...this.state,
                displayedCompetence: 0
            });
        } else {
            this.setState({
                ...this.state,
                displayedCompetence: currentCard
            });
        }
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
                        changeCard={this.changeCard}
                    />
                </div>
            </section>
        );
    }
}

export default CompetencesSection;
