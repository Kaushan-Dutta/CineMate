import React,{useState,useCallback,useRef,  forwardRef } from 'react'
import { ImCross } from 'react-icons/im';
import CreateImg from '../../assets/create.png';
import CreateContent from '../../api/User/CreateContent';
import { RiGalleryFill } from 'react-icons/ri';
import {useDropzone} from 'react-dropzone';
import { ReactMediaRecorder,useReactMediaRecorder } from "react-media-recorder-2";
import Webcam from 'react-webcam';
import { FaDotCircle } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';


const Create = () => {
  const [popup,setPopup]=useState(false);
  const {createList,content,setContent,uploadContent} =CreateContent();
  const [recorder,setRecoder]=useState(false);

  const onDrop=useCallback(async(acceptedFiles)=>{
    console.log(acceptedFiles[0]);
    setContent(acceptedFiles[0]);
  },[content])
  
  useCallback(()=>{
    console.log("decdvvrv",content);
  },[content])

  const {getRootProps, getInputProps, isDragActive} = useDropzone(
    {onDrop,type:'video/mp4'});

    function VideoRecorder() {
      const webcamRef = React.useRef(null);
      const { status, startRecording, stopRecording, mediaBlobUrl } =
      useReactMediaRecorder({ video: true });
      
      return (
        <div className='top-0 left-0 w-screen h-screen bg-zinc-800 bg-opacity-70 fixed z-30 primary-container  font-inter'>
         <div className='flx-col gap-10'>
            <div className='flx-row justify-end'>
                <button className=' text-5xl flx-row justify-end text-light' onClick={()=>{setRecoder(false)}}><ImCross/></button>
            </div>
            <div className='flx-row justify-around  flex-wrap md:space-x-10 '>
                <div className='flx-col'>
                  <Webcam
                      audio={false}
                      ref={webcamRef}
                      width="600px"
                      height="300px"
                      screenshotFormat="image/jpeg"
                  />
                  <div className='flx-row justify-center space-x-5 my-4'>
                      <button onClick={startRecording} className={`text-5xl hover:text-light ${status=='recording'?'text-light':''}`}><FaDotCircle/></button>
                      <button onClick={stopRecording}  className='text-5xl hover:text-light'><AiFillPlayCircle/></button>
                  </div>

                </div>
                {mediaBlobUrl &&
                  <div className='flx-col realative -translate-y-1  gap-5'>
                        <video src={mediaBlobUrl} controls autoPlay width="600px"
                        height="300px" />
                <button className='mx-auto primary-btn-sqr w-[200px] text-center text-lg ' onClick={()=>setRecoder(true)}><b>Record</b></button>
                  </div>}
                
              </div>
          </div>
        </div>
      )

    }
    
  const Btn=()=>(
    <div className='fixed z-10 bottom-5 right-5 font-inter text-lg'>
      <button className='primary-btn w-[150px] rounded-full  flx-row' onClick={()=>{setPopup(true)}}>
  
          <img src={CreateImg} className='w-[28px]'/>&nbsp;&nbsp;<b>Create</b>
  
      </button>
    </div>
  )

  if(!popup) return <Btn/>
  if(recorder) return <VideoRecorder/>

  return (
    <div className='popup-window primary-container font-inter'>
      <div className='md:w-1/2 w-full rounded-md p-5 bg-light font-inter flx-col gap-5'>
        <div className='flx-row justify-end text-theme'>
          <button onClick={()=>setPopup(false)}><ImCross/></button>
        </div>
        <div className='text-center w-full  flx-col gap-5 justify-center'>
            <div className='border-4 border-dotted border-black p-5 mx-auto rounded-lg md:w-1/2 w-full' {...getRootProps()}>
               <input {...getInputProps()} />
               <p className='text-5xl text-primary flx-row justify-center'><RiGalleryFill/></p>
               <p className='text-lg font-mono'><b>{content?.name?content.name:'Upload Video mp4/mp3'}</b></p>
            </div>
            <p>OR</p>
            <div className='mx-auto'>
                <button className='primary-btn-sqr w-[200px] text-center text-lg ' onClick={()=>setRecoder(true)}><b>Record</b></button>
            </div>
        </div>
        <hr className='bg-black  border-black '/>
        <div className='px-10 '>
            <form className='flx-col gap-2 ' onSubmit={uploadContent}>
              {createList.map((obj,index)=>(
                <>
                {
                  obj.type=='option'?
                  <div className='text-sm' key={index}>
                    <p><b>{obj.label}:</b></p>
                    <select id={obj.id} className='p-2 rounded-md md:w-1/3 w-full'>
                        {obj.subOption.map((item)=>(
                          <option value={item.name}>{item.name}</option>
                        ))}
                    </select>
                  </div>:
                  <div key={index} className='text-sm'>
                      <p><b>{obj.label}:</b></p>
                      <input {...obj} className='p-2 rounded-lg md:w-1/2 w-full'/>
                  </div>
                }
                </>
              ))}
              <br/>
              <button type='submit' className='primary-btn w-[200px] mx-auto'>Upload</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Create