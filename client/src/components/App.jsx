import { useState, useEffect } from 'react'
import Login from './Login';
import Player from './Player';
import { songHook } from '../hooks/songHook';
import { loginHook } from '../hooks/loginHook';

function App() {
    const [auth, setAuth] = useState(null);
    const [song, setSong] = useState({});

    loginHook(setAuth);
    songHook(auth, setAuth, setSong);


    return (
        <div className='text-white place-content-center'>
            {
                auth ? <Player song={song}/> :  <Login/>
            }
        </div>
    )
}

export default App
