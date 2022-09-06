import { useEffect, useState } from "react";

function Player({song}) {
    const [cover, setCover] = useState(null);
    const [count, setCount] = useState(3);

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

    if (!cover) return

    return (
        <div className={"h-screen w-screen overflow-hidden justify-center items-center columns-" + count}>
            {
                [...Array(count)].map((_, i) => {
                    return (
                            
                        (cover && cover.endsWith("mp4"))
                        ?
                            <video className="min-h-full min-w-full" loop src={cover} type="video/mp4" autoPlay={true}/>
                        :
                            <img className="min-h-full min-w-full self-center" src={cover}/>
                            
                    )
                })
            }
        </div>
    )
}

export default Player;