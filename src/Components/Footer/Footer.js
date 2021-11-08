import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/Footer-img.png';
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer-container text-start">
    <div class="row">
        <div class="ul-container col-sm-6 col-md-3">
        <ul>
            <li><h5>Get to Know Us</h5></li>  
            <li className="text-decoration-none">Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
        </ul>
        </div>
        <div class="ul-container col-sm-6 col-md-3">
        <ul>
        <li><h5>Trendy Payment Products</h5> </li>  
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Self-Publish with Us</li>
            <li>Become an Affiliate</li>
            <li>Host an Amazon Hub</li>
            <li>›See More Make Money with Us</li>
        </ul>
        </div>
        <div class="ul-container col-sm-6 col-md-3">
        
           <ul>
           <li><h5>Money with Us</h5></li>  
           <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
           </ul>
        </div>

        <div class="ul-container col-sm-6 col-md-3">
        <ul>
        <li><h5>Let Us Help You</h5></li>  
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant Help</li>
        </ul>
        </div>

    </div>
    </div>
    );
};

export default Footer;