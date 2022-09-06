function isValidVideo(element) {
    return document.contains(element) && element.tagName === "VIDEO"
}

function resume(video) {
    if (video.paused) video.play()
}

export function syncVideos(parentRef) {

    let time = 0;

    if (!parentRef.current) return

    [...parentRef.current.children].forEach(video => {
        if (isValidVideo(video)) {
            if (!time) time = video.currentTime;
            video.currentTime = time;
        }
    })
}

export function playVideos(parentRef) {
    if (!parentRef.current) return

    [...parentRef.current.children].forEach(video => {
        if (document.contains(video) && video.tagName === "VIDEO") {
            resume(video)
        }
    })
}