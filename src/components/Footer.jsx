// src/components/Footer.js
import React from 'react';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-white py-8">
  <div className="footer-container max-w-screen-xl mx-auto px-4">
  <div className="subscribe flex flex-wrap justify-between mb-8">
  <div className="left w-full md:w-1/2 mb-4 md:mb-0 -left-[20%] relative -bottom-16">
    <h1 className="text-lg font-bold ">BE THE FIRST TO KNOW</h1>
    <h4 className="text-sm">Sign up for updates from metta muse</h4>
    <span className="flex mt-2">
      <input
        className="input border border-gray-300 rounded-l-md py-2 px-4 w-full"
        type="text"
        placeholder="Enter your e-mail"
      />
      <button className="bg-black text-white rounded-r-md py-2 px-4 border-2 border-white opacity-50 relative -right-5 ">Subscribe</button>
    </span>
  </div>
  <div className=" w-full md:w-1/2 -right-[25%] relative -top-8">
    <h1 className="text-lg font-bold">CONTACT US</h1>
    <h4 className="text-sm">+442211335360</h4>
    <h4 className="text-sm">customer@mettamuse.com</h4>
    <h1 className="text-lg font-bold mt-4">CURRENCY</h1>
    <h1 className="text-lg">USD</h1>
    <h5 className="text-sm">
      Transaction will be completed in Euros and a currency reference is available on hover.
    </h5>
  </div>
</div>

    <div className="footer-section-container grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="footer-section">
        <h3 className="font-bold">Company</h3>
        <ul>
          <li><a className="hover:underline" href="#">About Us</a></li>
          <li><a className="hover:underline" href="#">Careers</a></li>
          <li><a className="hover:underline" href="#">Press</a></li>
          <li><a className="hover:underline" href="#">Blog</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="font-bold">Support</h3>
        <ul>
          <li><a className="hover:underline" href="#">Help Center</a></li>
          <li><a className="hover:underline" href="#">Contact Us</a></li>
          <li><a className="hover:underline" href="#">FAQs</a></li>
          <li><a className="hover:underline" href="#">Shipping & Returns</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="font-bold">Follow Us</h3>
        <ul className="social-links flex space-x-4">
        <li><FontAwesomeIcon icon={faInstagram} /></li>
        <li><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-bottom bg-gray-700 py-4 relative -bottom-11">
    <p className="text-center text-sm">&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</footer>

    );
};

export default Footer;
