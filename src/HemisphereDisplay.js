import React from 'react';
import northernHemisphere from './images/northern-hemisphere.png';
import southernHemisphere from './images/southern-hemisphere.png';

const HemisphereDisplay = ( { latitude} ) => {

  const hemisphere = latitude > 0 ? 'You are in the Northern Hemisphere' : 'You are in the Southern Hemisphere';
  const picture = latitude > 0 ? northernHemisphere : southernHemisphere;
  return(
    <div>
      <img src={ picture } alt=""/>
      { hemisphere }
    </div>
  )
}

export default HemisphereDisplay;
