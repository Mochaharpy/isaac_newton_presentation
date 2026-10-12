class VideoTransitionElement extends HTMLElement {
  /**@type {HTMLVideoElement} */
  video;

  #clipAbortController;

  constructor() {
    super();
  }

  connectedCallback() {
    const videoSource = this.getAttribute("src");
    this.video = document.createElement("video");
    this.video.setAttribute("playsinline", "");
    this.video.src = videoSource;
    this.appendChild(this.video);
  }

  playClip(endTime) {
    if (this.#clipAbortController) {
      this.#clipAbortController.abort();
    }

    this.#clipAbortController = new AbortController();
    const { signal } = this.#clipAbortController;
    this.video.play();

    this.video.addEventListener(
      "timeupdate",
      () => {
        if (this.video.currentTime >= endTime) {
          this.video.pause();

          this.#clipAbortController.abort();
          this.#clipAbortController = null;
        }
      },
      { signal },
    );
  }

  disconnectedCallback() {
    if (this.#clipAbortController) {
      this.#clipAbortController.abort();
    }
  }
}

customElements.define("video-transition", VideoTransitionElement);
