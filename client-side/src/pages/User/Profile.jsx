import React,{useState,useEffect} from 'react'
import FetchData from '../../api/User/FetchProfile'

const Profile = () => {
  const [userProfile,setUserProfile]=useState();
  const {fetchProfile}=FetchData();
  const array=[1,2,3,4,5]
  useEffect(()=>{
    const loadContents=async()=>{
        const res=await fetchProfile(window.location.pathname.split('/')[1]);
        console.log("///////////",res.getUser);
        setUserProfile(res.getUser);
    }
    loadContents();
  },[])
  return (
    <div className='large-container flx-col gap-10 '>
            <div className="">
                <p className="text-lg text-primary tracking-widest"><b>PROFILE/</b></p>
                <p className='text-2xl text-slate-600'>{userProfile?.username}</p>
            </div>
            <div className='flx-col md:flex-row items-center md:space-x-10 px-20 py-5 bg-light rounded-xl hover:border-2 hover:border-primary'>
                <img src={userProfile?.profile} alt='' className='w-[120px] h-[120px] border-4 border-shade2 bg-white rounded-full bg-cover' />
                <div className='text-center md:text-left flx-col gap-2'>
                    <li className='text-2xl text-primary tracking-widest'><b>{userProfile?.username}</b></li>
                    <li className='text-lg text-[#000]'>{userProfile?.email}</li>
                    <li className=''>Created:{userProfile?.createdContent.length}</li>
                </div>
            </div>
            <div className=' text-center'>
                <h1 className='my-10 text-2xl text-primary tracking-widest'><b>Created Content</b></h1>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1'>
                    {
                        userProfile?.createdContent?.map((obj,id)=>(
                            <div key={id} className='m-5  cursor-pointer overflow-hidden transition-all ease-out duration-300' onClick={()=>navigate(`${id}`)}>
                                <video autoPlay muted loop className='w-[400px] hover:scale-105' >
                                <source src="https://cloud.appwrite.io/v1/storage/buckets/652189848a2604d0b671/files/65230921b217dac34a18/view?project=652188b1172fe1759f45&mode=admin" type="video/mp4" />
                                </video>
                                <p className='relative -translate-y-10 text-white text-xl'><b>Video Management</b></p>                    
                            </div>
                        ))
                    }
                </div>
            </div>
        
    </div>
  )
}

export default Profile