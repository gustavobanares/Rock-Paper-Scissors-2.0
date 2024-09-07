import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Game from './pages/Game';

function App() {
  return (
    <div class="flex flex-col min-h-screen">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

function Main() {
  const location = useLocation();

  return (
    <div class="flex flex-col flex-grow">
      <Navbar />
      {location.pathname === "/" && (
        <div class="flex justify-center">
          <Link to='/game'>
            <button id="viewRules" class="m-4 flex justify-center text-sm bg-slate-400 hover:bg-slate-800 px-20 py-7 rounded hover:text-white text-black">
              Start
            </button>
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
