'use client';
import React from 'react';
import './GifContainer.css';
import {motion} from 'framer-motion';

function GifContainer({ gifUrl, heading, paragraph }) {

  const handleButtonClick = () => {
    let scrollAmount = 700;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 700;
    }
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="gif-container" style={{ backgroundImage: `url(${gifUrl})` }}>
      <div className="content">
        <h2 className='gifh2'>{heading}</h2>
        <p className='gifp'>{paragraph}</p>
        <motion.button
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.4, transition: { delay: 0.01 } }}
                    animate={{
                    y: [0, 40, 0],
                    transition: { repeat: Infinity, duration: 2, delay: 0.4, type: "tween" },
                    }}
                    className="arrow-button"
                    >
                        &#8595;
                    </motion.button>
      </div>
    </div>
  );
}

export default GifContainer;
