import React, { useEffect, useState } from 'react';
import TicTacToe from './TicTacToe'
import './GameRenderer.scss';
import { toast } from 'react-toastify';

function GameRenderer({ client, clientInfo, roomConnected, setRoomConnected, userCountRoom }) {

    const [announcerMessage, setAnnouncerMessage] = useState('Need more players to start...')
    const [roomInfo, setRoomInfo] = useState({})
    const [projectSuggestedPlayers, setProjectSuggestedPlayers] = useState(``)

    useEffect(() => {
        client.on('getRoomInfo', (res) => {
            setRoomInfo(res)
        })

        client.on('forcedLeaveRoom', () => {
            //when host leaves room
            client.emit("leaveRoom", roomConnected, false, (res) => {
                if(res) {
                    setRoomConnected("")
                    toast.info("Host Exited and Ended the Room")
                }
                else toast.error("Something went wrong!")
            })
        })
    
        return () => {
          client.off('getRoomInfo');
          client.off('forcedLeaveRoom');
        };
      }, [client, roomConnected, setRoomConnected]);

    useEffect(() => {
        client.emit('getRoomInfo', roomConnected, (res) => {
            setRoomInfo(res)
            if(res.playersMinimum !== res.playersMaximum)
                setProjectSuggestedPlayers(`${res.playersMinimum}-${res.playersMaximum}`)
            else
                setProjectSuggestedPlayers(`${res.playersMinimum}`)
        })
    }, [roomConnected, client])

    useEffect(() => {
        if(userCountRoom >= roomInfo.playersMinimum && userCountRoom <= roomInfo.playersMaximum) {
            if(clientInfo.user === roomInfo.createdByName)
                setAnnouncerMessage("You can now start the game!")
            else
                setAnnouncerMessage(`Waiting Host (${roomInfo.createdByName}) to start the game!`)
        }
        else
            setAnnouncerMessage("Need more players to start...")
    }, [userCountRoom, roomInfo, clientInfo])

    const renderGame = () => {
        const game = roomConnected?.substring(0, 3)

        if(game.includes("tic")) {
            return <TicTacToe client={client}/>
        }
        else if(game.includes("reg")) {
            return <>Yay! Started a Regente Game (WIP)</>
        }
        else return <>GAME CODE NOT FOUND!!!</>
    }

    const tryLeaveRoom = () => {
        const isHost = clientInfo.user === roomInfo.createdByName
        client.emit("leaveRoom", roomConnected, isHost, (res) => {
            if(res) {
                setRoomConnected("")
                toast.info("Exited Room")
            }
            else toast.error("Something went wrong!")
        })
    }

    const tryStartGame = () => {
        client.emit("startGame", roomConnected, (res) => {
            setRoomInfo(res)
        })
    }

    return (
        <div className='gameContainer'>
            <div className="roomInfo">
                <div className="actions">
                    <button onClick={tryLeaveRoom}>Leave Room</button>
                    <div className="announcer onlyDesktop">{announcerMessage}</div>
                    <div>Manual(najjarPad)</div>
                </div>
                <div className="mobileAnnouncer onlyMobile">
                    <div className="announcer">{announcerMessage}</div>
                </div>
            </div>
            <div className='gameContent'>
                {roomInfo.matchStatus === "NOT_STARTED" ?
                <div className='prepRoomContent'>
                    <p>{`${userCountRoom} Players Connected`}</p>
                    <p>{`${projectSuggestedPlayers} Players Needed`}</p>
                    {userCountRoom >= roomInfo.playersMinimum && userCountRoom <= roomInfo.playersMaximum ? 
                        (clientInfo.user === roomInfo.createdByName ?
                            <button onClick={tryStartGame}>START GAME</button>
                        :<></>)
                    :<></>}
                </div>
                : <></>}
                {roomInfo.matchStatus === "STARTED" ?
                <div className="">
                    {renderGame()}
                </div>
                : <></>}
                {roomInfo.matchStatus === "STARTED_DISCONNECT_ISSUE"?
                    <>Recconect</>
                : <></>}
                {roomInfo.matchStatus === "ENDED"?
                    <>Game End</>
                : <></>}
            </div>
        </div>
    );
}

export default GameRenderer;