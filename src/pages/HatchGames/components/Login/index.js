import React, { useState, useEffect } from 'react';

function Login({client, callback}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    callback({user, pass})
  }, [user, pass]);

  const tryConnect = () => {
    console.log("trying to connect...")
    client.connect();
  }

  const tryDisconnect = () => {
    client.disconnect();
  }

  return (
    <div>
      <h2>Login</h2>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <input value={pass} onChange={(e) => setPass(e.target.value)} />
      <button onClick={ tryConnect }>Connect</button>
      <button onClick={ tryDisconnect }>Disconnect</button>
    </div>
  );
}

export default Login;