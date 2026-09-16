class PanelElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("panel");
  }
}

customElements.define("p-panel", PanelElement);
document.addEventListener("keypress", () => {
  const currentActivePanel = document.querySelector('.active.panel')
  const newActiveTab = currentActivePanel.nextElementSibling;
  if (!newActiveTab) {
    // put some stuff here
  }
  const activePanels = document.querySelectorAll(".active.panel");

  activePanels.forEach((activePanel) => {
    activePanel.classList.remove("active");
  });

  newActiveTab.classList.add("active");
});
