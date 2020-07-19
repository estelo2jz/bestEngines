import React from 'react';
import N1JZ from '../assets/img/1jz.jpg'

const Toyota1 = () => {
  let production = "1990–2007";
  let configuration = "Straight-six";
  let engineL = "2.5 L (2,492 cc)";
  let baseH = "168 bhp";
  return (
    <div className="car-container">
      <h1>Toyota 1JZ-GTE</h1>
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
          <img src={N1JZ} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.jdmenginedepotinc.com/?s=1jz&post_type=product">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Toyota_JZ_engine#1JZ">Learn more</a>      
      </div>    
    </div>
  )
}

export default Toyota1;