import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat'
import Login from './components/Login'
import Projects from './components/Projects'
import Lobby from './components/Lobby'
import GameRenderer from './games'
import HeaderHatchGames from './components/HeaderHatchGames'

const BACK_URL = process.env.REACT_APP_BACK_URL;

function HatchGames() {
  const [client, setClient] = useState(io(BACK_URL, {
    autoConnect: false,
    query: {
    }
  }))
  const [isConnected, setIsConnected] = useState(client.connected);
  const [choosenProject, setChoosenProject] = useState("");
  const [roomConnected, setRoomConnected] = useState("");
  const [clientInfo, setClientInfo] = useState();
  const [userCountGlobal, setUserCountGlobal] = useState(0);
  const [userCountRoom, setUserCountRoom] = useState(0);

  const updateLogin = useCallback(({user, pass}) => {
    setClient(io(BACK_URL, {
      autoConnect: false,
      query: {
        user,
        pass,
      }
    }))
  }, [])

  useEffect(() => {
    client.on('connect', () => {
      console.log("connected successfully!")
      setIsConnected(true);
      client.emit("getClientInfo", (res) => {
        setClientInfo(res)
      })
    });

    client.on("connect_error", (err) => {
      console.log(err.message); // not authorized
    });
 
    client.on('disconnect', () => {
      setIsConnected(false);
    });
    
    client.on('getServerUsersCount', (count) => {
      setUserCountGlobal(count);
    });

    client.on('getRoomUsersCount', (count) => {
      setUserCountRoom(count);
    });

    client.on('joinRoom', (res) => {
      console.log(res)
    })

    return () => {
      client.off('connect');
      client.off('connect_error');
      client.off('disconnect');
      client.off('getServerUsersCount');
      client.off('getRoomUsersCount');
      client.off('joinRoom');
    };
  }, [client]);

  const tryDisconnect = () => {
    setChoosenProject("")
    setRoomConnected("")
    setClientInfo()
    client.disconnect();
  }

  return (
    //TODO: create context for io Client here whenever possible
    <div>
      <HeaderHatchGames isConnected={isConnected} callback={tryDisconnect}/>

      {!isConnected && 
      <Login client={client} callback={updateLogin} clientInfo={clientInfo}/> 
      }

      {isConnected && !choosenProject && 
      <Projects client={client} setChoosenProject={setChoosenProject} />
      }

      {isConnected && choosenProject && !roomConnected &&
      <Lobby client={client} choosenProject={choosenProject} setRoomConnected={setRoomConnected}/>
      }

      {isConnected && choosenProject && roomConnected && 
      <GameRenderer client={client} roomConnected={roomConnected}/>
      }

      {isConnected &&
      <Chat client={client} roomConnected={roomConnected} userCountGlobal={userCountGlobal} userCountRoom={userCountRoom}/>
      }
    </div>
  );
}

export default HatchGames;