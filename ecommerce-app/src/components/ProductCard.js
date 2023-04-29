import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLoaderData, useLocation } from "react-router-dom";
// import prodCompare from '../images/compare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/watch-02.jpeg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="heart" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="" />
            <img
              className="img-fluid"
              src={watch2}
              height={180}
              width={200}
              alt=""
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              White Watches On The Chicest Wrists
            </h5>
            <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
            <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
              A watch is a portable timepiece intended to be carried or worn by
              a person. It is designed to keep a consistent movement despite the
              motions caused by the person's activities.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src='images/comp.png' alt="icons" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="heart" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="" />
            <img
              className="img-fluid"
              src={watch2}
              height={180}
              width={200}
              alt=""
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              White Watches On The Chicest Wrists
            </h5>
            <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
            <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
              A watch is a portable timepiece intended to be carried or worn by
              a person. It is designed to keep a consistent movement despite the
              motions caused by the person's activities.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src='images/comp.png'alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
