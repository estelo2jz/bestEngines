import React from 'react';
import M13B from '../assets/img/13b.jpg'

const Mazda13 = () => {
  let production = "1967–2012";
  let configuration = "Wankel engine";
  let engineL = "1.3 L (1,308 cc)";
  let baseH = "135 hp";
  return (
    <div className="car-container">
      <h1>Mazda 13B-REW</h1>
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
          <img src={M13B} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.irperformance.com/product/13brew-mazda-new-engine-93-rx-7/">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Mazda_Wankel_engine#13B">Learn more</a>      
      </div>  
    </div>
  )
}

export default Mazda13;