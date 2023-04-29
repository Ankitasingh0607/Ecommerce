import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Meta title="Signup"/>
    <BreadCrumb title='Signup'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div className='mt-3'>
                            <input type='text' placeholder='Name' name='name' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <input type='email' placeholder='Email' name='email' className='form-control'/>
                        </div>
                        <div className='mt-3'>
                            <input type='number' placeholder='Mobile Number' name='mobile' className='form-control'/>
                        </div>
                        <div>
                            <input type='password'placeholder='Password' name='password' className='form-control'/>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0 '>Sign Up</button>
                               
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

export default Signup