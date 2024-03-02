const canvasSecondElement = document.getElementById("c2") as HTMLCanvasElement;

if (!canvasSecondElement) {
  throw new Error("#c1 element not found");
}

const canvasSecondElementContext = canvasSecondElement.getContext("2d")!;

if (!canvasSecondElementContext) {
  throw new Error("context cannot be added to the second canvas");
}

canvasSecondElementContext.fillStyle = "rgb(0, 155, 0)";
canvasSecondElementContext.fillRect(0, 0, canvasSecondElement.width, canvasSecondElement.height)
