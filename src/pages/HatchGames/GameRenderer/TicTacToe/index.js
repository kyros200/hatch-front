import { useEffect, useState } from 'react';
import './TicTacToe.scss';
import { toast } from 'react-toastify';

function TicTacToe({ client, clientInfo, roomInfo, setAnnouncerMessage }) {
    const [events, setEvents] = useState([])
    const [players, setPlayers] = useState(roomInfo.playersConnectedInfo)
    const [actualTurn, setActualTurn] = useState()
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    const [shouldPlay, setShouldPlay] = useState(false)

    useEffect(() => {
        client.emit("tic-start", roomInfo, (res) => {
            // console.log(res)
            setActualTurn(players[res.turn])
        })
    }, [client, clientInfo.name, roomInfo, players]);

    useEffect(() => {
        client.on('tic-update', (res) => {
            setEvents(res.events)
            setActualTurn(players[res.turn])
            setBoard(res.board)
            // console.log(res)
        })
    
        return () => {
          client.off('tic-update');
        };
    }, [client, players]);
    
    useEffect(() => {
        setPlayers(roomInfo.playersConnectedInfo)
    }, [roomInfo])

    useEffect(() => {
        if(actualTurn?.user === clientInfo.user) {
            setAnnouncerMessage("YOUR TURN. Select a Cell!")
            setShouldPlay(true)
        } else {
            setAnnouncerMessage("Your opponent is choosing a Cell...")
            setShouldPlay(false)
        }
    }, [actualTurn, clientInfo.user, setAnnouncerMessage])

    const commitAction = (cell) => {
        if(shouldPlay) {
            client.emit("tic-action", {user: actualTurn, cell, roomName: roomInfo.name})
        } else {
            toast.error("Not your turn!")
        }
    }
    
    return (
        <div className='tictactoeContent'>
            <h2>{actualTurn?.user}'s Turn</h2>
            <div className="tictactoeBoard">
                <div className="tictactoeRow">
                    <div className="tictactoeCell" onClick={() => commitAction([0,0])}>{board[0][0]}</div>
                    <div className="tictactoeCell" onClick={() => commitAction([0,1])}>{board[0][1]}</div>
                    <div className="tictactoeCell" onClick={() => commitAction([0,2])}>{board[0][2]}</div>
                </div>
                <div className="tictactoeRow">
                    <div className="tictactoeCell" onClick={() => commitAction([1,0])}>{board[1][0]}</div>
                    <div className="tictactoeCell" onClick={() => commitAction([1,1])}>{board[1][1]}</div>
                    <div className="tictactoeCell" onClick={() => commitAction([1,2])}>{board[1][2]}</div>
                </div>
                <div className="tictactoeRow">
                    <div className="tictactoeCell" onClick={() => commitAction([2,0])}>{board[2][0]}</div>
                    <div className="tictactoeCell" onClick={() => commitAction([2,1])}>{board[2][1]}</div>
                    <div className="tictactoeCell" onClick={() => commitAction([2,2])}>{board[2][2]}</div>
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;