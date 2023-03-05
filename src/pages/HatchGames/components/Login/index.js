import React, { useState, useEffect } from 'react';
import Input from '../../../../components/shared/Input';
import './Login.scss';

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

  return (
    <div className='loginContainer'>
        <div className='loginContent'>
            <h2>Login</h2>
            <Input className={"loginInput"} value={user} label={"username"} onChange={(e) => setUser(e.target.value)} />
            <Input className={"loginInput"} value={pass} label={"password"} onChange={(e) => setPass(e.target.value)} />
            <button onClick={ tryConnect }>Connect</button>
        </div>
    </div>
  );
}

export default Login;