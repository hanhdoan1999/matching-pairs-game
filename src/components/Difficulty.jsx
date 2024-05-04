import React from "react";
import "../styles/Difficulty.css"; // Import file CSS đã được chuyển đổi

function Difficulty({ selectDifficulty }) {
  return (
    <>
      <div className="difficulty-container">
        <div className="difficulty">
          <div className="button-container">
            <button className="button"  onClick={() => selectDifficulty("easy")}>Easy</button>
            <button className="button" onClick={() => selectDifficulty("medium")}>Medium</button>
            <button className="button" onClick={() => selectDifficulty("hard")}>Hard</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Difficulty;
