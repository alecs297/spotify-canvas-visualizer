import { useEffect } from "react";
import SpotifyWebApi from 'spotify-web-api-node';
import { logout } from "../utils/auth";

export function songHook(auth, setAuth, setSong) {
    useEffect(() => {
        if (auth) {
            const API = new SpotifyWebApi({
                clientId: import.meta.env.VITE_CLIENT_ID,
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
                    logout();
                    setAuth(null);
                    clearInterval(loop);
                }
            }, 1000);

            return () => clearInterval(loop);
        }
    }, [auth])
}