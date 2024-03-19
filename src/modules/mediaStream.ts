export async function runMediaStream(): Promise<MediaStream | undefined> {
  const videoElement = document.getElementById("v1") as HTMLVideoElement;

  if (!videoElement) {
    throw new Error("#v1 element not found");
  }

  if ("getUserMedia" in navigator.mediaDevices) {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: true
    })
    videoElement.srcObject = stream;
    return stream
  }
  else {
    console.log("error")
  }
}
