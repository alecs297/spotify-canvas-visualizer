import { useEffect, useState, useRef } from "react";
import keyUpEvent from "../hooks/keyUpEvent"
import syncVideos from "../utils/sync";

function Player({song}) {
    const [cover, setCover] = useState(null);
    const [count, setCount] = useState(3);
    const playerRef = useRef();

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

    useEffect(() => {
        if (playerRef.current) syncVideos(playerRef)
    }, [song.id, count])

    if (!cover) return

    return (
        <div ref={playerRef} tabIndex={0} onKeyUp={(e) => keyUpEvent(e, count, setCount, playerRef)} className={"h-screen w-screen overflow-hidden justify-center items-center columns-" + count}>
            {
                [...Array(count)].map((_, i) => {
                    return (
                            
                        (cover && cover.endsWith("mp4"))
                        ?
                            <video key={"viz-" + i} className="min-h-screen w-full" loop src={cover} type="video/mp4" autoPlay={true}/>
                        :
                            <img key={"viz-" + i} className="min-h-screen w-full self-center" src={cover}/>
                            
                    )
                })
            }
        </div>
    )
}

export default Player;