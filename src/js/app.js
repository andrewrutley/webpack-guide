import "./../sass/app.sass";
import imgSrc from "./../img/cube.png";

const img = document.createElement("img");
img.src = imgSrc;
img.width = 64;
document.body.appendChild(img);

const div = document.createElement("div");
div.classList = "cube";
document.body.appendChild(div);

const button = document.createElement("button");
button.textContent = "Lazy load shapes component";
document.body.appendChild(button);

button.onclick = () => {
  import(/* webpackChunkName: "component--shapes" */ "./component--shapes").then(
    shapes => {
      shapes.init();
    }
  );
};
