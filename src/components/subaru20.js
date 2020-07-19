import React from 'react';
import EJ20 from '../assets/img/ej20.jpg'

const Subaru20 = () => {
  let production = "1988 – 2020";
  let configuration = "Flat-four";
  let engineL = "2.5 L (2,457 cc)";
  let baseH = "153 hp";
  return (
    <div className="car-container">
      <h1>Subaru Ej20</h1>
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
          <img src={EJ20} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.jdmenginedepotinc.com/?s=ej20&post_type=product">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Subaru_EJ_engine#EJ20">Learn more</a>      
      </div>
    </div>
  )
}

export default Subaru20;