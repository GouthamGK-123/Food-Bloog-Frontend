import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
          
          <div className='Navtitle'>
            FoodBlog
          </div>

          <div className='Linkdiv'>
            <ul>
               <Link to='/foodblog'>Home </Link> 
                 <Link to='/foodblog/about'>About</Link>
                <Link to='/foodblog/foods'>All posts</Link>
                <Link to='/foodblog/lifestyle'>Lifestyle</Link>
                <Link to='/foodblog/addpost'>Add Post</Link>
                <Link to='/foodblog/contact'>Contact </Link>
            </ul>
          </div>
        
    </div>
  )
}

export default Navbar