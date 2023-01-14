import { v4 } from 'uuid'

/**
 * https://github.com/thelinmichael/spotify-web-api-node/issues/342#issuecomment-792382120
 * 
 * thank you for this fix
 */
import SpotifyWebApi from 'spotify-web-api-node';
import SpotifyWebApiServer from 'spotify-web-api-node/src/server-methods';
SpotifyWebApi.prototype.createAuthorizeURL = SpotifyWebApiServer.createAuthorizeURL;


function getState() {
    let state = sessionStorage.getItem("state") ?? v4();
    sessionStorage.setItem("state", state);
    return state;
}

export function getRedirectUrl(publicToken) {
    const scopes = ['user-read-currently-playing']
    const API = new SpotifyWebApi({
        clientId: publicToken,
        redirectUri: `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/`
    });
    return API.createAuthorizeURL(scopes, getState(), true, 'token');
}

export function login(token) {
    if (!token || token === "null") return sessionStorage.clear();
    sessionStorage.setItem("token", token);
    window.history.replaceState(null, null, "/")
}

export function logout() {
    sessionStorage.clear()
}