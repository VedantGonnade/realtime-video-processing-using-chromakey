const canvasSecondElement = document.getElementById("c2") as HTMLCanvasElement;

if (!canvasSecondElement) {
  throw new Error("#c1 element not found");
}

const canvasSecondElementContext: CanvasRenderingContext2D =
  canvasSecondElement.getContext("2d")!;

if (!canvasSecondElementContext) {
  throw new Error("context cannot be added to the second canvas");
}

const gradient: CanvasGradient =
  canvasSecondElementContext.createLinearGradient(0, 0, 250, 50);

gradient.addColorStop(0, "#4741F0");
gradient.addColorStop(1, "#A647B9");

canvasSecondElementContext.fillStyle = gradient;
canvasSecondElementContext.fillRect(0, 0, canvasSecondElement.width, canvasSecondElement.height)
