import React, { useEffect, useState } from 'react';
import TicTacToe from './TicTacToe'
import Button from '../../../components/shared/Button'
import NajjarDoc from '../../../components/shared/NajjarDoc'
import './GameRenderer.scss';
import { toast } from 'react-toastify';

import NajjarDocWhite from '../../../components/shared/NajjarDoc/NajjarDocWhite.svg'

function GameRenderer({ client, clientInfo, roomConnected, setRoomConnected, userCountRoom }) {

    const [announcerMessage, setAnnouncerMessage] = useState('Need more players to start...')
    const [roomInfo, setRoomInfo] = useState({})
    const [najjarHatchModal, setNajjarHatchModal] = useState(false)
    const [projectSuggestedPlayers, setProjectSuggestedPlayers] = useState(``)

    const gameData = {
        tic: [
            {
                label:"Rules",
                endpoint: "/tictactoe"
            },
            {
                label:"Design",
                endpoint: "/tictactoe/design"
            },
            {
                label:"Patch Notes",
                endpoint: "/tictactoe/patchNotes"
            },
        ],
        reg: [
            {
                label:"Rules",
                endpoint: "/regente"
            },
            {
                label:"Design",
                endpoint: "/regente/design"
            },
            {
                label:"Patch Notes",
                endpoint: "/regente/patchNotes"
            },
        ]
    }

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
                    <Button onClick={tryLeaveRoom}>Leave Room</Button>
                    <div className="announcer onlyDesktop">{announcerMessage}</div>
                    <img className="najjarDocButton" src={NajjarDocWhite} alt="NajjarDoc." onClick={() => setNajjarHatchModal(true)}/>
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
                            <Button onClick={tryStartGame}>START GAME</Button>
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
            <NajjarDoc 
                open={najjarHatchModal}
                onClose={() => setNajjarHatchModal(false)}
                data={gameData[roomConnected?.substring(0, 3)]}
            />
        </div>
    );
}

export default GameRenderer;