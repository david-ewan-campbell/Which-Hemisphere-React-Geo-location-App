import React from 'react';
import './Hemisphere.css';
import northernHemisphere from './images/northern-hemisphere.png';
import southernHemisphere from './images/southern-hemisphere.png';

const hemisphereConfig = {
  Northern: {
    text: 'You are in the Northern Hemisphere',
    picture: northernHemisphere
  },
  Southern: {
    text: 'You are in the Southern Hemisphere',
    picture: southernHemisphere
  }
}
const HemisphereDisplay = ({ latitude }) => {

  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const {text, picture} = hemisphereConfig[hemisphere]
  return(
  <div>
    <div className={ hemisphere } >
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={ picture } width={665} height={475} alt=""/>
      </div>
      <div className='ui teal bottom attached label'>
        <h1>{ text }</h1>
        </div>
      </div>
    </div>
    <h1>Hello</h1>
    </div>
  )
}

export default HemisphereDisplay;
