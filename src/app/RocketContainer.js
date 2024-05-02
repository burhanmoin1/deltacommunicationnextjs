'use client';
import React, { useState } from 'react';
import './RocketContainer.css';
import Unlimited from './UnlimitedPossibilites.jpg';
import ExploreCosmos from './ExploreCosmos.jpg';
import RockerPoweredInternet from './RocketPoweredInternet.jpg';
import FiberatHome from './FiberAtHome.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faRocket, faGlobe, faCalculator } from '@fortawesome/free-solid-svg-icons';

const pointsContent = [
  {
    id: 1,
    pointText: 'Fiber at your doorstep',
    image: FiberatHome.src,
    content: 'Experience lightning-fast internet delivered to your doorstep for no charges',
    iconClass: faWifi, 
  },
  {
    id: 2,
    pointText: 'Rocket-powered internet',
    image: RockerPoweredInternet.src,
    content: 'Our internet powered by cybernet takes you to places never before',
    iconClass: faRocket,
  },
  {
    id: 3,
    pointText: 'Explore the cosmos',
    image: ExploreCosmos.src,
    content: 'Discover new horizons with our out-of-this-world connectivity',
    iconClass: faGlobe,
  },
  {
    id: 4,
    pointText: 'Unlimited possibilities',
    image: Unlimited.src,
    content: 'With us, the sky is not the limit. It’s just the beginning',
    iconClass: faCalculator,
  },
];

const RocketContainer = () => {
  const [activePointId, setActivePointId] = useState(1); // Default to the first point

  const handlePointClick = (id) => {
    setActivePointId(id);
  };

  const activePoint = pointsContent.find((point) => point.id === activePointId);

  return (
    <div className='rocket-container'>
      <div className='left-side'>
        <img src={activePoint.image} alt='Delta Communication Network' className='image-delta'/>
      </div>
      <div className='right-side'>
        {pointsContent.map((point) => (
          <div
            key={point.id}
            className={`point ${point.id === activePointId ? 'active' : ''}`}
            onClick={() => handlePointClick(point.id)}
          >
          <FontAwesomeIcon icon={point.iconClass} className={'fas-icon'} style={{ opacity: '0.9' }}/>

            <h1 className={`point-heading ${point.id === activePointId ? 'pressed' : ''}`}>
              {point.pointText}
            </h1>
            {point.id === activePointId && (
              <p className='point-content'>{point.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RocketContainer;
