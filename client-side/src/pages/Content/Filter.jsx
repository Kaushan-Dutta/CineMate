import React,{useState} from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { TbFilterEdit } from 'react-icons/tb';

const Filter = () => {
    const [filter,getFilter]=useState(false);
    return (
        <div className='flx-row filter -translate-x-[300px] h-screen'>
            <div className='w-[300px] bg-light h-full z-10 py-10 px-5 flx-col gap-5 overflow-y-auto flex-shrink-0'>
                <div className='flx-row text-xl'>
                    <TbFilterEdit className='text-3xl '/>&nbsp;&nbsp;<b className='text-slate-500'>FILTERS</b>
                </div>
                <hr/>
                <div className='flx-col gap-2' id="orientation">
                    <label><b>Orientation</b></label>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Horizonatal</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Vertical</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Square</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Panoramic</p>
                   
                </div>
                <div className='flx-col gap-2' id="License">
                    <label><b>License</b></label>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Free</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Premium</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Gold</p>
                  
                </div>
                <div className='flx-col gap-2' id="Style">
                    <label><b>Style</b></label>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Water Color</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Cartoon</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;3D</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Geometric</p>
                    <p><input type="checkbox"/>&nbsp;&nbsp;Gradient</p>
                  
                </div>

                <div className='flx-col gap-2' id='Sort'>
                    <label>Sort on:</label>
                    <select id="sort" className='p-2 rounded-md '>
                        <option value="date">Date Created</option>
                        <option value="likes">Likes</option>
                        <option value="size">Video Size</option>
                    </select>
                </div>
                <hr/>
                <button className='primary-btn w-full'>Apply Filter</button>
            </div>
            <div className=''>
                <button className='w-[70px] h-[70px] rounded-full justify-end bg-primary text-light text-xl flx-row p-5  -translate-x-7 ' onClick={()=>{
                    if(filter){
                        document.querySelector('.filter').classList.add('-translate-x-[300px]')
                        getFilter(false);
                    }
                    else{
                        document.querySelector('.filter').classList.remove('-translate-x-[300px]')
                        getFilter(true);
                    }
                }}><BiSolidRightArrow/></button>
            </div>
          
        </div>
    )
}
export default Filter