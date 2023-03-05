import React, { useState, useEffect } from 'react';
import './Chat.scss'

function Chat({client, clientInfo}) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("");
  const [messageChannel, setMessageChannel] = useState("global")
  const [receivedMessages, setReceivedMessages] = useState({global: [], room: [], user: []});

  useEffect(() => {
    client.on('receiveChat', ({message, channel}) => {
      
      const newLog = {...receivedMessages}
      
      newLog[channel] = [...newLog[channel], message]

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
      <>
        <button onClick={ () => setMessageChannel("user") }>User</button>
        <button onClick={ () => setMessageChannel("room") }>Room</button>
        <button onClick={ () => setMessageChannel("global") }>Global</button>
        <p>{`Channel: ${messageChannel}`}</p>
        {receivedMessages[messageChannel].map((message) => {
          return (
            <>
              <p>{message}</p>
            </>
          )
        })}
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={ sendMessage }>Send</button>
      </>
      :
      <>
      </>
      }
    </div>
  );
}

export default Chat;