import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import {HiArrowNarrowLeft} from 'react-icons/hi'

const SingleBlog = () => {
  return (
    <>
      <Meta title="Single Blog" />
      <BreadCrumb title="Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              {" "}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Home</li>
                    <li>Our Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="single-blog-card">
                <h3 className="title">
                  A Beaytiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  height={600}
                  width={950}
                  alt="Blog"
                />
                <p>
                  To make your life a lot easier and to save you time and
                  effort, I’ve put together the best cameras for blogging right
                  now. Whether you’re a beauty blogger, a fashion blogger, a
                  food blogger or a travel blogger, I’d really recommend one of
                  these cameras to take your photos and videos to the next
                  level. To make your life a lot easier and to save you time and
                  effort, I’ve put together the best cameras for blogging right
                  now. Whether you’re a beauty blogger, a fashion blogger, a
                  food blogger or a travel blogger, I’d really recommend one of
                  these cameras to take your photos and videos to the next
                  level.
                </p>
                <Link to='/blog'className='d-flex align-items-center'><HiArrowNarrowLeft className="fs-5"/> &nbsp;Go Back To Blogs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
