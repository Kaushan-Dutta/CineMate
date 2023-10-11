import React from 'react'
import { MutatingDots  } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-screen h-screen flx-row justify-center -translate-y-16'>
    <MutatingDots 
        height="110"
        width="100"
        color="#8039DF"
        secondaryColor= '#8039DF'
        radius='15.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    /></div>
  )
}

export default Loader