import React from "react";
import "../styles/Card.css"; // Import file CSS đã được chuyển đổi

import data from "../data.json";

function Card({ image, cardId, isFlipped, handleClick }) {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-front">{image}</div>
      <div className="card-back" data-id={cardId}></div>
    </div>
  );
}

export default Card;
