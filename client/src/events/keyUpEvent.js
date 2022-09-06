import { logout } from "../utils/auth";

function increaseCount(count, setCount) {
    setCount(count+1);
}

function decreaseCount(count, setCount) {
    if (count > 1) setCount(count-1);
}

function cycleMirror(mirrorEffect, setMirrorEffect) {
    mirrorEffect++;
    if (mirrorEffect === 3) mirrorEffect = 0;
    setMirrorEffect(mirrorEffect);
}

function keyUpEvent(event, count, setCount, mirrorEffect, setMirrorEffect, playerRef) {
    switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
            increaseCount(count, setCount);
            break;
        case "ArrowLeft":
        case "ArrowDown":
            decreaseCount(count, setCount)
            break;
        case "f":
            if (playerRef.current) {
                document.fullscreenElement ? document.exitFullscreen() : playerRef.current.requestFullscreen();
            }
            break;
        case "l":
            logout();
            window.location.reload();
            break;
        case "m":
            cycleMirror(mirrorEffect, setMirrorEffect)
            break;
        default:
            break;
    }
}

export default keyUpEvent;