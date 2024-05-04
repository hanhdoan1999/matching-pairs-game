import React from "react";
import "../styles/ScoreBoardModal.css"; // Import file CSS đã được chuyển đổi
import Modal from "./Modal";
import Button from "./Button";

function ScoreBoardModal({
  score,
  changeLevel,
  isOpen,
  setIsOpen,
}) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} isShowCloseButton={false}>
      <p className="scores">
        <span className="score">{score}</span> points!
      </p>
      <Button onClick={changeLevel}>New Game</Button>
    </Modal>
  );
}

export default ScoreBoardModal;
