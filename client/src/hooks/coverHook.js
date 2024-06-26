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
                    setCover(import.meta.env.VITE_FALLBACK ?? song.image.url)
                }
            })
            .catch(() => setCover(import.meta.env.VITE_FALLBACK ?? song.image.url))
        }
    }, [song.id])
}

export default coverHook;