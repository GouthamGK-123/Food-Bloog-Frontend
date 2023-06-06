import React, { useEffect, useState } from 'react'
import '../styles/About.css'
import Towercomp from './Towercomp'
import axios from 'axios'

const About = () => {

  const [users,setUsers] = useState([])
  const [foods,setFoods] = useState([])

   useEffect(() => {

    axios.get('http://localhost:4000/userlist').then((response) => {
      setUsers(response.data)
    })


    axios.get('http://localhost:4000/posts').then((response) => {
       setFoods(response.data.posts)
    })

   },[])


  return (
    <div>
      <Towercomp title="About Us" />


      <div className='about2div'>
        <img src="https://i.pinimg.com/originals/6d/9f/10/6d9f10b2072190c55359ff002b1d40fe.jpg"
          alt=""
          width={550}
         height={780}
        />

        <div className='about2divside'>

          <div className='aboutdetails'>
            <h1>About Stories</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>

          <div className='about1row'>
            <div className='box'>
              <h1>10</h1>
              <p>Years of Experienced</p>
            </div>

            <div className='box'>
              <h1>{foods.length}</h1>
              <p>Foods</p>
            </div>
          </div>


          <div className='about1row'>
            <div className='box'>
              <h1>300</h1>
              <p>LifeStyle</p>
            </div>

            <div className='box'>
              <h1>{users.length}</h1>
              <p>Happy Customers</p>
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default About