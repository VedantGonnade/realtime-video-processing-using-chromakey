import { runCanvas } from "./modules/finalCanvas";
import { runMediaStream } from "./modules/streamVideo";
import { drawVideo } from "./modules/drawVideo";

runCanvas();
await runMediaStream();
drawVideo();
