import React from 'react';
import F20C from '../assets/img/f20c.jpg';

const Honda20 = () => {
  let production = "	2000-2009";
  let configuration = "Naturally aspirated Inline-4";
  let engineL = "2.0 L (1,997 cc)";
  let baseH = "247 hp";
  return (
    <div className="car-container">
      <h1>Honda F20C</h1>
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
          <img src={F20C} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.jdmdistro.com/shop/engines/honda-ap1-s2000-f20c-engine/">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Honda_F20C_engine#F20C">Learn more</a>      
      </div>
    </div>
  )
}

export default Honda20;