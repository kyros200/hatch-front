import React, { useEffect } from 'react';
import TicTacToe from './TicTacToe'
import './GameRenderer.scss';

function GameRenderer({ client, roomConnected }) {

    useEffect(() => {
        // client.on('joinRoom', (res) => {
        //     console.log(res)
        // })

        return () => {
            // client.off('joinRoom');
        };
    }, [client])

    const renderGame = () => {
        const game = roomConnected?.substring(0, 3)

        if(game.includes("tic")) {
            return <TicTacToe client={client}/>
        }
        else if(game.includes("reg")) {
            return <>Work in Progress</>
        }
        else return <>GAME CODE NOT FOUND!!!</>
    }

    return (
        <div className='gameContainer'>
            <div className="roomInfo">
                <div className="actions">
                    <button>Leave Room</button>
                    <div className="announcer onlyDesktop">Announcer Desktop</div>
                    <div>Manual</div>
                </div>
                <div className="mobileAnnouncer onlyMobile">
                    <div className="announcer">Announcer Mobile</div>
                </div>
            </div>
            <div className="gameContent">
                {renderGame()}
            </div>
        </div>
    );
}

export default GameRenderer;