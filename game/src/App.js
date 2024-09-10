import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Game from './pages/Game';

function App() {
  // Elevar o estado da pontuação para o App.js
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Passar pontuação como props para Navbar */}
        <Navbar playerScore={playerScore} computerScore={computerScore} />
        <div className="flex-grow">
          <Main 
            setPlayerScore={setPlayerScore} 
            setComputerScore={setComputerScore} 
            playerScore={playerScore}
            computerScore={computerScore} 
          />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

function Main({ setPlayerScore, setComputerScore, playerScore, computerScore }) {
  const location = useLocation();

  return (
    <div className="flex flex-col flex-grow">
      {location.pathname === "/" && (
        <div className="flex justify-center items-center min-h-screen">
          <Link to='/game'>
            <button id="viewRules" className="text-sm bg-slate-400 hover:bg-slate-800 px-20 py-7 rounded hover:text-white text-black">
              Start
            </button>
          </Link>
        </div>
      )}
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/game" 
          element={
            <Game 
              setPlayerScore={setPlayerScore} 
              setComputerScore={setComputerScore} 
              playerScore={playerScore} 
              computerScore={computerScore} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
