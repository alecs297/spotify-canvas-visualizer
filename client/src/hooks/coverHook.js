import { useEffect } from "react";

function coverHook(song, setCover) {
    useEffect(() => {

        if (song && song.id) {
            fetch(import.meta.env.VITE_PROXY_URL + '/' + song.id)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    setCover(res.canvas);
                } else {
                    setCover(song.image.url)
                }
            })
        }
    }, [song.id])
}

export default coverHook;