import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='text-center bg-slate-500'>User: {id}</div>
  )
}

export default User;