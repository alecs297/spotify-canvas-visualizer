import { v4 } from 'uuid'

export function getState() {
    let state = sessionStorage.getItem("state") ?? v4();
    sessionStorage.setItem("state", state);
    return state;
}