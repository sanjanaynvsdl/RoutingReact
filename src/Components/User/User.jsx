import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
    return(

        <div className='bg-orange-700 text-3xl text-center font-bold text-white p-4'> 
        User : {userid}
        </div>
    )
}
export default User

