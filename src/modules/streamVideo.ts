import { drawVideo } from "./drawVideo";

export async function runMediaStream() {
  const videoElement = document.getElementById("v1") as HTMLVideoElement;

  if (!videoElement) {
    throw new Error("#v1 element not found");
  }

  if ("getUserMedia" in navigator.mediaDevices) {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoElement.srcObject = stream;
      videoElement.play();
      videoElement.addEventListener(
        "play",
        () => {
          drawVideo();
        },
        true
      );
    } catch (error) {
      console.log("cant stream video on browser", { error });
    }
  } else {
    console.log("error in getUserMedia");
  }
}
