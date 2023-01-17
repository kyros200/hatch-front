function Teste({message, setMessage, receivedMessages, sendMessage}) {
  return (
      <>
        <h2>Chat</h2>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={ sendMessage }>Send</button>
        {receivedMessages.map((message) => {
          return (
            <>
            <p>{message}</p>
            </>
          )
        })}
      </>
  );
}

export default Teste;