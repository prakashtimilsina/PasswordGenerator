import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='text-center'>User: {id}</div>
  )
}

export default User;