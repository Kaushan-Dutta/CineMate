import React from 'react';

const Plan=()=>{
    return (
        <div className='m-5 p-10 border border-primary rounded-md hover:shadow-md w-[350px] flx-col gap-5 bg-[#ffff] text-[#424242]'>
            <div className='text-center'>
                <p className='text-4xl '><b>Basic Plan</b></p>
            </div>
            <div className='flx-row justify-between my-3'>
                    <div className=''>
                        <p className='text-2xl'><b>10 Million</b></p>
                        <p className='text-shade2'>API Credits</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl'><b>$20</b></p>
                        <p className='text-shade1'>monthly</p>
                    </div>
            </div>
            <div className=''>
                <p className='text-black'><b>Discover</b></p>
            </div>
            <div className=''>
                <p>✔&nbsp;&nbsp;API Credits</p>
                <p>✔&nbsp;&nbsp;Caht Support</p>
                <p>✔&nbsp;&nbsp;3 downloads per day</p>
                <p>✔&nbsp;&nbsp;Share Video</p>
                <p>✔&nbsp;&nbsp;Community Support</p>
                <p>✔&nbsp;&nbsp;1 Access Token</p>
            </div>
            <br/>
            <button className='primary-btn'>Select Plan</button>
        </div>
    )
}

const Pricing=()=>{
    const array=[1,2,3];
    return(
        <div className='base-container text-black flx-row justify-center'>
            <div className='base-container flx-col gap-20'>
                <div className='w-full md:w-[60%] mx-auto text-center flx-col gap-5'>
                <p className='text-4xl '><b>Our <span className='text-shade2'>Subscription plans</span></b></p>
                <p className='text-md '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magni deleniti neque omnis impedit, repudiandae commodi optio cumque</p>
                </div>
                <div className='flx-row flex-wrap justify-center'>
                    {array.map(()=>(
                            <Plan/>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
export default Pricing