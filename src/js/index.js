const oneRem = 16;

addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    handleEvents();
});

function handleEvents() {
    const video = document.getElementById("video");

    video.addEventListener("click", function () {
        handlePlayVideo(video);
    });

    video.addEventListener("timeupdate", handleTimeUpdate);
}

function handleTimeUpdate() {
    const video = document.getElementById("video");
    const time = document.getElementById("line");
    const duration = document.getElementById("duration");

    time.style.width = Math.floor((video.currentTime / video.duration) * (video.width - oneRem)) + "px";
    duration.innerHTML = format(video.currentTime) + " / " + format(video.duration);
}

function handlePlayVideo(video) {
    const playBtn = document.getElementById("play-button");
    const activePlayBtn = document.getElementById("play-button-active");

    if (!activePlayBtn) return playVideo(video, playBtn);

    if (activePlayBtn) return pauseVideo(video, activePlayBtn);
}

function playVideo(video, playBtn) {
    video.muted = false;
    video.play();
    playBtn.id = "play-button-active";
}

function pauseVideo(video, playBtn) {
    video.muted = true;
    video.pause();
    playBtn.id = "play-button";
}

function format(seconds) {
    let minutes = Math.floor(seconds / 60);

    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;

    return minutes + ":" + seconds;
}
