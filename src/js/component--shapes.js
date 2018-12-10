import data from "./data";

export function init() {
  const root = document.createElement("div");
  root.innerHTML = `<p>There are ${data.length} shapes.</p>`;
  document.body.appendChild(root);
}
