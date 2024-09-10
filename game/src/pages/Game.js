import { useState } from 'react';
import { GiRock, GiPaper, GiScissors } from "react-icons/gi";

const choices = ["rock", "paper", "scissors"];

function Game({ setPlayerScore, setComputerScore, playerScore, computerScore }) {
  const [result, setResult] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [lastPlayerChoice, setLastPlayerChoice] = useState(""); // Para rastrear a última escolha do jogador
  const [gameOver, setGameOver] = useState(false);

  function handlePlayerChoice(choice) {
    if (gameOver) return; // Se o jogo acabou, não faz nada

    // Verificar se o jogador escolheu a mesma opção duas vezes seguidas
    if (choice === "rock" && lastPlayerChoice === "rock") {
      setResult("YOU CANNOT CHOOSE ROCK TWICE IN A ROW!");
      return;
    }

    const randomChoice = choices[Math.floor(Math.random() * 3)];
    let gameResult = "";

    if (choice === randomChoice) {
      gameResult = "IT'S A TIE!";
    } else {
      switch (choice) {
        case "rock":
          gameResult = randomChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "paper":
          gameResult = randomChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "scissors":
          gameResult = randomChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
          break;
        default:
          break;
      }
    }

    // Atualizar escolhas do jogador e do computador
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);
    setLastPlayerChoice(choice); // Atualizar a última escolha do jogador

    // Atualizar o resultado
    setResult(gameResult);

    // Atualizar pontuação
    if (gameResult === "YOU WIN!") {
      setPlayerScore(prevScore => {
        const newScore = prevScore + 1;
        if (newScore >= 3) {
          setGameOver(true);
          setResult("PLAYER WINS THE GAME!");
        }
        return newScore;
      });
    } else if (gameResult === "YOU LOSE!") {
      setComputerScore(prevScore => {
        const newScore = prevScore + 1;
        if (newScore >= 3) {
          setGameOver(true);
          setResult("COMPUTER WINS THE GAME!");
        }
        return newScore;
      });
    }
  }

  function resetGame() {
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setLastPlayerChoice(""); // Resetar a última escolha
    setGameOver(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <p className="text-4xl mb-4 font-semibold">Make your choice:</p>
      <ul className="flex space-x-14 mt-6">
        <li className="text-8xl cursor-pointer hover:text-gray-600 transition-transform duration-300 hover:scale-110" onClick={() => handlePlayerChoice("rock")}>
          <GiRock />
        </li>
        <li className="text-8xl cursor-pointer hover:text-gray-600 transition-transform duration-300 hover:scale-110" onClick={() => handlePlayerChoice("paper")}>
          <GiPaper />
        </li>
        <li className="text-8xl cursor-pointer hover:text-gray-600 transition-transform duration-300 hover:scale-110" onClick={() => handlePlayerChoice("scissors")}>
          <GiScissors />
        </li>
      </ul>

      {/* Mostrar as escolhas e o resultado */}
      <div className="mt-8 text-center">
        <div>
          <span className="font-bold">Player Choice:</span> {playerChoice}
        </div>
        <div>
          <span className="font-bold">Computer Choice:</span> {computerChoice}
        </div>

        {/* Mostrar o resultado com cores */}
        <div className={`text-3xl mt-4 ${result === "YOU WIN!" || result === "PLAYER WINS THE GAME!" ? "text-green-500" : result === "YOU LOSE!" || result === "COMPUTER WINS THE GAME!" ? "text-red-500" : ""}`}>
          {result}
        </div>

        {/* Mostrar botão para reiniciar o jogo */}
        {gameOver && (
          <button 
            onClick={resetGame} 
            className="mt-4 px-4 py-2 bg-slate-400 hover:bg-slate-800 px-6 py-2 rounded text-black"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}

export default Game;
