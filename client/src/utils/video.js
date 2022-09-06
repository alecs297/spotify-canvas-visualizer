function isValidVideo(element) {
    return document.contains(element) && element.tagName === "VIDEO"
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