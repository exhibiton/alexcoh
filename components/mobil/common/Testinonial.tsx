import React from 'react'
import MoreBtn from './MoreBtn'

function Testinonial() {
  return (
    <>
      <div className="prfile">
        <img src="./assets/img/profile.png" alt="img" className="filter-gray" />
        <h1 className="heading px-30">Matthias Petry</h1>
        <p className="para px-30">
          Alex is quite simply the best that you can get. He’s transformed my attitude and nutrition as well
          as my...{' '}
        </p>
        <span className="px-30">
          {' '}
          <MoreBtn />
        </span>{' '}
      </div>
      <div className=" border-line">
        <div className=""></div>
      </div>
      <div className="prfile">
        <img src="./assets/img/profile.png" alt="img" className="filter-gray" />
        <h1 className="heading px-30">Ray</h1>
        <p className="para px-30">
          Alex is quite simply the best that you can get. He’s transformed my attitude and nutrition as well
          as my fitness. He’s endlessly encouraging, always has time and judges exactly what’s...
        </p>
        <span className="px-30">
          {' '}
          <button className="more-btn"> LESS</button>
        </span>{' '}
        <div className="py-30"></div>
        <div className="py-30"></div>
      </div>
    </>
  )
}

export default Testinonial
