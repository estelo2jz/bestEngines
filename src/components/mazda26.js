import React from 'react';
import M26B from '../assets/img/26b.jpg'

const Mazda26 = () => {
  let production = "1967–2012";
  let configuration = "Wankel engine";
  let engineL = "2.6 L (2,616 cc)";
  let baseH = "700 hp";
  return (
    <div className="car-container">
      <h1>Mazda 26B</h1>
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
          <img src={M26B} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.definedautoworks.com/mazda-rx7-engines-4-rotor.html">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Mazda_Wankel_engine#R26B">Learn more</a>      
      </div>
    </div>
  )
}

export default Mazda26;