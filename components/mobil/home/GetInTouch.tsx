import Image from 'next/image'
import React from 'react'

function GetInTouch() {
  return (
    <>
      <div className="py-30">
        <div className="py-30 ">
          <p className="para px-30">
            Interested in bikefitting, endurance sports coaching or nutrition planning? Look no further.
          </p>
          <a href="#" className="get-in-touch px-30">
            Get in touch
          </a>
        </div>
        <div className="img-slides">
          <div>
            <Image width={300} height={200} src="/assets/img/coaching1.jpg" className="offer-img" alt="img" />
          </div>{' '}
          <div>
            <Image width={300} height={200} src="/assets/img/coaching2.png" className="offer-img" alt="img" />
          </div>{' '}
          <div>
            <Image width={300} height={200} src="/assets/img/track.png" className="offer-img" alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInTouch
