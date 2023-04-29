import React from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {BiHomeAlt} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import{BiInfoCircle} from 'react-icons/bi'

const Contact = () => {
  return (
 <>
 <Meta title="Contact Us"/>
    <BreadCrumb title='Contact Us'/>
    <div className='contact-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113274.6103609666!2d77.60175199329089!3d27.474502405795974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4d5205%3A0x4273a09defe10ea5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1682395665871!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact Us</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text'placeholder='Name' className='form-control'/>
                  </div>
                  <div>
                    <input type='text' placeholder='Email' className='form-control'/>
                  </div>
                  <div>
                    <input type='text'placeholder='Mobile Number' className='form-control'/>
                  </div>
                  <div>
                    <textarea type='text' placeholder='Comments' cols={30} rows={5} className='w-100 form-control'/>
                  </div>
                  <div><button className='button border-0'>Submit</button></div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiHomeAlt className='fs-5'/>
                      <address className='mb-0'>
                      Home No :227 Near Village Chopal ,Mandaura , sonipat, Haryana
                      </address></li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5'/>
                    <a href='tel:+91 7982770894'>+91 7982770894</a></li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/>
                    <a href='mailto:ankita.singh204369@gmail.com'>ankita.singh204369@gmail.com</a></li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday to Friday 10:00am to 6:00pm</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default Contact;