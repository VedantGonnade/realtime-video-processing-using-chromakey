export async function runMediaStream() {
  const videoElement = document.getElementById("v1") as HTMLVideoElement;

  if (!videoElement) {
    throw new Error("#v1 element not found");
  }

  if (
    "enumerateDevices" in navigator &&
    "getUserMedia" in navigator.mediaDevices
  ) {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
    });

    videoElement.srcObject = stream;

  } else {
    throw new Error("mediaDevice Api error", {
      cause: "getUserMedia Api call is not present",
    });
  }
}
