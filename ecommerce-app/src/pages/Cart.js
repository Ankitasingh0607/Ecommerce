import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb'
import watch from '../images/watch.jpg'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
     <Meta title="Login"/>
     <BreadCrumb title='Login'/>
     <section className='cart-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header d-flex justify-content-between align-items-center'>
            <h4 className='cart-col-1'>Product</h4>
            <h4 className='cart-col-2'>Price</h4>
            <h4 className='cart-col-3'>Quantity</h4>
            <h4 className='cart-col-4'>Total</h4> 
            </div>
            <div className='cart-header d-flex justify-content-between align-items-center'>
             <div className='cart-col-1 gap-15 d-flex align-items-center'>
              <div className='w-25'>
                <img src={watch} alt='watch' className='img-fluid'/>
              </div>
              <div>
                <p>bkmvhc</p>
                <p>Size:djhoig</p>
                <p>Color:mervoi</p>
              </div>
             </div>
             <div className='cart-col-2'>
              <h5 className='price'>$ 100</h5>
             </div>
             <div className='cart-col-3 d-flex align-items-center gap-15'>
              <div>
              <input className='form-control' type='number' max={10} min={1} style={{width:"50px"}} />
              </div>
              <div>
                <AiFillDelete className='text-danger fs-4'/>
              </div>
             </div>
             <div className='cart-col-4'>
             <h5 className='price'>$ 100</h5>
             </div>
            </div>
            <div className='cart-header d-flex justify-content-between align-items-center'>
             <div className='cart-col-1 gap-15 d-flex align-items-center'>
              <div className='w-25'>
                <img src={watch} alt='watch' className='img-fluid'/>
              </div>
              <div>
                <p>bkmvhc</p>
                <p>Size:djhoig</p>
                <p>Color:mervoi</p>
              </div>
             </div>
             <div className='cart-col-2'>
              <h5 className='price'>$ 100</h5>
             </div>
             <div className='cart-col-3 d-flex align-items-center gap-15'>
              <div>
              <input className='form-control' type='number' max={10} min={1} style={{width:"50px"}} />
              </div>
              <div>
                <AiFillDelete className='text-danger fs-4'/>
              </div>
             </div>
             <div className='cart-col-4'>
             <h5 className='price'>$ 100</h5>
             </div>
            </div>
          </div>
          <div className='col-12 py-2 mt-4'>
           <div className='d-flex justify-content-between align-items-baseline'>
           <Link to='/product' className='button'>Continue to Shopping</Link>
           <div>
            <h4>Subtotal: $ 1000</h4>
            <p>Taxes and Shipping calculated at checkout</p>
            <Link to='/checkout' className='button'>Check Out</Link>
           </div>
           </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Cart