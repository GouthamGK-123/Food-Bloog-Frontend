import React, { useState } from 'react'
import "../styles/Signin.css"
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { BsLockFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Signin = () => {

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")


 const navigate = useNavigate()


 const signin = (e) => {
  e.preventDefault()
  let data = {
    email : email,
    password : password
  }
  axios.post('http://localhost:4000/login',data).then((response) => {
    if(response.data.status === 200) {
         navigate('/foodblog')
    }else{
        alert(response.data.message)
    }
  })

 }

    return (
  <div>

 <div className='heading'>
             <h2 className='title'>FOOD BLOG</h2>
             <p className='newuser'>New User? 
             <Link to='/signup'>
             Sign Up
             </Link>
             </p>
             
             </div>
             

        <div className='Signin'>

            <div className='main'>

                
                <img src="/images/bg.png" alt="" width={650}/>

                <div className='formdiv'>
                  
                    <form onSubmit={signin}>
                        <div className='greeting'>
                        <h1 className='welcome'>Welcome Back!</h1>
                    <p className='con'>Login to continue</p>
                        </div>
                        <div className='emaildiv' >
                            <FaUserCircle size={20} className='userlogo'/>
                        <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder='Enter Your Email'  required/>
                        </div>

                        <div className='password'>
                        <BsLockFill size={20} className='userlogo'/>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Your Password' required />
                        </div>
                        
                        <button>LOGIN</button>
                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Signin