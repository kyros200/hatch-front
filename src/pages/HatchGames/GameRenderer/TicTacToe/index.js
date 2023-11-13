import { useCallback, useEffect, useState } from 'react';
import './TicTacToe.scss';
import Button from '../../../../components/shared/Button';
import { toast } from 'react-toastify';

function TicTacToe({ client, clientInfo, roomInfo, setAnnouncerMessage }) {
    const [events, setEvents] = useState([])
    const [players, setPlayers] = useState(roomInfo.playersConnectedInfo)
    const [actualTurn, setActualTurn] = useState()
    const [winner, setWinner] = useState()
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    const [historyBoard, setHistoryBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    const [historyEvent, setHistoryEvent] = useState(0)
    const [shouldPlay, setShouldPlay] = useState(false)

    useEffect(() => {
        client.emit("tic-start", roomInfo, (res) => {
            setActualTurn(players[res.turn])
        })
    }, [client, clientInfo.name, roomInfo, players]);

    useEffect(() => {
        client.on('tic-update', (res) => {
            setEvents(res.events)
            setActualTurn(players[res.turn])
            setBoard(res.board)
            if (res.winner) setWinner(res.winner)
        })
    
        return () => {
          client.off('tic-update');
        };
    }, [client, players]);
    
    useEffect(() => {
        setPlayers(roomInfo.playersConnectedInfo)
    }, [roomInfo])

    const commitAction = (cell) => {
        if(shouldPlay) {
            client.emit("tic-action", {user: actualTurn, cell, roomName: roomInfo.name})
        } else {
            toast.error("Not your turn!")
        }
    }

    const handleHistory = (value) => {
        const tmp = historyEvent + value
        if (tmp < 0 || tmp > (events.length - 1)) return
        setHistoryEvent(tmp)
    }

    const renderHistoryBoard = useCallback(() => {
        let board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]
        let symbol = "O"

        events.forEach((e, i) => {
            if (i > historyEvent) return;
            board[e.cell[0]][e.cell[1]] = symbol
            symbol = symbol === "O" ? "X" : "O"
        })

        setHistoryBoard(board)
    }, [historyEvent, events])

    useEffect(() => {
        if(winner) {
            setAnnouncerMessage("")
            setShouldPlay(false)
        } else {
            if(actualTurn?.user === clientInfo.user) {
                setAnnouncerMessage("YOUR TURN. Select a Cell!")
                setShouldPlay(true)
            } else {
                setAnnouncerMessage("Your opponent is choosing a Cell...")
                setShouldPlay(false)
            }
        }
    }, [actualTurn, clientInfo.user, setAnnouncerMessage, winner])

    useEffect(() => {
        renderHistoryBoard(historyEvent)
    }, [historyEvent, renderHistoryBoard])
    
    return (
        <div className='tictactoeContent'>
            {!winner ? 
            <>
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
            </>
            :
            <>
                <h2>{winner.user} WON!!!</h2>
                <div className="tictactoeBoard">
                    <div className="tictactoeRow">
                        <div className="tictactoeCell">{historyBoard[0][0]}</div>
                        <div className="tictactoeCell">{historyBoard[0][1]}</div>
                        <div className="tictactoeCell">{historyBoard[0][2]}</div>
                    </div>
                    <div className="tictactoeRow">
                        <div className="tictactoeCell">{historyBoard[1][0]}</div>
                        <div className="tictactoeCell">{historyBoard[1][1]}</div>
                        <div className="tictactoeCell">{historyBoard[1][2]}</div>
                    </div>
                    <div className="tictactoeRow">
                        <div className="tictactoeCell">{historyBoard[2][0]}</div>
                        <div className="tictactoeCell">{historyBoard[2][1]}</div>
                        <div className="tictactoeCell">{historyBoard[2][2]}</div>
                    </div>
                </div>
                <div>
                    {events[historyEvent]?.message}
                </div>
                <div className='tictactoeHistoryMenu'>
                    <div>Turn</div>
                    <Button onClick={() => handleHistory(-1)}>{`<`}</Button>
                    <div>{`${historyEvent + 1} of ${events.length}`}</div>
                    <Button onClick={() => handleHistory(1)}>{`>`}</Button>
                </div>
            </>}
        </div>
    );
}

export default TicTacToe;