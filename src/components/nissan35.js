import React from 'react';
import VQ35 from '../assets/img/vq35.jpg'

const Nissan35 = () => {
  let production = "1994–present";
  let configuration = "V6";
  let engineL = "3.5 L (3,498 cc)";
  let baseH = "300 hp";
  return (
    <div className="car-container">
      <h1>Nissan VQ35DE</h1>
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
          <img src={VQ35} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.jdmenginedepotinc.com/?s=vq35de&post_type=product">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Nissan_VQ_engine#VQ35DE">Learn more</a>      
      </div>
    </div>
  )
}

export default Nissan35;