import { useState } from 'react'
import Login from './Login';
import Player from './Player';
import { songHook } from '../hooks/songHook';
import { loginHook } from '../hooks/loginHook';
import { tokenHook } from '../hooks/tokenHook';

function App() {
    const [auth, setAuth] = useState(null);
    const [song, setSong] = useState({});
    const [publicToken, setPublicToken] = useState(null);

    loginHook(setAuth);
    songHook(auth, setAuth, setSong);
    tokenHook(publicToken, setPublicToken);


    return (
        <div className='text-white place-content-center'>
            {
                auth ? <Player song={song}/> : <Login publicToken={publicToken} setPublicToken={setPublicToken}/>
            }
        </div>
    )
}

export default App
