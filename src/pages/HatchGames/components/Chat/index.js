import React, { useState, useEffect } from 'react';
import './Chat.scss'

function Chat({client, roomConnected, userCountGlobal, userCountRoom}) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("");
  const [messageChannel, setMessageChannel] = useState("global")
  const [receivedMessages, setReceivedMessages] = useState({global: [], room: [], user: []});

  useEffect(() => {
    client.on('receiveChat', ({message, channel}) => {
      
      const newLog = {...receivedMessages}
      
      newLog[channel] = [message, ...newLog[channel]]

      setReceivedMessages(newLog)
    })

    return () => {
      client.off('receiveChat');
    };
  }, [client, receivedMessages]);

  const sendMessage = () => {
    const payload = {
      message,
      channel: messageChannel
    }

    client.emit("sendChat", payload);

    setMessage("");
  }

  return (
    <div className="chatContainer">
      <button onClick={ () => setIsOpen(!isOpen) }>Open/Close</button>
      {isOpen ?
      <div className='chatWrapper'>
        {/* <button onClick={ () => setMessageChannel("user") }>{`User`}</button> */}
        {roomConnected && <button onClick={ () => setMessageChannel("room") }>{`Room(${userCountRoom})`}</button>}
        <button onClick={ () => setMessageChannel("global") }>{`Global(${userCountGlobal})`}</button>
        <p>{`Channel: ${messageChannel}${roomConnected && messageChannel === "room" ? ` (${roomConnected})` : ""}`}</p>
        <div className='messageContainer'>
          {receivedMessages[messageChannel].map((message, index) => {
            return (
              <div className='message' key={index}>
                <p>{message}</p>
              </div>
            )
          })}
        </div>
        <input className='sendInput' value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className='sendButton' onClick={ sendMessage }>Send</button>
      </div>
      :
      <>
      </>
      }
    </div>
  );
}

export default Chat;