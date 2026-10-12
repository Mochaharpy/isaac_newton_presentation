class VideoTransitionElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const videoSource = this.getAttribute('src');
    const video = document.createElement('video');
    video.src = videoSource;
  }
}

customElements.define("video-transition", VideoTransitionElement);