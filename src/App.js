import { useState } from "react";

import Board from "./components/Board";
import Difficulty from "./components/Difficulty";
// import GlobalStyle from "./components/globalStyled";
import "./styles/style.css";

import duplicateCards from "./utils/duplicateCards";

import data from "./data.json";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  const [duplicatedCards, setDuplicatedCards] = useState(null);
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [timeEnd, setTimeEnd] = useState(10)

  const selectDifficulty = (difficulty = "easy") => {
    const cardCounts = {
      easy: 4,
      medium: 8,
      hard: 12,
    };

    const timeLevel = {
      easy: 10,
      medium: 30,
      hard: 60,
    };

    const cards = duplicateCards(data, cardCounts[difficulty]);

    setTimeEnd(timeLevel[difficulty])

    setDuplicatedCards(cards);
    setGameDifficulty(difficulty);
    setIsStartGame(true);
  };

  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      {isStartGame ? (
        <Board
          duplicatedCards={duplicatedCards}
          setIsStartGame={setIsStartGame}
          gameDifficulty={gameDifficulty}
          timeEnd = {timeEnd}
        />
      ) : (
        <Difficulty selectDifficulty={selectDifficulty} />
      )}
    </div>
  );
}

export default App;
