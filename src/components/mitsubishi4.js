import React from 'react';
import M4G63 from '../assets/img/4g63.jpg'

const Mitsubishi4 = () => {
  let production = "1976–2013";
  let configuration = "Inline 4";
  let engineL = "1,997 cc (2.0 L)";
  let baseH = "168 bhp";
  return (
    <div className="car-container">
      <h1>Mitsubishi 4G63</h1>
      <div className="car-divider">
        <div className="car-info">
          <div>
            <h2>Production: {production}</h2>
            <h2>Configuration: {configuration}</h2>
            <h2>Engine L: {engineL}</h2>
            <h2>Base HorsePower: {baseH}</h2>
          </div>
        </div>

        <div className="car-image">
          <img src={M4G63} alt="" />
        </div>
      </div>
      <div>
        <a href="https://tokyomotorimports.com/listings/jdm-mitsubishi-4g63t-turbo-cyclone-6-bolt-engine-with-mt-5-speed-awd-transmission/">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Mitsubishi_Sirius_engine#4G63/G63B">Learn more</a>      
      </div>
    </div>
  )
}

export default Mitsubishi4;
