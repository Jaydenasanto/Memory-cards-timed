import React, { useState, useEffect, Component } from "react";
import GameBoard from "./Gameboard";
import GamePg from "../pages/Gamepg";
import { CardTravelSharp } from "@mui/icons-material";

function Timer({ gameState, setGameState }) {
  const [secDig, setSecDig] = useState(60);
  const [startBtn, setStartBtn] = useState("Start");
  const [clockInterval, setClockInterval] = useState(null);

  useEffect(() => {
    if (gameState === "begin") {
      clearInterval(clockInterval);
      setStartBtn("Start");
    } else if (gameState === "playing") {
      setStartBtn("Good luck");
    } else if (gameState === "win") {
      clearInterval(clockInterval);
      setStartBtn("Restart");
    } else if (gameState === "lose") {
      clearInterval(clockInterval);
      setStartBtn("Restart");
    }
  }, [gameState]);

  const startTimer = (num) => {
    setSecDig(num);
    return setInterval(() => setSecDig(--num), 1000);
  };

  const checkGameStatus = () => {
    if (secDig === 0) {
      setGameState("lose");
    }
  };

  checkGameStatus();

  const btnClicked = (_event) => {
    if (startBtn !== "Good luck") {
      setGameState("playing");
      clearInterval(clockInterval);
      setClockInterval(startTimer(60));
    }
  };

  return (
    <div className="container timer">
      <div className="timer-frame">
        <div className="seconds-digits">{secDig}</div>
      </div>
      <div className="startbtn-container">
        <button className="start-btn" onClick={(_e) => btnClicked()}>
          {startBtn}
        </button>
      </div>
    </div>
  );
}

export default Timer;
