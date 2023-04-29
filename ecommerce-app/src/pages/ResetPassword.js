import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
    <Meta title="Reset Password"/>
    <BreadCrumb title='Reset Password'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div className='mt-3'>
                            <input type='password' placeholder='Enter New Password' name='Enter New Password' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <input type='text' placeholder='Confirm Password' name='Confirm Password' className='form-control'/>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0 '>Submit</button>
                               
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

export default ResetPassword