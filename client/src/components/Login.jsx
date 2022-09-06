/**
 * https://github.com/thelinmichael/spotify-web-api-node/issues/342#issuecomment-792382120
 * 
 * thank you for this fix
 */

import SpotifyWebApi from 'spotify-web-api-node';
import SpotifyWebApiServer from 'spotify-web-api-node/src/server-methods';
import { getState } from '../utils/states';

SpotifyWebApi.prototype.createAuthorizeURL = SpotifyWebApiServer.createAuthorizeURL;

function Login() {
    const scopes = ['user-read-currently-playing']
    const API = new SpotifyWebApi({
        clientId: import.meta.env.VITE_CLIENT_ID,
        redirectUri: `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/`
    });

    const redirect_url = API.createAuthorizeURL(scopes, getState(), false, 'token');

    return (
        <div className='grid place-content-around h-screen w-full center content-center font-semibold'>
            <div className='w-6/7 text-center'>
                <h1 className='text-6xl mb-12 font-bold'>Get started</h1>
                <p className='text-xl'>
                    Link your Spotify profile
                    <br/>And get ready to party.
                </p>
                <p className='text-base mt-8 mb-6'>Everything is stored within your browser :)</p>
                <button className='rounded-lg bg-green-400 text-black p-3 my-5 font-bold text-xl' onClick={() => {
                    window.location.href = redirect_url;
                }}>Connect with Spotify</button>
            </div>
        </div>
    )
}

export default Login