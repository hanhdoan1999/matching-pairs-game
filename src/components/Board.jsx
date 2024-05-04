import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import BoardHeader from "./BoardHeader";
import ScoreBoardModal from "./ScoreBoardModal";
import shuffleArray from "../utils/shuffleArray";
import getNameById from "../utils/getNameById";
import "../styles/Board.css";


function Board({ duplicatedCards, setIsStartGame, gameDifficulty, timeEnd }) {
  const [cards, setCards] = useState(shuffleArray(duplicatedCards));
  const [cardPair, setCardPair] = useState([]);
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [turnsCount, setTurnsCount] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isOpenScoreBoard, setIsOpenScoreBoard] = useState(false);
  const [time, setTime] = useState(timeEnd);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerRef.current);
          onTimeEnd();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timeEnd]);



  const calculateScore = () => {
    setScore(score + 100);
  };

  const resetCardPair = () => setCardPair([]);

  const handleCardClick = (id) => {
    clearTimeout(window.cardFlipTimer);

    if (cardPair.includes(id)) return;

    const currentCardPair = [...cardPair, id];

    if (currentCardPair.length === 3) {
      setCardPair([id]);
    } else {
      setCardPair(currentCardPair);
    }

    if (currentCardPair.length !== 2) return;

    setTurnsCount(turnsCount + 1);

    const [firstCardName, secondCardName] = currentCardPair.map((cardId) =>
      getNameById(cards, cardId)
    );

    if (firstCardName === secondCardName) {
      const currentFlippedCards = [...flippedCardList, ...currentCardPair];
      setFlippedCardList(currentFlippedCards);
      resetCardPair();
      calculateScore();

      if (cards.length === currentFlippedCards.length) {
        calculateScore();
        setTimeout(() => setIsOpenScoreBoard(true), 1000);
      }
    } else {
      window.cardFlipTimer = setTimeout(resetCardPair, 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray(duplicatedCards));
    setCardPair([]);
    setFlippedCardList([]);
    setTurnsCount(0);
    setScore(0);
    setIsOpenScoreBoard(false);
    setTime(timeEnd)
  };

  const changeLevel = () => {
    setIsStartGame(false);
    setIsOpenScoreBoard(false);
  };

  const onTimeEnd = () => {
    setTimeout(() => setIsOpenScoreBoard(true), 1000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div className="time-block">
        <h2 className="score-text">Time : {formatTime(time)} </h2>
        <h2 className="score-text">Score : {score}</h2>
      </div>
      <BoardHeader
       changeLevel={changeLevel}
       resetGame={resetGame}
      />
      <div className={` board-styled ${gameDifficulty}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.src}
            cardId={card.id}
            handleClick={() => handleCardClick(card.id)}
            isFlipped={[...flippedCardList, ...cardPair].includes(card.id)}
          />
        ))}
      </div>
      <ScoreBoardModal
        isOpen={isOpenScoreBoard}
        setIsOpen={setIsOpenScoreBoard}
        turnsCount={turnsCount}
        score={score}
        bestScore={bestScore}
        changeLevel={changeLevel}
        resetGame={resetGame}
      />
    </>
  );
}

export default Board;
