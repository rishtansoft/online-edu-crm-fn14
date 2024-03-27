import './App.css'
import { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

function App() {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [stream, setStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const videoRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const recorder = new RecordRTC(stream, {
        type: 'video',
        mimeType: 'video/webm',
      });
      recorder.startRecording();
      setStream(stream);
      setRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error('Error accessing screen:', error);
    }
  };

  function pauseRecording() {
    if (recording && !paused) {
      recorder.pauseRecording();
      setPaused(true);
    } else if (recording && paused) {
      recorder.resumeRecording();
      setPaused(false);
    }
  };

  function stopRecording() {
    if (recording) {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = url;
        a.download = 'recorded-video.mp4';
        a.click();
        window.URL.revokeObjectURL(url);
        setRecording(false);
        setPaused(false);
        setStream(null);
        setRecorder(null);
      });
    }
  };

  return (
    <>
      <div className='main'>
        <div className="card"></div>
        <div className="buttons">
          <button onClick={startRecording} disabled={recording}>
            Start Recording
          </button>
          <button onClick={pauseRecording} disabled={!recording}>
            {paused ? 'Resume Recording' : 'Pause Recording'}
          </button>
          <button onClick={stopRecording} disabled={!recording}>
            Finish Recording
          </button>
        </div>
        {recording && (
          <div>
            <video ref={videoRef} controls autoPlay style={{ width: '60%', maxHeight: '400px' }} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
