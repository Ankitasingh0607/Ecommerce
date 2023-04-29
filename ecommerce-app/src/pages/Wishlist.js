import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Color from '../components/Color';
function CompareProduct() {
  return (
   <>
    <Meta title="Compare Product"/>
    <BreadCrumb title='Compare Product'/>
    <div className='compare-product py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross'/>
              <div className='compare-product-image'>
                <img src='images/watch.jpg'alt='watch'/>
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7inch with Wi-Fi+3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross'/>
              <div className='compare-product-image'>
                <img src='images/watch.jpg'alt='watch'/>
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7inch with Wi-Fi+3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
                <div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross'/>
              <div className='compare-product-image'>
                <img src='images/watch.jpg'alt='watch'/>
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7inch with Wi-Fi+3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross'/>
              <div className='compare-product-image'>
                <img src='images/watch.jpg'alt='watch'/>
              </div>
              <div className='compare-product-details'>
                <h5 className='title'>Honor T1 7.0 1GB RAM 8GB ROM 7inch with Wi-Fi+3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
                <div>
                 
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

export default CompareProduct