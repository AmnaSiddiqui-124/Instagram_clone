import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router'
import axios from 'axios'
import { useState } from 'react'


const register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    
  }



  return (
    <main>
     <div className="form_container">
       <h1>Register</h1>
      <form onSubmit={handleSubmit}>


        <input
        onInput={(e)=>{setusername(e.target.value)}} 
        type="text"
        name='username'
        placeholder='Enter your Username' />


        <input
        onInput={(e)=>{setemail(e.target.value)}} 
        type="text" 
        name="email" 
        placeholder='Enter your email'/>


        <input
        onInput={(e)=>{setpassword(e.target.value)}} 
        type="password" 
        name="password" 
        placeholder='Enter password'/>


        <button>Register</button>
      </form>
     <p>Already have an account? <Link className='toggleAuthForm' to='/login'>Login</Link></p>
     </div>

    </main>
  )
}

export default register