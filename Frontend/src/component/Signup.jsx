import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (isSignUp && !name)) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const endpoint = isSignUp ? "signup" : "login";
      await axios.post(`http://localhost:3444/user/${endpoint}`, {
        name,
        email,
        password,
      });

      setName("");
      setEmail("");
      setPassword("");
      setError("");

      if (isSignUp) {
       setSuccessMessage("Sign up successful! Please log in.");
        setIsSignUp(false); 
      } else {
        navigate("/");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    }
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setSuccessMessage("");
  }

  return (
    <div className='px-8 py-6'>
      <h1 className='text-center text-3xl'>{isSignUp ? "Sign Up" : "Login"}</h1>
      <div className='flex flex-col space-y-8 my-8'>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-5 justify-center items-center bg-slate-500 p-12 rounded-lg'>
          {isSignUp && (
            <input
              type="text"
              className='px-3 py-2 rounded-md'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
          )}
          <input
            type="email"
            className='px-3 py-2 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Your Email'
          />
          <input
            type="password"
            className='px-3 py-2 rounded-md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Your Password'
          />
          {error && <p className='text-red-500'>{error}</p>}
          {successMessage && <p className='text-green-500'>{successMessage}</p>}
          <button className='px-6 rounded-md py-2 bg-black text-white'>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <button onClick={toggleForm} className='text-blue-600'>
          {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  )
}

export default Signup;
