import React from 'react'
import "../nav.scss"
import { useNavigate } from 'react-router'

const Navber = () => {

    const navigate = useNavigate()

  return (
   <nav className='nav-bar'>
    <p>InstaGram</p>
    <button
        onClick={()=>{navigate("/create-post")}}
    className='button primary-button'>Create Post</button>
   </nav>
  )
}

export default Navber