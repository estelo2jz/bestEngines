import React from 'react';
import M20B from '../assets/img/20b.jpg'

const Mazda20 = () => {
  let production = "1967–2012";
  let configuration = "Wankel engine";
  let engineL = "2.0 L (1,962 cc)";
  let baseH = "300 hp";
  return (
    <div className="car-container">
      <h1>Mazda 20B-REW</h1>
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
          <img src={M20B} alt="" />
        </div>
      </div>
      <div>
        <a href="https://www.jdmcalifornia.com/product/jdm-mazda-eunos-cosmo-20b-rew-3-rotar-2-0l-sequential-twin-turbo-engine-with-auto-trans/">Buy me!</a>
        <a href="https://en.wikipedia.org/wiki/Mazda_Wankel_engine#13G/20B">Learn more</a>      
      </div>
    </div>
  )
}

export default Mazda20;