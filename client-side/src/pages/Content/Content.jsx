import React from 'react'
import { BsShare } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import { MdOutlineCollections } from 'react-icons/md';
import { HiOutlineHeart } from 'react-icons/hi';

const Content = () => {
    return (
        <div className='base-container'>
            <div className='primary-container flx-col  md:flex-row items-center justify-between flex-wrap '>
                <div className='flx-col gap-5 md:w-1/2 '>
                    <video controls className='w-[600px] ' >
                        <source src="https://cloud.appwrite.io/v1/storage/buckets/652189848a2604d0b671/files/65230921b217dac34a18/view?project=652188b1172fe1759f45&mode=admin" type="video/mp4" />
                    </video>
                    <div className='flx-row justify-center space-x-10 text-2xl  text-[#424242] m-5'>

                        <BsDownload className='cursor-pointer hover:text-black' />

                        <MdOutlineCollections className='cursor-pointer hover:text-black' />
                        <BsShare className='cursor-pointer hover:text-black' />

                        <HiOutlineHeart className='cursor-pointer hover:text-black' />

                    </div>
                </div>
                <div className='text-center md:w-1/2 flx-col gap-5 '>
                    <p className='text-2xl md:w-4/5 mx-auto'><b>Bird's eye view of colorful orange sunrise on valley with trees covered with fog</b></p>
                    <p>by&nbsp;<a href="" className='text-shade2'>Kaushan5409</a></p>
                    <button className='mx-auto flx-row justify-center w-[250px] p-3 text-lg rounded-lg text-white bg-shade1'><BsDownload/>&nbsp;&nbsp;<b>Download</b></button>
                </div>
            </div>
        </div>
    )
}

export default Content