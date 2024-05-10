import DeltaNavbar from './Navbar';
import Cablegif from './Cablegif';
import DeltaInternetCard from './InternetPackageCard';
import RocketContainer from  './RocketContainer';
import Support from './Support';
import './AboutUs.css';
import './Support.css';
import Footer from './Footer';
import './Footer.css';
import transparentlogo from './transparentdeltalogo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <link rel="icon" href="./favicon.ico"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>      <DeltaNavbar />
      <Cablegif />
      <RocketContainer />
      <DeltaInternetCard/>
      <section id='support'>
        <div className="supportcontainer">
          <h2 className='supportheading'>Support</h2>
          <div className='twopartcontainer'>
            <div className='Contact-Information'>
              <h2 className='contactheading'>Contact Information</h2>
              <p className='contactparagraph'>
                If you prefer to contact us directly, you can reach us using the following details:
              </p>
              <p className='contactparagraph'>
                <strong>Address:</strong> Plot no.23-F, 3rd floor Muhammad Ali Society, Karachi
              </p>
              <p className='contactparagraph'>
                <strong>Phone:</strong> <a href="tel:+923219244672">+923219244672</a>
              </p>
              <p className='contactparagraph'>
                <strong>Email:</strong> <a href="mailto:deltacn2011@gmail.com">deltacn2011@gmail.com</a>
              </p>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7086306984525!2d67.07586637607524!3d24.873799144722373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ebbda85f009%3A0xfb68fac05dceb842!2s23%20Street%203%2C%20Block%20B%20Al%20Hamra%20Society%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714746717134!5m2!1sen!2s"
                  className="google-map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className='contactus'>
              <h2 className='contact-heading'>Contact Us</h2>
              <p className='contact-paragraph'>If you have any questions or inquiries, please feel free to get in touch with us.</p>
              <p className='contact-paragraph'>For customer support, please use the form below:</p>

              {/* Insert the Support form component */}
              <Support /> 
            </div>
          </div>
        </div>
      </section>
      <section id='aboutus'>
        <div className='AboutUsContainer'>
        <h2 className='aboutusheading'>About Us</h2>
        <p className='aboutusp'>
        Delta Communication Network, established in 1999 and proudly licensed by the Pakistan Electronic Media Regulatory Authority, is committed to connecting the small community of Gulshan Iqbal and Muhammad Ali Society through reliable and high-speed internet and cable services. 
        </p>
        <h3 className='inneraboutusheading'>Our Mission:</h3>
        <p className='aboutusp'>
        Our mission is to empower individuals and businesses with seamless communication solutions that enhance their lives, drive economic growth, and remain affordable for all.
        We strive to consistently deliver exceptional customer experiences, invest in fiber optic technology, and support local initiatives in the area. Our commitment to bringing the digital realm to the masses through affordable and budget-friendly internet and cable services to ensure that every household and business can access the connectivity they need.
        At Delta Communication Network, we firmly believe that access to fast and dependable connectivity is a fundamental right, and that is why we are dedicated to reliable connectivity and exceptional customer support when needed.
        </p>
        </div>
        </section>
        <div className='footer'>
        <div className='innercontent'>
        <a className='deltapic' href="/">
            <img src={transparentlogo.src} alt="Delta Communication Network" className="delta-footer" />
            </a>
        <Link href="/" className="footer-link">Home</Link> 
           
        <Link href="/#services" className="footer-link">Services</Link>

        <Link href="/#support" className="footer-link">Support</Link> 
    
        <Link href="/#aboutus" className="footer-link">About Us</Link> 
        </div>
        <p className='deltatext'>Delta Communication Network</p>
        <p className='footertext'> Copyright © 2024 All Rights Reserved</p>
        </div>
    </main>
  );
}
