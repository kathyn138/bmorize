import React, { useState, useEffect, useRef, useMemo } from "react";
import BmorizeApi from "../BmorizeApi";
import Card from "../Card";
import Error from "../Error";
import Loading from "../Loading";
import "./Board.css";

/**
 * handles logic for card flip and game end. 
 * renders loading screen, error screen, or cards
 * depending on what is returned from the api.
 */
function Board({ level, handleEndGame }) {
  const [cards, setCards] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState(new Set([]));
  const rows = Object.keys(cards);

  // on mount, fetch cards from api
  useEffect(
    function fetchCardsWhenMounted() {
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
    },
    [level]
  );

  const timerId = useRef();

  /**
   * only two cards can be flipped at a time.
   * automatically unflip a pair of unmatched cards
   * after a second if user doesn't click on a new card
   */
  useEffect(
    function autoUnflipCards() {
      if (flippedCards.length === 2) {
        let match = checkCardMatch(...flippedCards);
        if (match) {
          setMatchedCards(
            (matchedCards) => new Set([...matchedCards, flippedCards[0].value])
          );
          return setFlippedCards([]);
        }

        timerId.current = setInterval(() => setFlippedCards([]), 1000);

        return function cleanUpTimer() {
          clearInterval(timerId.current);
        };
      }
    },
    [flippedCards]
  );

  // used to check if game ended
  const totalUniqueCards = useMemo(() => {
    if (rows.length > 0) {
      let cardsPerRow = cards["0"].length;
      let totalCards = rows.length * cardsPerRow;
      return totalCards / 2;
    }
  }, [rows, cards]);

  /**
   * when a user starts to match cards,
   * check if the game ending condition is met.
   * game ends when total number of unique cards is
   * equal to total number of matched cards
   */
  useEffect(function checkGameEnd() {
    console.log("run use effect");
    if (matchedCards.size) {
      console.log("inside if");
      console.log("keys", Object.keys(cards).length);
      let totalMatchedCards = matchedCards.size;

      if (totalUniqueCards === totalMatchedCards) handleEndGame();
    }
  });

  function checkCardMatch(firstCard, secondCard) {
    console.log("checking if cards match");
    if (firstCard.value === secondCard.value) {
      return true;
    }
    return false;
  }

  /**
   * checks if clicked card is unflipped or flipped
   * if card is unflipped, flip the card
   * else, unflip the card
   *
   * when two cards are flipped, check if they match.
   * if user attempts to flip over three cards, the
   * first two cards will be automatically unflipped.
   */
  function handleCardFlip(direction, card) {
    const flippedCount = flippedCards.length;
    console.log("fp", flippedCount);
    if (direction === "flip") {
      if (flippedCount < 2) {
        setFlippedCards([...flippedCards, card]);
      } else {
        console.log("in else user flip");
        let match = checkCardMatch(...flippedCards);
        if (match) {
          setMatchedCards(new Set([...matchedCards, flippedCards[0].value]));
        } else {
          setFlippedCards([card]);
        }
      }
    } else {
      let filteredCards = flippedCards.filter((c) => c.id !== card.id);
      setFlippedCards(filteredCards);
    }
  }

  // keeps track of whether or not a card has been flipped
  function checkFlipStatus(cardId) {
    let flippedCardIds = flippedCards.map((c) => c.id);

    if (flippedCardIds.includes(cardId)) {
      return true;
    }
    return false;
  }

  // keeps track of whether or not a card has been matched
  function checkMatchStatus(cardValue) {
    if (matchedCards.has(cardValue)) {
      return true;
    }
    return false;
  }

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="col-8 my-auto Board-col">
      {rows.map((r) => {
        return (
          <div className="row" key={r}>
            {cards[r].map((c) => {
              let flipStatus = checkFlipStatus(c.id);
              let matchStatus = checkMatchStatus(c.value);

              return (
                <Card
                  key={c.id}
                  card={c}
                  flipStatus={flipStatus}
                  matchStatus={matchStatus}
                  handleCardFlip={handleCardFlip}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
