import React, { Fragment, useEffect, useState } from 'react';
import SmallCard from '../../components/small-card/small-card.component';
import ArrowButton from '../../components/arrow-button/arrow-button.component';
import './carousel.styles.scss';

const Carousel = ({ cards }) => {
    const [displayedCards, setDisplayedCards] = useState([]);

    useEffect(() => {
        let newDisplayedCards = [0, 1, 2];

        if (cards.length < 3) {
            newDisplayedCards.splice(cards.length);
        }

        setDisplayedCards(newDisplayedCards);
    }, [cards]);

    const changeCards = direction => {
        // direction === -1 : previous cards
        // direction === +1 : next cards
        const nextCards = displayedCards.map(card => {
            let newCard = card + direction;
            if (newCard < 0) {
                return cards.length - 1;
            } else if (newCard > cards.length - 1) {
                return 0;
            }
            return newCard;
        });
        setDisplayedCards(nextCards);
    };

    return (
        <div className="container carousel">
            {cards.length <= 3 ? null : (
                <Fragment>
                    <ArrowButton
                        buttonClass="desktop-btn"
                        direction="left"
                        info="Précédent"
                        onAction={() => changeCards(-1)}
                    />
                    <ArrowButton
                        direction="up"
                        circle
                        size="huge"
                        buttonClass="mobile-btn"
                        info="Précédent"
                        onAction={() => changeCards(-1)}
                    />
                </Fragment>
            )}

            {displayedCards.map(cardIndex => (
                <SmallCard
                    key={cardIndex}
                    imageUrl={cards[cardIndex].imageUrl}
                    id={`00${cardIndex + 1}`}
                    totalCards={`00${cards.length}`}
                    title={cards[cardIndex].title}
                    tags={cards[cardIndex].tags}
                    description={cards[cardIndex].description}
                    links={cards[cardIndex].links}
                />
            ))}

            {cards.length <= 3 ? null : (
                <Fragment>
                    <ArrowButton
                        direction="right"
                        buttonClass="desktop-btn"
                        info="Suivant"
                        onAction={() => changeCards(1)}
                    />
                    <ArrowButton
                        direction="down"
                        circle
                        size="huge"
                        buttonClass="mobile-btn"
                        info="Suivant"
                        onAction={() => changeCards(1)}
                    />
                </Fragment>
            )}
        </div>
    );
};

export default Carousel;
