import React, { useState, useEffect } from "react";
import BmorizeApi from "../BmorizeApi";
import Card from "../Card";
import Error from "../Error";
import Loading from "../Loading";
import "./Board.css";

function Board({ level }) {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState(new Set([]));

  useEffect(function fetchCardsWhenMounted() {
    async function fetchCards() {
      try {
        const cardsResults = await BmorizeApi.getCards(level);
        setCards(cardsResults);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCards();
  }, [level]);

  function checkCardMatch(firstCard, secondCard) {
    if (firstCard.value === secondCard.value) {
      setMatchedCards(new Set([...matchedCards, firstCard.value]));
    };
  }

  function handleCardFlip(direction, card) {
    const flippedCount = flippedCards.length;

    if (direction === 'flip') {
      if (flippedCount < 2) {
        setFlippedCards([...flippedCards, card]);
      } else {
        checkCardMatch(...flippedCards);
        setFlippedCards([card]);
      }
    } else {
      let filteredCards = flippedCards.filter(c => c.id !== card.id);
      setFlippedCards(filteredCards);
    }
  }

  function checkFlipStatus(cardId) {
    let flippedCardIds = flippedCards.map(c => c.id);

    if (flippedCardIds.includes(cardId)) {
      return true;
    }
    return false;
  }

  function checkMatchStatus(cardValue) {
    if (matchedCards.has(cardValue)) {
      return true;
    }
    return false;
  }

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  let rowIdx = 0;

  return (
    <div className="col-8 my-auto Board-col">
      {cards.map((r) => {
        rowIdx++;

        return <div className="row" key={rowIdx}>
          {r.map(c => {
            let flipStatus = checkFlipStatus(c.id);
            let matchStatus = checkMatchStatus(c.value);

            return <Card key={c.id} card={c} flipStatus={flipStatus} matchStatus={matchStatus}
              handleCardFlip={handleCardFlip} />;
          })}
        </div>;
      })}
    </div>
  );
}

export default Board;