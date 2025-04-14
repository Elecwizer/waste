import React from 'react';
import '../styles/smartbinsmap.css';

const SmartBinsMap = () => {
  return (
    <div className="map-container">
      <svg viewBox="0 0 500 500" className="map-background">
        <rect style={{ fill: '#f5f0e5' }} width="500" height="500"></rect>
        <path
          style={{ fill: '#90daee' }}
          d="M0,367.82c5.83-4.39,14.42-10.16,25.59-15.34,4.52-2.09,43.19-19.51,79.55-11.93,36.1,7.52,35.75,32.55,78.41,60.23,46.34,30.06,109.47,41.21,123.32,22.1,11.95-16.49-22.61-41.92-13.66-84.6,4.85-23.1,22.33-50.71,47.73-58.52,42.42-13.05,78.83,39.45,102.84,23.86,15.81-10.26.01-32.87,22.73-74.43,5.8-10.62,11.65-21.15,11.93-36.93.28-15.69-5.63-26.64-7.95-32.39-6.66-16.45-6.21-45.15,28.84-98.55.23,146.23.46,292.46.69,438.69H0v-132.18Z"
        ></path>
      </svg>
      <div className="map-cities">
        <div style={{ '--x': '5', '--y': '67' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🏖️" className="map-city__sign">Smart bin 1</span>
          </div>
        </div>

        <div style={{ '--x': '32', '--y': '32' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🌷" className="map-city__sign anim anim-grow">Smart bin 2</span>
          </div>
        </div>

        <div style={{ '--x': '58', '--y': '83' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🏄" className="map-city__sign anim anim-slidein">Smart bin 3</span>
          </div>
        </div>

        <div style={{ '--x': '65', '--y': '22' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🏛️" className="map-city__sign">Smart bin 4</span>
          </div>
        </div>

        <div style={{ '--x': '87', '--y': '58' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🎢" className="map-city__sign">Smart bin 5</span>
          </div>
        </div>

        <div style={{ '--x': '94', '--y': '38' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🌊" className="map-city__sign anim anim-slidein">Smart bin 6</span>
          </div>
        </div>

        <div style={{ '--x': '44', '--y': '45' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🦠" className="map-city__sign anim anim-slidein">Smart bin 7</span>
          </div>
        </div>

        <div style={{ '--x': '73', '--y': '27' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="✈️" className="map-city__sign anim anim-slidein">Smart bin 8</span>
          </div>
        </div>

        <div style={{ '--x': '21', '--y': '51' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🏫" className="map-city__sign anim anim-grow">Smart bin 9</span>
          </div>
        </div>

        <div style={{ '--x': '49', '--y': '68' }} className="map-city">
          <div className="map-city__label">
            <span data-icon="🗻" className="map-city__sign anim anim-grow">Smart bin 10</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmartBinsMap;
