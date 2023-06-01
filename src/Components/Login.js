

import React, {useState} from 'react'
import '../Styles/Login.css'

import {auth, googleProvider} from '../Config/Firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(auth?.currentUser?.email)
  const handleRegister = async()=>{
    try{
    await createUserWithEmailAndPassword(auth, email, password)
    } catch(err){
      console.error(err)
    }
  }
  const handleGoogleRegister = async()=>{
    try{
    await signInWithPopup(auth, googleProvider)
    } catch(err){
      console.error(err)
    }
  }
  
  const handleLogout= async()=>{
    try{
      await signOut(auth)
    } catch(err){
      console.error(err)
    }
    
  }
  return (
    <div  className='login'>
      <form action="" className='login-details'>
        <label htmlFor="">
          Email:
          <input 
            type="email"
            placeholder='..dennis@brown.com'
            onChange={(e)=>setEmail(e.target.value)}
          />
        </label>
        
        <label htmlFor="">
          Password:
          <input 
            type="password" 
            placeholder='..Password'
            onChange={(e)=>setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleRegister}>REGISTER</button>
        <button onClick={handleGoogleRegister}>REGISTER with Google</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </form>

    </div>
  )
}

export default Login
