import React from 'react';
import Board from './Board';
import { useState } from 'react';
import './tictactoe.css';

function TicTacToe() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePaly(nextSquares){
        
    }

    return (
        <>
            <h2>Tic Tac Toe</h2>
            <div className="game">
                <div className='game-board'>
                    <Board />
                </div>
            </div>
        </>
    );
}

export default TicTacToe;