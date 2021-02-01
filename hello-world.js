// my-first-snowpack/hello-world.js
export function helloWorld() {
  console.log("Hello World!");
}

// I didn't have time to make the whole circle shit on this and no human would be able to do it all in 20
export function drawCircs() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
