import React from 'react';
import { MdWidgets } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate=useNavigate();

    const array=[1,2,3,4,5]
    return (
        
        
            
            <div className='  primary-container grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                {
                    array.map((obj,id)=>(
                        <div key={id} className='m-5  cursor-pointer overflow-hidden transition-all ease-out duration-300' onClick={()=>navigate(`${id}`)}>
                            <video autoPlay muted loop className='w-[400px] hover:scale-105' >
                            <source src="https://cloud.appwrite.io/v1/storage/buckets/652189848a2604d0b671/files/65230921b217dac34a18/view?project=652188b1172fe1759f45&mode=admin" type="video/mp4" />
                            </video>
                            <p className='relative -translate-y-10 translate-x-28 text-white text-xl'><b>Video Management</b></p>                    
                        </div>
                    ))
                }
            </div>
                
        
        
    )
}
export default Gallery