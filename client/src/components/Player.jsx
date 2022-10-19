import { useState, useRef } from "react";
import keyUpEvent from "../events/keyUpEvent"
import coverHook from "../hooks/coverHook";
import { syncVideos } from "../utils/video";
import syncHook from "../hooks/syncHook";
import Controls from "./Controls";

function Player({song}) {
    const [cover, setCover] = useState(null);
    const [count, setCount] = useState(3);
    const [mirrorEffect, setMirrorEffect] = useState(false);

    const playerRef = useRef();
    const helpRef = useRef();

    coverHook(song, setCover);
    syncHook(song, count, playerRef);
    

    if (!cover) return

    const defaultContentClassName = "min-h-screen w-full";
    const mirroredClassname = " scale-x-flip";


    return (
        <div 
            tabIndex={0}
            onKeyUp={(e) => keyUpEvent(e, count, setCount, mirrorEffect, setMirrorEffect, playerRef, helpRef)}
            ref={playerRef} 
        >
            <Controls defaultHidden={true} helpRef={helpRef}/>
            
            <div className={"h-screen w-screen overflow-hidden justify-center items-center gap-0 columns-" + count + (document.fullscreenElement ? " cursor-none" : "")}>
                {
                    [...Array(count)].map((_, i) => {

                        const key = "viz-" + i
                        const isInHalf = (i < (count / 2))
                        const middleImage = (count % 2 !== 0) ? Math.floor(count / 2) : -1;

                        let contentClassName = defaultContentClassName;
                        
                        if (mirrorEffect && (i !== middleImage)) {
                            if ((mirrorEffect === 1 && isInHalf) || (mirrorEffect === 2 && !isInHalf)) {
                                contentClassName += mirroredClassname
                            }
                        }

                        return (
                                
                            (cover && cover.endsWith("mp4"))
                            ?
                                <video key={key} onLoadedData={() => {
                                    if (playerRef.current) syncVideos(playerRef);
                                }} className={contentClassName} loop src={cover} type="video/mp4" autoPlay={true} muted={true}/>
                            :
                                <img key={key} className={contentClassName} src={cover}/>
                                
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Player;