import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node';
import Login from './Login';
import Player from './Player';

function App() {
    const [auth, setAuth] = useState(null);
    const [song, setSong] = useState({});

    useEffect(() => {
        let params = new URLSearchParams(window.location.hash.slice(1))
        let token = sessionStorage.getItem("token") ?? params.get("access_token")

        if (token) {
            sessionStorage.setItem("token", token);
            setAuth(token)
            window.history.replaceState(null, null, "/")
        }
    }, [])

    useEffect(() => {
        if (auth) {
            const API = new SpotifyWebApi({
                clientId: import.meta.env.VITE_CLIENT_ID,
                redirectUri: `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}`,
                accessToken: auth
            })


            const loop = setInterval(async () => {

                try {
                    const data = await API.getMyCurrentPlayingTrack();

                    if (data.statusCode === 200) {
                        if (data.body.is_playing && data.body.item) {
                            let defaultImage = null;

                            if (data.body.item.album && data.body.item.album.images) {
                                defaultImage = data.body.item.album.images[0];
                            }
                            setSong({...data.body.item, image: defaultImage})
                        }
                    } 
                } catch (error) {
                    setAuth(null)
                    sessionStorage.clear()
                    clearInterval(loop)
                }
            }, 1000);

            return () => clearInterval(loop);
        }
    }, [auth])


    return (
        <div className='text-white place-content-center'>
            {
                auth ? <Player song={song}/> :  <Login/>
            }
        </div>
    )
}

export default App
