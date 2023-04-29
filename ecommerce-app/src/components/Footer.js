import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillLinkedin,AiFillYoutube,AiFillGithub,AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
             <div className='footer-top-data d-flex align-items-center'>
              <img src="images/newsletter.png"  alt="Send"/>
              <h2 className='text-white'>Sign up for more Newsletter</h2>
             </div>
          </div>
          <div className='col-7'>
          <div className="input-group ">
            <input type="text" className="form-control py-2" placeholder="Enter Your Email Here" aria-label="Enter Your Email Here" aria-describedby="basic-addon2"/>
            <span className="input-group-text p-3" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact</h4>
            <div>
              <address className='text-white fs-6'>
                Home No : A-1 Near Hari Tower <br/>
                New Delhi Pincode:110045<br/>
                India
              </address>
              <a href='tel:+91 7982770894' className='mt-2 text-white d-block m-3'>+91 7982770894</a>
              <a href='mailto:ankita.singh204369@gmail.com' className='mt-4 text-white mb-0 d-block m-3'>ankita.singh204369@gmail.com</a>
              <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' to='#'><AiFillLinkedin className='fs-4'/> </a>
                <a className='text-white' to='#'><AiFillGithub className='fs-4'/></a>
                <a className='text-white' href='#'><AiFillYoutube className='fs-4'/> </a>
                <a className='text-white' href='#'><AiFillInstagram className='fs-4'/> </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='/shopping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='/term-condition' className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link to='/blog' className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered by Developers Corner</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer