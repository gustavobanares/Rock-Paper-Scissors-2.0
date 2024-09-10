import { useState } from 'react';

function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <footer className="w-full flex items-center justify-center bg-slate-400 p-3 mt-auto">
            <div className="flex flex-col items-center">
                <button 
                    onClick={openModal}
                    className="mt-4 flex justify-center text-sm bg-white hover:bg-slate-800 px-6 py-2 rounded hover:text-white text-black"
                >
                    View rules
                </button>
                <small className="mt-2 text-white">
                    Developed by
                    <a className="transition-all hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://github.com/gustavobanares"> Gustavo Bañares </a>
                </small>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Rules of Jokenpô</h2>
                        <p className="mb-4">Jokenpô is a Japanese game where two players choose one of three possible items: Rock, Paper, or Scissors. The rules are as follows:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Rock beats Scissors</li>
                            <li>Scissors beats Paper</li>
                            <li>Paper beats Rock</li>
                            <li>If both players choose the same item, it's a tie</li>
                        </ul>
                        <button 
                            onClick={closeModal}
                            className="bg-slate-400 hover:bg-slate-600 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;
