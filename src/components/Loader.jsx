import React from 'react';
import vid from '../images/front.mp4';

const Loader = () => {
  return (
    <div>
      <video id='background-video' src={vid} autoPlay loop muted className='w-full h-[100vh] object-cover' />
    </div>
  );
};

export default Loader;
