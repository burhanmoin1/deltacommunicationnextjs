'use client';
import './InternetPackage.css';
import needleinitial from './Needle-initial.png';
import needlefull from './Needle-fulll.png';

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
      speed: '28 Mbps',
      price: 'Rs. 3,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
  ];

  const premiumServices = [
    {
      id: 1,
      servicesText: 'Premium',
      speed: '34 Mbps',
      price: 'Rs. 4,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
    {
      id: 2,
      servicesText: 'Flash',
      speed: '52 Mbps',
      price: 'Rs. 5,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
    {
      id: 3,
      servicesText: 'Rocket',
      speed: '102 Mbps',
      price: 'Rs. 9,500/month',
      description: 'Unlimited Downloads & Uploads'
    },
  ];


  return (
    <section id="services">
    <div className='InternetPackage'>
      <h1 className='ServicesHeading'>Our Services</h1>
      <div className='GeneralServices'>
        <h2 className='GeneralHeading'>General Services:</h2>
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
          <a href='/signup'>
          <button className='signupservice'>Sign Up</button>
          </a>
      </div>
      ))}
      </div>
      </div>
      <div className='PremiumServices'>
      <h2 className='GeneralHeading'>Premium Services:</h2>
      <div className='servicerow'>
        {premiumServices.map((service) => (
          <div
          key={service.id}
          className={`service`}
        >
          <img src={needlefull.src} alt='DeltaCommunication' className='needleinitial'/>
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
    </section>
  );
};

export default DeltaInternetCard;