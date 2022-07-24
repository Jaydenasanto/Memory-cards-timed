import React, { useState, Component } from "react";
import Gameboard from "../inc/Gameboard";
import Timer from "../inc/Timer";
import PsychologyIcon from "@mui/icons-material/Psychology";

function GamePg() {
  const [gameState, setGameState] = useState("begin");

  return (
    <div className="container gamepg">
      <header>
        <h1>
          Memory Card Game
          <PsychologyIcon />
        </h1>
        <p>You will have to find all the pairs before the time runs out!</p>
      </header>
      <Timer gameState={gameState} setGameState={setGameState} />

      <section className="playing-field">
        <Gameboard gameState={gameState} setGameState={setGameState} />
      </section>
    </div>
  );
}

export default GamePg;
