export function fillCanvas(stream: any) {
  const canvasFirstElement = document.getElementById(
    "c1"
  ) as HTMLCanvasElement;

  if (!canvasFirstElement) {
    throw new Error("#c1 element not found");
  }

  const canvasFirstElementContext =
    canvasFirstElement.getContext("2d")!;

  if (!canvasFirstElementContext) {
    throw new Error("context cannot be added to the second canvas");
  }

  const gradient =
    canvasFirstElementContext.drawImage(stream, 0, 0)

}
