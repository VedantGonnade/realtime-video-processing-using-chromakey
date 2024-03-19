export async function runMediaStream() {
  const videoElement = document.getElementById("v1") as HTMLVideoElement;

  if (!videoElement) {
    throw new Error("#v1 element not found");
  }
  console.log(videoElement)

  if ("getUserMedia" in navigator.mediaDevices) {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: true
    })
    videoElement.srcObject = stream;
  }
  else {
    console.log("error")
  }
}
