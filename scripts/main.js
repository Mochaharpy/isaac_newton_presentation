const timeline = [12, 20, 0, 5, 10, 20]; // "0" means to go to the next video

let activeVideo = document.querySelector(".active");
let currentStep = 0;
let currentVideo = 0;

document.addEventListener("click", () => {
  if (currentStep > timeline.length) {
    console.error("no more timeline");
    return;
  }

  const nextTimestamp = timeline[currentStep];
  currentStep++;

  if (nextTimestamp === 0) {
    if (activeVideo) activeVideo.classList.remove("active");

    currentVideo++;
    activeVideo = document.querySelector(
      `video-transition[order="${currentVideo}"]`,
    );

    if (activeVideo) {
      activeVideo.classList.add("active");
      const actualTimestep = timeline[currentStep];

      if (actualTimestep && actualTimestep !== 0) {
        currentStep ++;
        activeVideo.playClip(actualTimestep);
      }
    }
  } else {
    activeVideo.playClip(nextTimestamp)
  }
});
