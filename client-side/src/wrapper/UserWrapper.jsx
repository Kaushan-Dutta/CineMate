import React from 'react'
import {Outlet} from 'react-router-dom'

const UserWrapper = () => {
  return (
    <div className=' large-container flx-col gap-10 '>
            
            <Outlet/>
    </div>
  )
}

export default UserWrapper