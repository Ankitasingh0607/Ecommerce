import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';


const Home = () => {
  return (
   <>
   <section className='home-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative p-3'>
            <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt=""/> 
            <div className='main-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>I-Pad S-13 +Pro</h5>
              <p>From $999.00 or $41.62/mo.</p>
              <Link className='button'>Buy Know</Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex gap-10 flex-wrap justify-content-between align-items-center'>
          <div className='small-banner position-relative p-3'>
            <img src="images/catbanner-01.jpg"  className='img-fluid rounded-3'  alt=""/>
            <div className='small-banner-content position-absolute'>
              <h4>Best Sake</h4>
              <h5>I-Pad S-13 +Pro</h5>
              <p>From $999.00 or $41.62/mo.</p>
            </div>
          </div>

          <div className='small-banner position-relative p-3'>
            <img src="images/catbanner-02.jpg"className='img-fluid rounded-3'  alt=""/>
            <div className='small-banner-content position-absolute'>
              
              <h5>NEW ARRIVAl</h5>
              <h5>I-Pad S-13 +Pro</h5>
              <p>From $999.00 or $41.62/mo.</p>
      
            </div>
          </div>

          <div className='small-banner position-relative p-3'>
            <img src="images/catbanner-03.jpg"  className='img-fluid rounded-3' alt=""/>
            <div className='small-banner-content position-absolute'>
              <h5>NEW ARRIVAl</h5>
              <h5>I-Pad S-13 +Pro</h5>
              <p>From $999.00 or $41.62/mo.</p>
              
              
            </div>
          </div>

          <div className='small-banner position-relative p-3'>
            <img src="images/catbanner-04.jpg" className='img-fluid rounded-3'   alt=""/>
            <div className='small-banner-content position-absolute'>
            <h5>NEW ARRIVAl</h5>
              <h5>I-Pad S-13 +Pro</h5>
              <p>From $999.00 or $41.62/mo.</p>
              
            </div>
          </div>
    
          </div>
        </div>
     </div>
    </div>
       </section>
       <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className=' servies d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-15'>
                    <img src="images/service.png" height={50} width={50} alt="services"/>
                    <div >
                      <h6>Free Shipping</h6>
                      <p className='mb-0'>From all orders over $100</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src="images/service-02.png" height={50} width={50}alt=""/>
                    <div >
                      <h6>Daily Surprice Offers</h6>
                      <p className='mb-0'>Save upto 25% off</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src="images/service-03.png"height={50} width={50} alt=""/>
                    <div >
                      <h6>24\7 Support</h6>
                      <p className='mb-0'>Shop with an expert</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src="images/service-04.png" height={50} width={50} alt=""/>
                    <div >
                      <h6>Affordable Prices</h6>
                      <p className='mb-0'>Get factory direct price</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src="images/service-05.png" height={50} width={50} alt=""/>
                    <div >
                      <h6>Secure Payments</h6>
                      <p className='mb-0' >100% protected payments</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
       </section>

       <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
                <div className='categories justiy-content-between d-flex flex-wrap align-items-center'>
                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt=""/>
                  </div>

                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg"  alt=""/>
                  </div>

                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt=""/>
                  </div>

                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg"  alt=""/>
                  </div>
                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg"  alt=""/>
                  </div>

                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt=""/>
                  </div>

                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg"  alt=""/>
                  </div>

                  <div className='d-flex align-items-center '>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg"  alt=""/>
                  </div>
                </div>
            </div>
          </div>
        </div>
       </section>

       <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'><img src='images/brand-01.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-02.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-03.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-04.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-05.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-06.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-07.png'height={100} width={130} alt='brand'/></div>
                <div className='mx-4 w-25'><img src='images/brand-08.png'height={100} width={130} alt='brand'/></div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
       </section>

       <section className=' featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div>
              <h3  className='section-heading'>Featured Collection</h3>
            </div>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
          </div>
        </div>
       </section>

       <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-01.jpg' className='img-fluid' alt='famous'/>
                </div>

                
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-02.jpg' className='img-fluid' alt='famous'/>
                {/* <div className='famous-card-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart watch series</h6>
                <p>From $399 or $16.62/mo. *</p>
                </div> */}
                </div>

                
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-03.jpeg' height={300} width={350} className='img-fluid rounded' alt='famous'/>
                {/* <div className='famous-card-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart watch series</h6>
                <p>From $399 or $16.62/mo. *</p>
                </div> */}
                </div>

                
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-04.webp' className='img-fluid' alt='famous'/>
                {/* <div className='famous-card-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart watch series</h6>
                <p>From $399 or $16.62/mo. *</p>
                </div> */}
                </div>

                
            </div>
          </div>
        </div>
       </section>

       <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
                </div>
             <div className='row'>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
             </div>
        </div>
       </section>

       <section className=' popular-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div>
              <h3  className='section-heading'>Our Popular Products</h3>
            </div>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
          </div>
        </div>
       </section>

       <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div>
              <h3  className='section-heading'>Our Latest Blogs</h3>
            </div>
            
          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCard/>
            </div>
            <div className='col-3'>
            <BlogCard/>
            </div>
            <div className='col-3'>
            <BlogCard/>
            </div>
            <div className='col-3'>
            <BlogCard/>
            </div>
          </div>
        </div>
       </section>
   </>
  )
}

export default Home;