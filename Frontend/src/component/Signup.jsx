import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const navigate = useNavigate();

  const fetchdata=async (e)=>{
    e.preventDefault();
    const data=await axios.post("http://localhost:3444/user/signup",{
      name,
      email,
      password,
    })

    setname("");
    setemail("");
    setpassword("");

    navigate("/");
  }

   return (
    <div className='px-8 py-6'>
     
      <h1 className='text-center text-3xl'>Sign Up</h1>
      <div className=' flex flex-col space-y-8 my-8'>
      <form onSubmit={fetchdata} className=' flex flex-col space-y-5 justify-center items-center bg-slate-500 p-12 rounded-lg'>
        <input type="text" className=' px-3 py-2 rounded-md' value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name' />
        <input type="email" className=' px-3 py-2 rounded-md' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Your Email'/>
        <input type="password" value={password} className='px-3 py-2 rounded-md' onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Your Password' />

        <button className='px-6 rounded-md py-2 bg-black text-white'>SignUp</button>
      </form>
      </div>

    </div>
  )
}

export default Signup