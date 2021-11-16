import { useEffect, useState } from "react";
import {
  Button,
  Container,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "./fireworks.css";

function App() {
  const [state, setState] = useState<"playing" | "winning">("playing");

  return (
    <Container maxWidth="sm">
      <Box mt={8} height="100vh">
        {state === "playing" && <Game onWin={() => setState("winning")} />}
        {state === "winning" && <Winning onClose={() => setState("playing")} />}
      </Box>
    </Container>
  );
}

export default App;

const Game = ({ onWin }: { onWin: () => void }) => {
  const [one, setOne] = useState(randomInt());
  const [two, setTwo] = useState(randomInt());
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const n = !!answer && Number.parseInt(answer);
    if (n === one * two) {
      setPoints((prevPoints) => prevPoints + 1);
      setIsCorrect(true);
    }
  }, [one, two, answer]);

  useEffect(() => {
    if (points >= 15) {
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
    <Stack spacing={4}>
      <Box>
        <Typography variant="h2" textAlign="center">
          Vad blir
        </Typography>
        <Typography variant="h2" textAlign="center">
          {one} x {two}?
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        color="success"
        sx={{ height: 10, borderRadius: 5 }}
        value={(points * 100) / 15}
      />
      <TextField
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={isCorrect}
      ></TextField>
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={next}
        disabled={!isCorrect}
      >
        Nästa
      </Button>
    </Stack>
  );
};

const Winning = ({ onClose }: { onClose: () => void }) => (
  <Stack spacing={4}>
    <Typography variant="h2" textAlign="center">
      Grattis, du klarade det!
    </Typography>
    <Typography variant="body1" textAlign="center">
      {new Date().toLocaleString("sv-SE")}
    </Typography>

    <Button variant="contained" color="success" size="large" onClick={onClose}>
      Börja om
    </Button>
    <div className="pyro">
      <div className="before"></div>
      <div className="after"></div>
    </div>
  </Stack>
);

const randomInt = () => Math.floor(Math.random() * 6 + 4);
