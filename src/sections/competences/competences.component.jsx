import React, { useState } from 'react';
import CompetenceCard from '../../components/competence-card/competence-card.component';
import data from '../../data';

const CompetencesSection = () => {
    const [displayedCompetence, setDisplayedCompetence] = useState(0);
    const [competences] = useState(data.competences);

    const changeCard = direction => {
        // direction === -1 : previous card
        // direction === +1 : next card
        let currentCard = displayedCompetence + direction;

        if (currentCard < 0) {
            setDisplayedCompetence(competences.length - 1);
        } else if (currentCard > competences.length - 1) {
            setDisplayedCompetence(0);
        } else {
            setDisplayedCompetence(currentCard);
        }
    };

    return (
        <section id="competences">
            <h3>Compétences</h3>

            <div className="container">
                <CompetenceCard
                    imageUrl={competences[displayedCompetence].imageUrl}
                    id={`00${competences[displayedCompetence].id}`}
                    totalCards={`00${competences.length}`}
                    title={competences[displayedCompetence].title}
                    tags={competences[displayedCompetence].tags}
                    description={competences[displayedCompetence].description}
                    onChangeCard={changeCard}
                />
            </div>
        </section>
    );
};

export default CompetencesSection;
