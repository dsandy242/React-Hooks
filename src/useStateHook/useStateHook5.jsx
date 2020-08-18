import React, { useState } from 'react';
import Fun1 from './dummy'
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(username, password);
    // return <Fun1 name={username}></Fun1>
    };

    return (
        <form onSubmit={printValues}>
            <label>
                Username:
          <input
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    name="username"
                    type="text"
                />
            </label>
            <br />
            <label>
                Password:
          <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    name="password"
                    type="password"
                />
            </label>
            <br />
            <button>Submit</button>
        </form>
    );
}
export default LoginForm;