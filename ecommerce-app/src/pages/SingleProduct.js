import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';


const SingleProduct = () => {
    const props = {width: 500, height: 700, zoomWidth: 500, img:"https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"};
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex flex-wrap gap-15">
               <div><img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" alt='product'className="img-fluid"/></div>
               <div><img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" alt='product'className="img-fluid"/></div>
               <div><img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" alt='product'className="img-fluid"/></div>
               <div><img src="https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" alt='product'className="img-fluid"/></div>
              </div>
            </div>
            <div className="col-6">
                <div className="main-product-details">
                   <div className="border-bottom">
                   <h3 className="title">A luxury watch is a timeless investment.</h3>
                   </div>
                    <div className="border-bottom py-3">
                        <p className="price">$ 100</p>
                        <div className="d-flex align-items-center">
                        <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">2 Reviews</p>
                   
                        </div>
                        <a className="review-btn" href="#review">Write a Review</a>
                            
                        
                    </div>      
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Type:</h3> <p className="product-data" >Watch</p>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Brand:</h3> <p className="product-data">Havells</p>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Categories:</h3> <p className="product-data">Watch</p>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Tags:</h3> <p className="product-data">Watch</p>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">SKU:</h3> <p className="product-data"></p>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Availability:</h3> <p className="product-data">In-Stock</p>
                      </div>
                      <div className="d-flex flex-column gap-10 mt-2 mb-3">
                        <h3 className="product-heading">Size:</h3>
                        <div className="d-flex flex-wrap gap-15">
                          <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-10 mt-2 mb-3">
                        <h3 className="product-heading">Color:</h3> <Color/>
                      </div>
                      <div className="d-flex align-items-center gap-10 mt-2 mb-3">
                        <h3 className="product-heading">Quantity:</h3>
                        <input className="form-control" type="number" min={1} max={10} style={{width:"60px"}}/>
                        <div className="d-flex align-items-center">
                        <button className='button border-0 m-3 '>Add to Cart</button>
                        <Link to='' className='button signup m-3' >But It Know</Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <div><a href=''>Add to Cart</a></div>
                        <div><a href=''>Add to Wishlist</a></div>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Shippings & Returns</h3>
                         <p className="product-data">Free shipping and returns on all orders!!
                         <br/>
                         We ship all US domestic orders withh in
                         <b>5-10 business days</b>
                         </p>
                      </div>
                      <div className="d-flex align-items-center gap-10 my-2">
                        <h3 className="product-heading">Copy Product Link</h3>
                        
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <h4>Description</h4>
              <div className="bg-white p-3">
                
                <p>
                  A watch is a portable timepiece intended to be carried or worn
                  by a person. It is designed to keep a consistent movement
                  despite the motions caused by the person's activities A watch
                  is a portable timepiece intended to be carried or worn by a
                  person. It is designed to keep a consistent movement despite
                  the motions caused by the person's activities A watch is a
                  portable timepiece intended to be carried or worn by a person.
                  It is designed to keep a consistent movement despite the
                  motions caused by the person's activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <h3>Reviews</h3>
              <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form">
                <form action="" className="d-flex flex-column gap-15">
                     <h4>Write a Review</h4>  
                     <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />  
                   <div className="form-floating">
                    <textarea className=" w-100 form-control" placeholder="Leave a comment here" id='' style={{height:"100px"}}></textarea>
                    <label>Comments</label>
                    </div>
                    <div className="d-flex justify-content-end">
                    <button className='button border-0 '>Submit Review</button>
                    </div>
                </form>
              </div>
              <div className="review-inappropriate d-flex justify-content-between align-items-end">
                <div>
                 
                  <div className="d-flex flex-column gap-20">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                     <h5>Good</h5>
                     <h5>aaaaaaa on April,29,2023</h5>
                     <p>safasa</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                     Report as Inappropriate
                    </a>
                  </div>
                )}
              </div>
              <div className="review-inappropriate d-flex justify-content-between align-items-end">
                <div>
                 
                  <div className="d-flex flex-column gap-20">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                     <h5>Good</h5>
                     <h5>edmin on Apr,20,2023</h5>
                     <p>Great product I will buy it again</p>
                     <div className="review-response">
                        <h4>-Digitic</h4>
                        <p>Thank You for purchase from.please let us know if we can do something else for you</p>
                     </div>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                     Report as Inappropriate
                    </a>
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div>
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
