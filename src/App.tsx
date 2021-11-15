import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState<"initial" | "playing" | "winning">(
    "initial"
  );

  return (
    <div className="App">
      {state === "initial" && <Welcome onClick={() => setState("playing")} />}
      {state === "playing" && (
        <Game
          onQuit={() => setState("initial")}
          onWin={() => setState("winning")}
        />
      )}
      {state === "winning" && <Winning onClose={() => setState("initial")} />}
    </div>
  );
}

export default App;

const Welcome = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>Starta</button>
);

const Game = ({ onQuit, onWin }: { onQuit: () => void; onWin: () => void }) => {
  const [one, setOne] = useState(randomInt());
  const [two, setTwo] = useState(randomInt());
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState<string>();
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const n = !!answer && Number.parseInt(answer);
    if (n === one * two) {
      setPoints((prevPoints) => prevPoints + 1);
      setIsCorrect(true);
    }
  }, [one, two, answer]);

  useEffect(() => {
    if (points >= 10) {
      onWin();
    }
  }, [onWin, points]);

  const next = () => {
    setAnswer("");
    setOne(randomInt);
    setTwo(randomInt);
    setIsCorrect(false);
  };

  return (
    <div>
      <div>
        {one} x {two}
      </div>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={isCorrect}
      ></input>
      <div>Poäng: {points}</div>
      <button onClick={next} disabled={!isCorrect}>
        Nästa
      </button>
      <button onClick={onQuit}>Tillbaka</button>
    </div>
  );
};

const Winning = ({ onClose }: { onClose: () => void }) => (
  <div>
    <div>Grattis, du klarade det!</div>
    <div>{new Date().toLocaleString()}</div>
    <button onClick={onClose}>Börja om</button>
  </div>
);

const randomInt = () => Math.floor(Math.random() * 6 + 4);
