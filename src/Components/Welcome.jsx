import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const Welcome = () => {

  const {user} = useContext(AuthContext)
  return (
    <>
      <h3 className='text-center'>Welcome, <span>{user?.displayName}</span></h3>  
    </>
  )
}

export default Welcome
