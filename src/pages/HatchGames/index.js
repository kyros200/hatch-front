import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat'
import Login from './components/Login'
import HeaderHatchGames from './components/HeaderHatchGames'

const BACK_URL = process.env.REACT_APP_BACK_URL;

function HatchGames() {
  const [client, setClient] = useState(io(BACK_URL, {
    autoConnect: false,
    query: {
    }
  }))
  const [isConnected, setIsConnected] = useState(client.connected);
  const [roomConnected, setRoomConnected] = useState("");
  const [clientInfo, setClientInfo] = useState();
  const [userServerCount, setUserServerCount] = useState(0);
  const [userRoomCount, setUserRoomCount] = useState(0);

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
      setUserServerCount(count);
    });

    client.on('getRoomUsersCount', (count) => {
      setUserRoomCount(count);
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

  return (
    //TODO: create context for io Client here whenever possible
    <div>
      <HeaderHatchGames isConnected={isConnected} clientInfo={clientInfo}/>
      <p>Users Connected to Server: { isConnected ? userServerCount : "Not connected to Server" }</p>
      {roomConnected ? 
      <p>Users Connected to Room: { isConnected ? userRoomCount : "Not connected to Server" }</p>
      :
      <></>}
      <Login client={client} callback={updateLogin}/>
      {isConnected ?
      <Chat client={client} />
      :<></>
      }
    </div>
  );
}

export default HatchGames;