import React from 'react';
import "./Card.css";

function Card({ card, flipStatus, matchStatus, handleCardFlip, }) {
  function handleClick() {
    // only flip card if it's not matched yet
    if (!matchStatus) {
      // if card is already flipped, unflip
      if (flipStatus) {
        handleCardFlip('unflip', card);
      } else {
        handleCardFlip('flip', card);
      }
    }
  }

  const flipStyling = (flipStatus || matchStatus) && 'is-flipped';

  return (
    <div className="col Card-col">
      <div className="Card-scene">
        <div className={`Card-flip-card ${flipStyling}`} onClick={handleClick}>
          <div className="Card-front">
            {card.value}
          </div>
          <div className="Card-back">
            <img className="Card-img" src={card.image} alt={card.value}></img>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card;