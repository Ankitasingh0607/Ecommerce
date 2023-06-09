import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart'
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShoppingPolicy from './pages/ShoppingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact'element={<Contact/>}/>
      <Route path='product'element={<OurStore/>}/>
      <Route path='product/:id'element={<SingleProduct/>}/>
      <Route path='blog'element={<Blog/>}/>
      <Route path='blog:id'element={<SingleBlog/>}/>
      <Route path='compare-product'element={<CompareProduct/>}/>
      <Route path='wishlist'element={<Wishlist/>}/>
      <Route path='cart'element={<Cart/>}/>
      <Route path='checkout'element={<Checkout/>}/>
      <Route path='login'element={<Login/>}/>
      <Route path='forget-password'element={<ForgotPassword/>}/>
      <Route path='signup'element={<Signup/>}/>
      <Route path='reset-password'element={<ResetPassword/>}/>
      <Route path='privacy-policy'element={<PrivacyPolicy/>}/>
      <Route path='refund-policy'element={<RefundPolicy/>}/>
      <Route path='shopping-policy'element={<ShoppingPolicy/>}/>
      <Route path='term-condition'element={<TermAndCondition/>}/>
     
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
