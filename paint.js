let box = document.querySelector(".box");
width = box.offsetWidth;
height = box.offsetHeight;

count = (width * height) / (20 * 20);
console.log(count);
console.log(width, height);
for (let i = 0; i <= count; i++) {
  box.insertAdjacentHTML("afterbegin", `<div class="pixel"></div>`);
}
let pixelsMass = document.querySelectorAll(".pixel");

let isDraw = false;

box.addEventListener("mousedown", () => {
  isDraw = true;
});
box.addEventListener("mouseup", () => {
  isDraw = false;
});

pixelsMass.forEach((pixel) => {
  pixel.addEventListener("mousemove", () => {
    if (isDraw) {
      pixel.style.background = "black";
    }
  });
});