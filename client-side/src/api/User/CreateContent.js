import React,{useState,useCallback} from 'react'
import { Categories } from '../../router.config';

const CreateContent = () => {
  const [content,setContent]=useState('');
  const [type,setType]=useState('');
  const [description,setDescription]=useState('');
  const [video,setVideo]=useState('');

  const createList=[

    {
        label:'Type',
        type:'option',
        id:'category',
        subOption:Categories,
        value:type,
        onChange:(e)=>{
            setType(e.target.value)
        }
    },
    {
        label:'Description',
        type:'text',
        value:description,
        placeholder:'Enter the description',
        onChange:(e)=>{
            setDescription(e.target.value)
        }
    },
  ]
  return (
    {createList,content,setContent}
  )
}

export default CreateContent
 /*   const WebcamCapture = forwardRef((props, ref) => {
      const webcamRef = useRef(null);
    
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: 'user',
      };
    
      return (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
          />
        </div>
      );
    });
    const VideoRecorder = () => {
      const webcamRef = useRef(null);
      const [recording, setRecording] = useState(false);
      const [mediaBlob, setMediaBlob] = useState(null);
      let mediaRecorder;
    
      const startRecording = () => {
        if (webcamRef.current) {
          const stream = webcamRef.current.stream;
          mediaRecorder = new MediaRecorder(stream);
    
          const recordedChunks = [];
    
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              recordedChunks.push(event.data);
            }
          };
    
          mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            setMediaBlob(blob);
            mediaRecorder = null;
            setRecording(false);
          };
    
          mediaRecorder.start();
          setRecording(true);
        }
      };
    
      const stopRecording = () => {
        if (mediaRecorder) {
          mediaRecorder.stop();
        }
      };
    
      return (
        <div>
          <WebcamCapture ref={webcamRef}/>
          <div>
            <button onClick={startRecording} disabled={recording}>
              Start Recording
            </button>
            <button onClick={stopRecording} disabled={!recording}>
              Stop Recording
            </button>
          </div>
        </div>
      );
    };
   */  
  /*
  const VideoRecorder = () => (
    
      <div className='popup-window primary-container font-inter'>
        <WebcamCapture />
        <div>
          <button onClick={startRecording} disabled={status === 'recording'}>
            Start Recording
          </button>
          <button onClick={stopRecording} disabled={status !== 'recording'}>
            Stop Recording
          </button>
        </div>
        {mediaBlob && <video src={mediaBlob.blobURL} controls autoPlay />}
      </div>
    );
 */
