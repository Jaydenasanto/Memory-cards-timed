import React, { useEffect, useState } from "react";
import Card from "./cards/Card";
import Timer from "./Timer";
import { GolfCourse, Shuffle } from "@mui/icons-material";

function GameBoard({ gameState, setGameState }) {
  const [secondCard, setSecondCard] = useState(null);
  const [cards, setCards] = useState([
    {
      id: 4,
      hidden: true,
      icon: "apple",
      paired: false,
    },
    {
      id: 2,
      hidden: true,
      icon: "acunit",
      paired: false,
    },
    {
      id: 1,
      hidden: true,
      icon: "adb",
      paired: false,
    },
    {
      id: 5,
      hidden: true,
      icon: "directionsbike",
      paired: false,
    },
    {
      id: 8,
      hidden: true,
      icon: "acunit",
      paired: false,
    },
    {
      id: 3,
      hidden: true,
      icon: "accessibleforward",
      paired: false,
    },
    {
      id: 6,
      hidden: true,
      icon: "beachaccess",
      paired: false,
    },
    {
      id: 7,
      hidden: true,
      icon: "adb",
      paired: false,
    },
    {
      id: 10,
      hidden: true,
      icon: "apple",
      paired: false,
    },
    {
      id: 9,
      hidden: true,
      icon: "accessibleforward",
      paired: false,
    },
    {
      id: 12,
      hidden: true,
      icon: "beachaccess",
      paired: false,
    },
    {
      id: 11,
      hidden: true,
      icon: "directionsbike",
      paired: false,
    },
  ]);

  useEffect(() => {
    // if player wins or loses this will flip all cards back over
    let resetBoard;

    if (gameState === "lose") {
      resetBoard = cards.map((c) => {
        c.hidden = true;
        c.paired = false;
      });
    } else if (gameState === "win") {
      resetBoard = cards.map((c) => {
        c.hidden = true;
        c.paired = false;
      });
    }

    // this shuffles the cards everytime they restart the game

    if (gameState === "lose" || gameState === "win") {
      const shuffleArray = (array) => {
        let shuffled = array.sort(() => Math.random() - 0.5);

        setCards(shuffled);
      };

      shuffleArray(cards);
    }
  });

  const cardClicked = (card) => {
    // shows the selected card

    // check if player has started timer, if so then flip first selected card otherwise do nothing
    if (gameState === "playing") {
      const newCards = cards.map((c) => {
        if (c.id === card.id) {
          c.hidden = false;
        }
        return c;
      });

      setCards(newCards);
    }

    // stores the contents of the second chosen card

    const secondCardSelected = () => {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].hidden === false) {
          setSecondCard(card);
        }
      }
    };

    secondCardSelected();

    // hides the selected cards again if they are not a pair

    const incorrectPair = () => {
      setTimeout(() => {
        cards.map((c1) => {
          if (c1.id === secondCard.id) {
            c1.hidden = true;
            setSecondCard(null);
          }
          cards.map((c2) => {
            if (c2.id === card.id) {
              c2.hidden = true;
            }
          });
        });
      }, 1000);
    };

    // displays the selected cards if they are a pair

    const correctPair = () => {
      if (secondCard.icon === card.icon) {
        // changes the correctly paired cards 'paired' property to true
        const pairedCards = cards.map((c) => {
          if (c.id === card.id) {
            c.paired = true;
          }
          if (c.id === secondCard.id) {
            c.paired = true;
          }
          // console.log(c);
          return c;
        });

        setCards(pairedCards);
        setSecondCard(null);
      } else if (secondCard != null) {
        incorrectPair();
      }
    };

    correctPair();

    // check for winner

    const checkWinner = () => {
      const winTrue = [];

      // every card gets added to the winTrue array if paired correctly
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].paired != false) {
          winTrue.push(cards[i]);
        }
      }

      // checks if winTrue array contains all 12 correctly paired cards have been paired
      if (winTrue.length === 12) {
        // sets gamestate to win to stop the timer
        setGameState("win");
      }
    };
    checkWinner();
  };

  return (
    <section className="gameboard">
      {cards.map((card) => (
        <Card
          key={card.id}
          icon={card.icon}
          hidden={card.hidden}
          onClick={(_event) => {
            cardClicked(card);
          }}
        />
      ))}
    </section>
  );
}
export default GameBoard;
