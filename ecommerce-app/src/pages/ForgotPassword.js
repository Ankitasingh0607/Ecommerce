import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <>
    <Meta title="Login"/>
    <BreadCrumb title='Login'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center mb-3 mt-2 '>We will send you an email to reset your password</p>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div className='mt-3'>
                            <input type='email' placeholder='Email' name='email' className='form-control'/>
                        </div>
                        <div>
                            
                            <div className='d-flex justify-content-center flex-column gap-15 align-items-center'>
                                <button className='button border-0 '>Submit</button>
                                <p className='text-center mb-3 mt-2 '>Cancel</p>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ForgetPassword;