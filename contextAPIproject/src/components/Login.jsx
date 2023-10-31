import React, { useState, useContext} from 'react';
import UserContext from '../context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
        <h2>Login</h2>
        {" "}
        <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='bg-green-500 rounded-md px-2 py-2 my-1' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login