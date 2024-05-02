'use client';
import './InternetPackage.css';
import needleinitial from './Needle-initial.png';

const DeltaInternetCard = () => {

  const generalServices = [
    {
      id: 1,
      servicesText: 'Basic',
      speed: '12 Mbps',
      price: 'Rs. 1,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
    {
      id: 2,
      servicesText: 'Basic+',
      speed: '22 Mbps',
      price: 'Rs. 2,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
    {
      id: 3,
      servicesText: 'Basic++',
      speed: '30 Mbps',
      price: 'Rs. 3,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
  ];


  return (
    <div className='InternetPackage'>
      <h1 className='ServicesHeading'>Our Services</h1>
      <div className='GeneralServices'>
        <h2 className='GeneralHeading'>General Services</h2>
        <div className='servicerow'>
        {generalServices.map((service) => (
          <div
          key={service.id}
          className={`service`}
        >
          <img src={needleinitial.src} alt='DeltaCommunication' className='needleinitial'/>
          <h1 className='generalserviceheading'>{service.servicesText}</h1>
          <h2 className='generalservicespeed'>{service.speed}</h2>
          <h2 className='generalserviceprice'>{service.price}</h2>
          <p className='generalserviceparagraph'>{service.description}</p>
          <button className='signupservice'>Sign Up</button>
      </div>
      ))}
      </div>
    </div>
  </div>
  );
};

export default DeltaInternetCard;