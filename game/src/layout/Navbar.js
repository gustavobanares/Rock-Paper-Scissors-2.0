function Navbar(){
    return(
       
    <body class="h-full">
<div class="flex h-full flex-col">
    <div class=" flex items-center justify-between px-6 py-4 bg-slate-400">
            <h1 class="text-3xl font-bold text-black text-left mt-3">Jokenpô</h1>
        <div class="relative flex flex-col items-center justify-center text-black border-2 border-black font-bold rounded px-9 py-3">Score
            <div id="scoreDisplay" class="flex w-[70px] items-center justify-between gap-2">Player:
                <span id="playerScoreDisplay">0</span>
            </div>
            <div id="scoreDisplay" class="flex w-[70px] items-center justify-between gap-2">Computer:
                <span id="computerScoreDisplay">0</span>
            </div>
        </div>
    </div>
</div>
    </body>
    )
}

export default Navbar
       


   