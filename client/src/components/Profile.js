import React from 'react'

import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.user.user)
  return (
    <>
    <h1>hello si {user? user.name: <h1>Loaging...</h1>}</h1>
    </>
  )
}

export default Profile