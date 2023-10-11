import React,{useState,useEffect} from 'react'
import Loader from '../../components/Loader';
import SideBar from '../../components/SideBar';
import SearchBar from '../../components/SearchBar';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaBeer } from 'react-icons/fa';
import Video from '../../assets/video.png'
import { Link } from 'react-router-dom';
import Asset from '../../assest';

const Landing = () => {
  
  const array=[1,2,3,4]
  return (
    <>
      <div className='font-inter'>
        <section className='h-[80vh] banner'>
        <video autoPlay muted loop>
        <source src="https://cloud.appwrite.io/v1/storage/buckets/652189848a2604d0b671/files/65230921b217dac34a18/view?project=652188b1172fe1759f45&mode=admin" type="video/mp4" />
        </video>

          <div className=' w-full h-full  primary-container text-white flx-row justify-center '>
              <div className=' md:w-3/5 w-[80%] text-center flx-col gap-5 z-10'>
                  <p className='text-5xl '><b>Free stock video footage</b></p>
                  <p className='text-xl'>Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</p>
                  <SearchBar/>
              </div>
              
          </div>
        </section>
        <section className='base-container flx-col gap-5'>
            <p className='text-3xl text-[#424242] '>UNLOCK YOUR INNER <span className='text-shade2'>CREATOR</span></p>
            <p className='text-xl text-[#777777]'>Get the inspiration you need with these collections carefully selected to boost your project’s engagement.</p>
            <div className='flx-row justify-between overflow-hidden overflow-x-auto space-x-10 my-10'>
              {array.map((obj,id)=>(
                <div key={id} className='w-[300px] h-[370px] rounded-xl flex-shrink-0 cursor-pointer overflow-hidden transition-all ease-out duration-300 '  >
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/652189848a2604d0b671/files/652406637d52e0848bc9/view?project=652188b1172fe1759f45&mode=admin " className='  w-full h-full hover:scale-105'/>
                    <p className='relative -translate-y-10 translate-x-28 text-white '><b>Nature</b></p>                    
                </div>
              ))}
            </div>
        </section>
        <section className='primary-container flx-col gap-5 text-center'>
            <p className='text-3xl text-[#424242]'>THE <span className='text-primary'>SMARTEST CHOICE</span> FOR CREATIVES LIKE YOU</p>
            <p className='text-xl text-[#777777]'>Whether you’re looking for designs or photographs, you’ll find the perfect asset on Freepik.</p>
            <div className='flx-row justify-between flex-wrap my-10'>
              {array.map((item,index)=>(
                <div key={index} className='bg-light rounded-lg w-[400px] h-[100px] flx-row justify-between space-x-5 px-6 hover:shadow-lg m-5'>
                  <img src={Video}/>
                  <p className='text-primary text-md '><b>Get a live Demo</b></p>
                  <Link to=""><BsArrowRightCircle className='text-3xl text-[#424242]'/></Link>
                </div>
              ))}
            </div>
        </section> 
        <section className='primary-container flx-col gap-5'>
            <p className='text-3xl text-[#424242] '>UNLOCK YOUR INNER <span className='text-shade2'>CREATOR</span></p>
            <p className='text-xl text-[#777777]'>Get the inspiration you need with these collections carefully selected to boost your project’s engagement.</p>
                <div className='grid grid-cols-2 md:grid-cols-4  gap-5 my-10'>
                    <video autoPlay muted loop className='col-span-1 row-span-2'><source src={Asset.video1} type="video/mp4" /></video>
                    <video autoPlay muted loop className='col-span-2 '><source src={Asset.video3} type="video/mp4" /></video>
                    <video autoPlay muted loop className='col-span-1 row-span-2'><source src={Asset.video2} type="video/mp4" /></video>
                    <video autoPlay muted loop className='col-span-1'><source src={Asset.banner} type="video/mp4" /></video>
                    <video autoPlay muted loop className='col-span-1'><source src={Asset.banner} type="video/mp4" /></video>

                </div>
        </section>
        <section className='base-container '>
            <div className=' bg-light rounded-3xl flx-row flex-wrap justify-between md:p-20 p-5'>
                <div className='md:w-full lg:w-2/5 text-left flx-col gap-5 my-5'>
                  <p className='text-5xl text-theme'>Join CineMate’s <span className='text-shade1'>creator</span> community</p>
                  <p className='text-lg'>Behind every stock image, there’s a creative mind. You can also create content and sell it on CineMate</p>
                  <button className='primary-btn w-[200px] test-white '>Collection</button>
                </div>
                <div className='lg:w-[500px] md:w-full my-5'>
                  <img src="https://www.videvo.net/images/home/home-1.jpg " className='w-full'/>
                </div>
            </div>
        </section>
        <section className='base-container '>
            <div className=' bg-primary rounded-3xl flx-col justify-center gap-5 text-center md:p-20 p-5'>
            <p className='text-5xl text-extra_light'>Sign Up our<span className='text-shade2'> Newsletter</span></p>
            <p className='text-xl text-white w-[70%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium quos temporibus adipisci mollitia veritatis iure!</p>
            <form className='flx-row justify-between bg-light my-10 h-[70px] p-5 rounded-full mx-auto w-[90%] md:w-[50%] '>
              <input type="text" placeholder='Sign Up our newsletter' className=' px-5 py-2 w-full bg-light'/><button className="primary-btn w-[150px]" type="submit">Submit</button>
            </form>
            </div>
        </section>
        
      </div>
    </>
  )
}

export default Landing
/*     <div className='h-screen  flx-row'>
<SearchBar/>
    </div> */