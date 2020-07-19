import React from 'react';
import RB26 from '../assets/img/rb26.jpg';

const Nissan26 = () => {
  let production = "1985-2004 (Continuing production 2019)";
  let configuration = "Straight-six";
  let engineL = "2.6 L (2,568 cc)";
  let baseH = "276 bhp";
  let idle = "950rpm"
  let price = ""
  return (
    <div className="car-container">
      <h1>Nissan RB26DETT</h1>
      <div className="car-divider">
        <div className="car-info">
          <div>
            <h2>Production: {production}</h2>
            <h2>Configuration: {configuration}</h2>
            <h2>Engine L: {engineL}</h2>
            <h2>Base HorsePower: {baseH}</h2>
            <h2>Idle Speed: {idle}</h2>
          </div>
        </div>

        <div className="car-image">
          <img src={RB26} alt="" />
        </div>
      </div>
      <div>
        <a href="https://jspecauto.com/en/search/rb26/">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Nissan_RB_engine#RB26DETT">Learn more</a>      
      </div>
    </div>
  )
}

export default Nissan26;