import React from 'react'
import { Categories } from '../router.config'
import { Link } from 'react-router-dom'
import { PiMagnifyingGlassLight } from 'react-icons/pi';



const SearchBar = () => {
  return (
    <div className='w-full px-10  flx-row justify-center bg-light font-inter h-[60px] text-black rounded-md'>
        <div className='w-1/5  h-full'>
            <select className="w-full h-full px-2 outline-none bg-light rounded-md" id="">
            {
                Categories.map((item,index)=>(
                    <option value={item.name} key={index} className='flx-row'>{item.name}</option>
                ))
            }

            </select>
        </div>
        <div className='w-4/5 h-full flx-row  bg-light rounded-md'>
            <div className='w-full'>
                <input type="text" placeholder='Search for the content' className='bg-light w-full outline-none px-5 py-2'/>
            </div>
            <div className='w-[50px] flx-row justify-center '>
                <PiMagnifyingGlassLight className='text-black text-xl'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar