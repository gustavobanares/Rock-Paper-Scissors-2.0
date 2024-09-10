function Navbar({ playerScore, computerScore }) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-6 py-4 bg-slate-400">
          <h1 className="text-3xl font-bold text-black text-left mt-3">Jokenpô</h1>
          <div className="relative flex flex-col items-center justify-center text-black border-2 border-black font-bold rounded px-9 py-3">
            Score
            <div id="scoreDisplay" className="flex w-[70px] items-center justify-between gap-2">
              Player: <span>{playerScore}</span>
            </div>
            <div id="scoreDisplay" className="flex w-[70px] items-center justify-between gap-2">
              Computer: <span>{computerScore}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  


   