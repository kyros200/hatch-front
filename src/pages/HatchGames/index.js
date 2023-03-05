import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat'
import Login from './components/Login'
import Projects from './components/Projects'
import Lobby from './components/Lobby'
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
  const [userCount, setUserCount] = useState({global: 0, room: 0});

  const updateLogin = ({user, pass}) => {
    setClient(io(BACK_URL, {
      autoConnect: false,
      query: {
        user,
        pass,
      }
    }))
  }

  useEffect(() => {
    client.on('connect', () => {
      console.log("connected successfully!")
      setIsConnected(true);
      client.emit("getClientInfo")
      // client.emit("joinRoom", (res) => {
      //   console.log(res)
      // })
    });

    client.on("connect_error", (err) => {
      console.log(err.message); // not authorized
    });
 
    client.on('disconnect', () => {
      setIsConnected(false);
    });
    
    client.on('getServerUsersCount', (count) => {
      setUserCount({...userCount, global: count});
    });

    client.on('getRoomUsersCount', (count) => {
      setUserCount({...userCount, room: count});
    });

    client.on('ReceiveClientInfo', (userInfo) => {
      setClientInfo(userInfo)
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
      {/* <p>Users Connected to Server: { isConnected ? userServerCount : "Not connected to Server" }</p>
      {roomConnected ? 
      <p>Users Connected to Room: { isConnected ? userRoomCount : "Not connected to Server" }</p>
      :
      <></>} */}

      {!isConnected && 
      <Login client={client} callback={updateLogin} /> 
      }

      {isConnected && !choosenProject && 
      <Projects client={client} setChoosenProject={setChoosenProject} />
      }

      {isConnected && choosenProject && 
      <Lobby client={client} choosenProject={choosenProject} />
      }

      {isConnected &&
      <Chat client={client} />
      }
    </div>
  );
}

export default HatchGames;