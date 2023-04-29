import React from "react";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'
import watch from '../images/watch.jpg'
const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Dev.Corner</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="text-dark" href="/cart">Cart</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                     Information
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                     Shipping
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                     Payments
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">Ankita singh (ankita.singh204369@gmail.com )</p>
                <h4>Shipping Address</h4>
                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                    <div className="w-100">
                        <select name="" id=''placeholder="Select Country" className="form-control form-select">
                            <option value='' selected disabled>Select Country</option>
                        </select>
                    </div>
                    <div className="flex-grow-1">
                        <input placeholder="First Name" type="text" className="form-control"/>
                    </div>
                    <div className="flex-grow-1">
                        <input placeholder="Last Name" type="text" className="form-control"/>
                    </div>
                    <div className="w-100">
                        <input placeholder="Address" type="text" className="form-control"/>
                    </div>
                    <div className="w-100">
                        <input placeholder="Appartment-Suits etc (optional)" type="text" className="form-control"/>
                    </div>
                    <div className="flex-grow-1">
                    <input placeholder="city" type="text" className="form-control"/>
                    </div>
                    <div>
                    <select name="" id='' className="form-control form-select">
                        <option value='' selected disabled>Select State</option>
                    </select>
                    </div>
                    <div className="flex-grow-1">
                    <input placeholder="Zip code" type="text" className="form-control"/>
                    </div>
                    
                </form>
                <div className="d-flex justify-content-between align-items end">
                    <Link to='/cart' className="text-dark mt-4"> <IoIosArrowBack/>Return to cart</Link>
                    <Link to='/cart' className='button mt-4 '>Continue to Shipping</Link>
                </div>

                <div className="margin-bottom">
                    <h6>All rights reserved</h6>
                </div>
                    
              </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4">
                    <div className="d-flex gap-10 mb-2 align-items-center">
                        <div className="w-75 d-flex gap-10 ">
                            <div className="w-25 position-relative">
                                <span></span>
                                <img src={watch} className="img-fluid" alt="product"/>
                            </div>
                            <h5 className="title">Watch</h5>
                          <p className="">Here watch description</p>
                        </div>
                        <div className="flex-grow-1">
                        <h5>$ 1000</h5>
                    </div>
                        
                    </div>
                  
                </div>
               

                <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Sub Total</p>
                    <p>$ 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$ 1000</p>              

                </div>
                </div>
                <div className="d-flex justify-content-between border-bottom py-4 align-items-center">
                    <h4>Total</h4>
                    <h5>$ 1000</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
