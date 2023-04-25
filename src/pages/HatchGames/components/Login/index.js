import React, { useState, useEffect } from 'react';
import Input from '../../../../components/shared/Input';
import Link from '../../../../components/shared/Link'
import Hatch from '../../../../components/shared/Hatch'
import Button from '../../../../components/shared/Button'
import './Login.scss';

function Login({client, callback, setIsLoading}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    callback({user, pass})
  }, [user, pass, callback]);

  const tryConnect = () => {
    console.log("trying to connect...")
    setIsLoading(true)
    client.connect();
  }

  return (
    <div className='loginContainer'>
        <div className='loginContent'>
            <h2>Login</h2>
            <Input id="login" className={"loginInput"} value={user} label={"username"} onChange={(e) => setUser(e.target.value)} />
            <Input id="pass" className={"loginInput"} value={pass} label={"password (type '1' to access)"} onChange={(e) => setPass(e.target.value)} />
            <Button onClick={ tryConnect }>Connect</Button>
        </div>
        <Link className='backToHatch' to="/">
          {`< Go back to `}<Hatch />
        </Link>
    </div>
  );
}

export default Login;