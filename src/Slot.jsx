import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
const Slot = () => {
  document.title = "Slot Machine Game";
  const items = [
    {
      val: "🦥",
      bg: "Red",
    },
    {
      val: "🐎",
      bg: "green",
    },
    {
      val: " 🐏",
      bg: "yellow",
    },
    {
      val: "🦖",
      bg: "pink",
    },
    {
      val: "🐬",
      bg: "white",
    },
  ];

  const [result, setResult] = useState({ val: "", color: "" });
  const [a, seta] = useState(items[Math.floor(Math.random() * items.length)]);
  const [b, setb] = useState(items[Math.floor(Math.random() * items.length)]);
  const [c, setc] = useState(items[Math.floor(Math.random() * items.length)]);

  const getResult = (A, B, C) => {
    if (A == B && B == C) {
      setResult({ val: "You Won!", color: "Green" });
    } else {
      setResult({ val: "You Loss!", color: "Red" });
    }
  };
  async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }

  const startmachine = async () => {
    setResult({ val: "" });
    let randomA = "",
      randomB = "",
      randomC = "d";
    for (var second = 0; second < 30; second++) {
      await delay(200);
      randomA = items[Math.floor(Math.random() * items.length)];
      randomB = items[Math.floor(Math.random() * items.length)];
      randomC = items[Math.floor(Math.random() * items.length)];
      seta(randomA);
      setb(randomB);
      setc(randomC);
    }

    getResult(randomA.val, randomB.val, randomC.val); // Call getResult after the loop with final values
  };

  return (
    <>
      <div className="header">🎰 Slot Machine Game 🎰</div>
      <div className="slot-container">
        <div className="slot-machine">
          <div className="slot-luck">Try your Luck!!</div>
          <div className="slot-box">
            <div className="slot" style={{ backgroundColor: a.bg }}>
              {a.val}
            </div>
            <div className="slot" style={{ backgroundColor: b.bg }}>
              {b.val}
            </div>
            <div className="slot" style={{ backgroundColor: c.bg }}>
              {c.val}
            </div>
          </div>
          <div className="slot-result-div" style={{ color: result.color }}>
            {result.val}
          </div>
          <button className="slot-button" onClick={startmachine}>
            START
          </button>
        </div>
      </div>
    </>
  );
};

export default Slot;
