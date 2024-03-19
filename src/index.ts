import { runCanvas } from "./modules/canvasRight";
import { runMediaStream } from "./modules/mediaStream";
import { fillCanvas } from "./modules/canvasLeft";

runCanvas();
const stream = await runMediaStream();
fillCanvas(stream);

