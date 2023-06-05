import React, { useState, useEffect } from 'react';
import Button from '../../../../components/shared/Button'
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

  useEffect(() => {
    if(roomConnected === "") {
      setReceivedMessages(r => {return {...r, room: []}})
      setMessageChannel("global")
    }
  }, [roomConnected])

  const sendMessage = (e) => {
    e.preventDefault()
    
    const payload = {
      message,
      channel: messageChannel
    }

    client.emit("sendChat", payload);

    setMessage("");
  }

  return (
    <div className={`chatContainer ${isOpen ? "open" : ""}`}>
      <div className={`chatOpenerButton ${isOpen ? "open" : ""}`} onClick={ () => setIsOpen(!isOpen) }>{`${isOpen ? "Close" : "Open"} Chat`}</div>
      <div className={`chatWrapper ${isOpen ? "open" : ""}`}>
        {/* <Button className="activeChannelButton" onClick={ () => setMessageChannel("user") }>{`User`}</Button> */}
        {roomConnected && <Button className="activeChannelButton" onClick={ () => setMessageChannel("room") }>{`Room(${userCountRoom})`}</Button>}
        <Button className="activeChannelButton" onClick={ () => setMessageChannel("global") }>{`Global(${userCountGlobal})`}</Button>
        <p className="messageActiveChannel">{`Channel: ${messageChannel}${roomConnected && messageChannel === "room" ? ` (${roomConnected})` : ""}`}</p>
        <div className='messageContainer'>
          {receivedMessages[messageChannel].map((message, index) => {
            return (
              <div className='message' key={index}>
                <p>{message}</p>
              </div>
            )
          })}
        </div>
        <form className='chatForm' onSubmit={sendMessage}>
          <input autoFocus={isOpen} className='sendInput' value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button className='sendButton' tyoe="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

export default Chat;