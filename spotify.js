const musicsData = [
  {
    name: "Atirgullar ochdi Chiroy",
    rasmi: "./img/bahor.jpg",
    singer: "Jasur Jabborov",
    music: "./music/bahor.mp3",
  },
  {
    name: "Baby shark",
    rasmi: "./img/baby.jpg",
    singer: "English Music",
    music: "./music/Baby-Shark.m4a",
  },
  {
    name: "English song",
    rasmi: "./img/music.jpg",
    singer: "Pop Music",
    music: "./music/music 1.m4a",
  },
  {
    name: "Phonk",
    rasmi: "./img/phonk.png",
    singer: "Kim aytgan",
    music: "./music/phonk.mp3",
  },
];
let curentIndex = 0;

const audio = document.getElementById("audio");
const nextBtn = document.getElementById("nextButton");
const prevBtn = document.getElementById("previousButton");
const playBtn = document.getElementById("playButton");
const pauseBtn = document.getElementById("pauseButton");
const rasm = document.getElementById("albumCover");
const singer = document.getElementById("artistName");
const nomi = document.getElementById("songTitle");
const progress = document.getElementById("audio");
const select = document.getElementById("musicSelector");





function getMusic() {
  select.innerHTML = "";
  musicsData.map((m, i) => {
    const option = document.createElement("option");
    option.textContent = m.name + " : " + m.singer;
    option.value = m.music;
    select.appendChild(option);
  });
  audio.src = musicsData[curentIndex].music;
}

getMusic();


function changeMusic() {
  rasm.src = musicsData[curentIndex].rasmi;
  nomi.textContent = musicsData[curentIndex].name;
  singer.textContent = musicsData[curentIndex].singer;
  audio.src = musicsData[curentIndex].music;
}




select.addEventListener("change", (e) => {
  curentIndex = select.selectedIndex;
  changeMusic();
});


playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

nextBtn.addEventListener("click", () => {
  curentIndex = (curentIndex + 1) % musicsData.length;
  changeMusic();
});

prevBtn.addEventListener("click", () => {
  curentIndex = (curentIndex - 1 + musicsData.length) % musicsData.length;
  changeMusic();
});


audio.addEventListener('timeupdate', () => {
  const foiz = (audio.currentTime / audio.duration) * 100;
  progress.value = foiz;
});

audio.addEventListener('loadeddata', () => {
  progress.max = 100;
});

progress.addEventListener('input', (e) => {
  const vaaqti = (e.target.value / 100) * audio.duration;
  audio.currentTime = vaaqti;
});