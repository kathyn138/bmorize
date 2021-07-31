import React, { useState, useEffect } from "react";
import BmorizeApi from "../BmorizeApi";
import Card from "../Card";
import Error from "../Error";
import Loading from "../Loading";
import "./Board.css";

function Board() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // flippedCards = [[cardId, cardValue], ...]
  const [flippedCards, setFlippedCards] = useState([]);

  // matchedCards = [cardValue, ...]
  // consider doing this as a set
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(function fetchCardsWhenMounted() {
    async function fetchCards() {
      try {
        const cardsResults = await BmorizeApi.getCards();
        setCards(cardsResults);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCards();
  }, []);

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

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

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