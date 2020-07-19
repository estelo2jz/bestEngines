import React from 'react';
import N2JZ from '../assets/img/2jz.jpg'

const Toyota2 = () => {
  let production = "1990–2007";
  let configuration = "Straight-six";
  let engineL = "3.0 L (2,997 cc)";
  let baseH = "212–227 bhp";
  return (
    <div className="car-container">
      <h1>Toyota 2JZ-GTE</h1>
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
          <img src={N2JZ} alt="" />
        </div>
      </div>
      <div className="car-footer">
        <a href="https://www.jdmenginedepotinc.com/?s=2jz&post_type=product">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Toyota_JZ_engine#2JZ">Learn more</a>      
      </div>
    </div>
  )
}

export default Toyota2;