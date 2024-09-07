import { GiRock, GiPaper, GiScissors } from "react-icons/gi";

function Game() {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen p-4">
            <p class="text-4xl mb-4 font-semibold">Make your choice:</p>
            <ul class="flex space-x-14 mt-6">
                <li class="text-8xl cursor-pointer hover:text-gray-600 transition-transform duration-300 hover:scale-110">
                    <GiRock />
                </li>
                <li class="text-8xl cursor-pointer hover:text-gray-600 transition-transform duration-300 hover:scale-110">
                    <GiPaper />
                </li>
                <li class="text-8xl cursor-pointer hover:text-gray-600 transition-transform duration-300 hover:scale-110">
                    <GiScissors />
                </li>
            </ul>
        </div>
    );
}

export default Game;