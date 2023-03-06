import React from 'react';
import TicTacToe from './TicTacToe'
import './Game.scss';

function GameRenderer({ client, roomConnected }) {

    const renderGame = () => {
        const game = roomConnected?.substring(0, 3)

        if(game.includes("tic")) {
            return <TicTacToe client={client}/>
        }
        else if(game.includes("reg")) {
            return <>Work in Progress</>
        }
        else return <>Error</>
    }

    return (
        <div className='gameContainer'>
            {renderGame()}
        </div>
    );
}

export default GameRenderer;