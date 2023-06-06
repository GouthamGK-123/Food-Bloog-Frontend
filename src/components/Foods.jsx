import React, { useEffect, useState } from 'react'
import Towercomp from './Towercomp'
import axios from 'axios'
import '../styles/allPosts.css'
import { Link } from 'react-router-dom'


const Foods = () => {
   
  const [allpost,setAllPosts] = useState([])
  const [searchinput,setSearchInput] = useState([])

  useEffect(() => {
    try{
      axios.get('http://localhost:4000/posts').then((response) => {
        setAllPosts(response.data.posts)
        setSearchInput(response.data.posts)
       })
    }catch(err){
      console.error(err)
    }
  
  },[])

  const searchuser = (e) => {
      setSearchInput(allpost.filter(x=> x.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }
    
  return (
    <div className='allfood'>
                <Towercomp title="All Posts " />



       <input onChange={searchuser} className='searchinput' placeholder='Search your best food'/>
           
            <div className='allposts'>            
                
                {searchinput.map((x,index) => {
                  return(
                  <div className='post' key={index}>
                                
                    <img src={x.image} alt="" width={250} className='postimage'/>
                    <div className='postsdetails'>
                    <p>{x.title}</p>
                    <p>Author: {x.author}</p>
                    </div>
                        
                        
                      <Link to={`/foodblog/foodPost/${x._id}`}>
                      <button  className='Read'>Read More</button>
                      </Link>
                  
                   </div>
                  )
                  
                })}
        </div>
            

    </div>
  )
}

export default Foods