import React, { useState } from 'react'
import '../styles/AddPost.css'
import Towercomp from './Towercomp'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 

const AddPost = () => {

  const [author,setAuthor] = useState("")
  const [title,setTitle] = useState("")
  const [image,setImage] = useState("")
  const [summary,setSummary] = useState("")
  const [location,setLocation] = useState("")

  const navigate = useNavigate()

  const Addpost = (e) => {
       e.preventDefault()
       let data = {author , title , setTitle, image ,summary, location}
       axios.post("http://localhost:4000/addpost",data).then((response) => {
        alert(response.data.message)
       })
       navigate('/foodblog/foods')
  } 

  return (
<>
     <Towercomp title="Add Post"/>
    <div className='AddDiv'>
 
 
           <img src="/images/pancakes.jpg" alt=""  className='pancakeimg'
           height={750}
           />

           <form onSubmit={Addpost}>
                  <h1 className='addtitle'>ADD POST</h1>
            <label>Author</label>
            <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Author' />

            <label>Title</label>
            <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='title of the post' />

            <label>Image</label>
            <input onChange={(e) => setImage(e.target.value)} type="text" placeholder='image of the post' />

            <label className='summary'>Summary</label>
            <textarea onChange={(e) => setSummary(e.target.value)} name="" id="" cols="30" rows="5"
             placeholder='summary of the post'></textarea>


            <label>Location</label>
            <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder='location of the post' />

            <button className='addbutton'>Submit Post</button>
             
           </form>
        


    </div>
    </>
  )
}

export default AddPost