import React from 'react'
import MoreBtn from '../common/MoreBtn'

function Coaching() {
  return (
    <>
      <div className="coching-section  ">
        <h1 className="sub-heading px-30"> Coaching</h1>
        <div className="">
          <img src="./assets/img/track.png" className="offer-img" alt="img" />
        </div>
        <div className="py-30 bg-primery -mt-4">
          <p className="para text-white  px-30">
            Alex Coh&lsquo;s coaching system has evolved through in excess of 22 years...
          </p>
        </div>
        <MoreBtn />
        <div className="">
          <img src="./assets/img/coaching1.jpg" className="offer-img" alt="img" />
        </div>
        <div className="py-30 bg-primery -mt-4">
          <p className="para text-white  px-30">
            Alex Coh&lsquo;s nutrition planning is custom made for every client...{' '}
          </p>
        </div>
        <MoreBtn />
        <div className="">
          <img src="./assets/img/coaching2.png" className="offer-img" alt="img" />
        </div>
        <div className="py-30 bg-primery -mt-4">
          <p className="para text-white  px-30">
            Alex Coh has developed bikefitting methods over many years of intensive learning...{' '}
          </p>
        </div>
        <MoreBtn />
      </div>
    </>
  )
}

export default Coaching
