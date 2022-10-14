export function delayCompChoice(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomizeDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
