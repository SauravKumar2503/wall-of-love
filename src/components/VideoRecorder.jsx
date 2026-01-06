import { useRef, useState } from "react";

function VideoRecorder({ onSave }) {
  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  const chunks = useRef([]);
  const [recording, setRecording] = useState(false);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    recorderRef.current = new MediaRecorder(stream);
    recorderRef.current.start();
    recorderRef.current.ondataavailable = (e) => chunks.current.push(e.data);
    setRecording(true);
  };

  const stop = () => {
    recorderRef.current.stop();
    recorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "video/webm" });
      onSave(URL.createObjectURL(blob));
      chunks.current = [];
    };
    setRecording(false);
  };

  return (
    <>
      <video ref={videoRef} autoPlay muted />
      {!recording ? (
        <button onClick={start}>Start Recording</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}
    </>
  );
}

export default VideoRecorder;
