import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Card from "../Card";
import "./Board.css";

function Board() {
  const [cards, setCards] = useState([[uuid(), 1], [uuid(), 2], [uuid(), 3], [uuid(), 4], [uuid(), 5], [uuid(), 1], [uuid(), 2], [uuid(), 3], [uuid(), 4], [uuid(), 5]]);

  // flippedCards = [[cardId, cardValue], ...]
  const [flippedCards, setFlippedCards] = useState([]);

  // matchedCards = [cardValue, ...]
  // consider doing this as a set
  const [matchedCards, setMatchedCards] = useState([]);

  function checkMatch(firstCard, secondCard) {
    if (firstCard[1] === secondCard[1]) {
      setMatchedCards([...matchedCards, firstCard[1]]);
    };
  }

  function handleCardFlip(direction, card) {
    const flippedCount = flippedCards.length;

    if (direction === 'flip') {
      if (flippedCount < 2) {
        setFlippedCards([...flippedCards, card]);
      } else {
        checkMatch(...flippedCards);
        setFlippedCards([card]);
      }
    } else {
      let filteredCards = flippedCards.filter(c => c[0] !== card[0]);
      setFlippedCards(filteredCards);
    }
  }

  function checkFlipStatus(cardId) {
    let flippedCardIds = flippedCards.map(c => c[0]);

    if (flippedCardIds.includes(cardId)) {
      return true;
    }
    return false;
  }

  function checkMatchStatus(cardValue) {
    if (matchedCards.includes(cardValue)) {
      return true;
    }
    return false;
  }

  return (
    <div className="col-8 my-auto Board-col">
      <div className="row">
        {cards.map((c) => {
          let flipStatus = checkFlipStatus(c[0]);
          let matchStatus = checkMatchStatus(c[1]);

          return <Card key={c[0]} card={c} flipStatus={flipStatus} matchStatus={matchStatus}
            handleCardFlip={handleCardFlip} />;
        })}
      </div>
    </div>
  );
}

export default Board;