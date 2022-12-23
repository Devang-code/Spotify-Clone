console.log("Spotify");

let songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let playButton = document.getElementById("playButton");
let progressBar = document.getElementById("progressBar");
let songItem = Array.from(document.getElementsByClassName("songItems"));
let prev = document.getElementById("prev")
let next = document.getElementById("next")


const songs = [
    { song: "Keshariya", file: "songs/1.mp3", cover: "cover/cover1.jpg" },
    { song: "Rata Lambiya", file: "songs/2.mp3", cover: "cover/cover2.jpg" }
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
});

playButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        playButton.classList.remove("fa-circle-play")
        playButton.classList.add("fa-circle-pause")
    } else {
        audioElement.pause()
        playButton.classList.remove("fa-circle-pause")
        playButton.classList.add("fa-circle-play")
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100
})


songItem.forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id)
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.play()
        playButton.classList.remove("fa-circle-play")
        playButton.classList.add("fa-circle-pause")
    })
})

prev.addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 2
    } else {
        songIndex -= 1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.play()
    playButton.classList.remove("fa-circle-play")
    playButton.classList.add("fa-circle-pause")
})

next.addEventListener('click', () => {
    if (songIndex >= 2) {
        songIndex = 1
    } else {
        songIndex += 1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.play()
    playButton.classList.remove("fa-circle-play")
    playButton.classList.add("fa-circle-pause")
})
