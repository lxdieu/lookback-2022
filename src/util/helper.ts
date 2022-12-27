export const loadImage = (src) =>
new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve(img.clientWidth);
  img.onerror = reject;
  img.src = src;
});