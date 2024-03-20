export function drawVideo() {
  const canvasFirstElement = document.getElementById("c1") as HTMLCanvasElement;

  if (!canvasFirstElement) {
    throw new Error("#c1 element not found");
  }

  const videoElement = document.getElementById("v1") as HTMLVideoElement;

  const canvasFirstElementContext = canvasFirstElement.getContext("2d")!;

  if (!canvasFirstElementContext) {
    throw new Error("context cannot be added to the second canvas");
  }

  canvasFirstElementContext.drawImage(
    videoElement,
    0,
    0,
    canvasFirstElement.width,
    canvasFirstElement.height
  );
  setTimeout(drawVideo, 10);
}
