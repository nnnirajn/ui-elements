import { generateConfetti } from "./vanillaConfetti.min.js";

document.querySelector("button").addEventListener("click", () => {
  generateConfetti(
    {
      colorsArray: [
        "rgba(255, 180, 185, 1)",
        "rgba(255, 220, 185, 1)",
        "rgba(255, 255, 185, 1)",
        "rgba(185, 255, 200, 1)",
        "rgba(185, 225, 255, 1)",
        "rgba(215, 185, 255, 1)",
      ],
      velocity: 0.025,
      quantity: 750,
      minSize: 4,
      maxSize: 12,
      minOpacity: 0.75,
      maxOpacity: 1,
      infiniteLoop: false,
    },
    "vanillaConfettiCanvas"
  );
});



// const confettiConfig = {
//   // options here
// };
// const canvasId = "vanillaConfettiCanvas";
// // Trigger the confetti!
// // Could be inside an event listener (e.g., button click)
// document.getElementById('celebrateButton').addEventListener('click', () => {
//   generateConfetti(confettiConfig, canvasId); // Pass canvasId if not default
// });
// // Or just run it immediately on load
// // generateConfetti(confettiConfig);

// colorsArray (Array): Strings representing CSS colors (hex, rgb, rgba). A random color is picked for each particle.
// velocity (Number): Affects the downward acceleration (gravity). Higher means faster acceleration.
// quantity (Number): Total number of confetti pieces generated. Watch performance here – thousands can slow things down.
// minSize / maxSize (Number): Pixel range for the size of each piece.
// minOpacity / maxOpacity (Number): 0-1 range controlling transparency. Combined with a subtle random factor during animation.
// infiniteLoop (Boolean): If true, confetti resets to the top when it falls off the bottom. If false (default), it stops after the initial batch falls.