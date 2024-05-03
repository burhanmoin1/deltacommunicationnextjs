'use client';
import './Footer.css';
import transparentlogo from './transparentdeltalogo.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='innercontent'>
        <img src={transparentlogo.src} alt='Delta Communication Network' className='delta-footer'/>
        <Link href="/" className="footer-link">Home</Link> 
           
        <Link href="/#services" className="footer-link">Services</Link>

        <Link href="/#support" className="footer-link">Support</Link> 
    
        <Link href="/#aboutus" className="footer-link">About Us</Link> 
        </div>
        <p className='deltatext'>Delta Communication Network</p>
        <p className='footertext'> Copyright © 2024 All Rights Reserved</p>
        </div>
    );
};

export default Footer;