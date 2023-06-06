import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { BsLockFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        console.log(name, email, password, confirmPassword)
        let data = { name, email, password, confirmPassword }
        if (name && email && password && (password === confirmPassword)) {
            axios.post("http://localhost:4000/register", data).then((response) => {
                alert("Successfully Signed Up")
                navigate('/')
            })
        } else {
            alert("Invalid Credentials")
        }
    }

    return (

        <div className='parent'>

            <div className='heading'>
                <h2 className='title'>FOOD BLOG</h2>
                <p className='newuser'>Already a user?
                    <Link to='/'>
                        Sign In
                    </Link>
                </p>
            </div>

            <div className='Signin'>

                <div className='main'>

                    <div className='formdiv'>

                        <form onSubmit={Submit}>
                            <div className='greeting'>
                                <h1 className='welcome'>Welcome Back!</h1>
                                <p className='con'>Signup to continue</p>
                            </div>

                            <div className='emaildiv' >
                                <FaUserCircle size={20} className='userlogo' />
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' required />
                            </div>

                            <div className='emaildiv' >
                                <FaUserCircle size={20} className='userlogo' />
                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Your Email' required />
                            </div>

                            <div className='password'>
                                <BsLockFill size={20} className='userlogo' />
                                <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Your Password' required />
                            </div>

                            <div className='password'>
                                <BsLockFill size={20} className='userlogo' />
                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="text" placeholder='Confirm Password' required />
                            </div>

                            <button>Sign Up</button>
                        </form>

                    </div>

                    <img src="/images/bg.png" alt="" width={650} />


                </div>

            </div>

        </div>
    )
}

export default Signup