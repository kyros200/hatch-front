import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat'
import HeaderHatchGames from './components/HeaderHatchGames'

const BACK_URL = process.env.REACT_APP_BACK_URL;

function Teste() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [client, setClient] = useState(io(BACK_URL, {
    autoConnect: false,
    query: {
      user,
      pass,
    }
  }))
  const [isConnected, setIsConnected] = useState(client.connected);
  const [roomConnected, setRoomConnected] = useState("");
  const [clientId, setClientId] = useState();
  const [userServerCount, setUserServerCount] = useState(0);
  const [userRoomCount, setUserRoomCount] = useState(0);

  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    setClient(io(BACK_URL, {
      autoConnect: false,
      query: {
        user,
        pass,
      }
    }))
  }, [user, pass]);

  useEffect(() => {
    client.on('connect', () => {
      setIsConnected(true);
      setClientId(client.id);
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

    client.on('joinRoom', (res) => {
      console.log(res)
    })

    client.on('receiveMessageRoom', (res) => {
      setReceivedMessages([res, ...receivedMessages])
    })

    return () => {
      client.off('connect');
      client.off('connect_error');
      client.off('disconnect');
      client.off('getServerUsersCount');
      client.off('getRoomUsersCount');
      client.off('receiveMessageRoom');
      client.off('joinRoom');
    };
  }, [client, receivedMessages]);

  const tryConnect = () => {
    console.log("trying to connect...")
    client.connect();
  }

  const tryDisconnect = () => {
    client.disconnect();
    setClientId()
  }

  const sendMessage = () => {
    client.emit("sendMessageRoom", message);
    setMessage("");
  }

  return (
    <div>
      <HeaderHatchGames connected={isConnected} clientId={clientId}/>
      <p>Users Connected to Server: { isConnected ? userServerCount : "Not connected to Server" }</p>
      {roomConnected ? 
      <p>Users Connected to Room: { isConnected ? userRoomCount : "Not connected to Server" }</p>
      :
      <></>}
      <h2>Login</h2>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <input value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={ tryConnect }>Connect</button>
      <button onClick={ tryDisconnect }>Disconnect</button>
      <br/><br/>
      {isConnected ?
      <Chat message={message} setMessage={setMessage} receivedMessages={receivedMessages} sendMessage={sendMessage}/>
      :<></>
      }
    </div>
  );
}

export default Teste;