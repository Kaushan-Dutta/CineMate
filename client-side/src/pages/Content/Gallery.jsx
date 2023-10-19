import React,{useEffect} from 'react';
import { MdWidgets } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import CreateContent from '../../api/Content/index';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const navigate=useNavigate();
    
    const {gallery}=CreateContent();
   
    return (
        
        
            
            <div className='  primary-container grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                {
                    gallery?.data?.getContents?.map((obj,id)=>{
                        console.log(obj);
                        return(
                        <div key={id} className='m-5   overflow-hidden ' >
                            <video autoPlay muted loop className='w-[400px] ' >
                                <source src={obj.url} type="video/mp4" />
                            </video>
                            <p className='relative -translate-y-10 px-5  text-white text-md hover:text-shade1' onClick={()=>{navigate(obj._id)}}><b>{obj.type}</b></p>                    
                        </div>)
                })
                }
            </div>
                
        
        
    )
}
export default Gallery