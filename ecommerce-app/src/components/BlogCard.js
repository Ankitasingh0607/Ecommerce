import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
  
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt=''/>
            </div>
            <div className='card-content'>
                <p className='date'>19 Apr 2023</p>
                <h5 className='title'>
                    A Beutifull Sunday Morning Renaissance
                </h5>
                <p className='desc'>
                A device that consists of a lightproof chamber with an aperture fitted with a lens and a shutter through which the image of an object is projected onto a surface for recording
                </p>
                <Link to='/blog:id' className='button'>Read More</Link>
            </div>
        </div>
 
  )
}

export default BlogCard