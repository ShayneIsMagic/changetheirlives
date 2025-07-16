const ameeVideo = document.querySelector(".amee-video-container > video");
const ameeImage = document.querySelector(".amee-video-container");
const playButton = document.querySelector(".amee-video-container > i");

ameeImage.addEventListener("click", (e) => {
  if (e.target !== ameeVideo) {
    ameeVideo.classList.remove("hide");
    playButton.classList.add("hide");
    ameeVideo.play();
  }
});
