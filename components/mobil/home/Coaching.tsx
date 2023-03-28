import React from 'react'
import MoreBtn from '../common/MoreBtn'
import Image from 'next/image'

function Coaching() {
  return (
    <>
      <div className="coching-section  ">
        <h1 className="sub-heading px-30"> Coaching</h1>
        <div>
          <Image
            height={235}
            width={400}
            src="/assets/img/track.png"
            className="offer-img w-full"
            alt="track"
          />
        </div>
        <div className="py-30 bg-primery -mt-4">
          <p className="para text-white  px-30">
            Alex Coh&lsquo;s coaching system has evolved through in excess of 22 years...
          </p>
        </div>
        <MoreBtn />
        <div>
          <Image
            height={235}
            width={400}
            src="/assets/img/coaching1.jpg"
            className="offer-img w-full"
            alt="img"
          />
        </div>
        <div className="py-30 bg-primery -mt-4">
          <p className="para text-white  px-30">
            Alex Coh&lsquo;s nutrition planning is custom made for every client...{' '}
          </p>
        </div>
        <MoreBtn />
        <div>
          <Image
            height={235}
            width={400}
            src="/assets/img/coaching2.png"
            className="offer-img w-full"
            alt="img"
          />
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
