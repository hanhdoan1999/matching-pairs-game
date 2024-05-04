import React from "react";
import Button from "./Button";
import "../styles/BoardHeader.css"

function BoardHeader({ resetGame, changeLevel }) {
  return (
    <div className="board-header-styled">
      <div className="board-actions-wrapper">
        <Button onClick={resetGame}>Reset Game</Button>
        <Button onClick={changeLevel}>Change Level</Button>
      </div>
    </div>
  );
}

export default BoardHeader;
