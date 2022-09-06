import { useEffect } from "react"
import { syncVideos } from "../utils/video";

function syncHook(song, count, playerRef) {
    useEffect(() => {
        if (playerRef.current) syncVideos(playerRef)
    }, [song.id, count])
}

export default syncHook;