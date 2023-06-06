import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import About from './About'
import Foods from '../components/Foods'
import Lifestyle from './Lifestyle'
import Contact from './Contact'
import Footer from './Footer'
import AddPost from './AddPost'
import FoodPage from './FoodPage'


const Home = () => {
  return (
    <div>

      <Navbar />
         <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path='/foodPost/:id' element={<FoodPage />}/>
         </Routes>
         <Footer />
 


    </div>
  )
}

export default Home