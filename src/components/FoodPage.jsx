import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/FoodPage.css'
import { useParams } from 'react-router-dom'

const FoodPage = () => {

const [food,setFood] = useState({})

 const params = useParams()

 console.log(params.id)

  useEffect(() => {
     axios.get(`http://localhost:4000/posts/${params.id}`).then((response) => {
      setFood(response.data.singlePost)
      console.log(response.data.singlePost)
     })
  },[])
    

  return (
    <div className='foodPage'>

 <div className='upperfoodpage'>


      <img className='foodpageimg' src={food.image} alt="" width={300} height={200}/>
      <div className='foodpagedetails'>
      <h1>{food.title}</h1>
        <p>Written By : {food.author}</p>
        <p className='foodpagesummary'>{food.summary}</p>
      </div>
      </div>


      

        <div style={{padding:"10px 0px"}}>
      <iframe src={food.location} width="600" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> 

    </div>
  )
}

export default FoodPage