import React from 'react';
import GifContainer from './GifContainer';
import cablegif from './cable.gif';

function Cablegif() {
  return (
    <div className="Cablegif">
      <GifContainer
        gifUrl={cablegif.src}
        heading="DELTA COMMUNICATION"
        paragraph="SPEED LIKE NEVER BEFORE TAKING YOUR SURFING EXPERIENCE TO A WHOLE NEW LEVEL"
      />
    </div>
  );
}

export default Cablegif;
