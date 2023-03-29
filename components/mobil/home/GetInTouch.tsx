import Image from 'next/image'
import React from 'react'
import coaching1 from '../../../public/assets/img/about3.jpg'
import coaching2 from '../../../public/assets/img/coaching2.png'
import track from '../../../public/assets/img/track.png'

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
            <Image width={300} height={200} src={track} placeholder="blur" className="offer-img" alt="img" />
          </div>{' '}
          <div>
            <Image
              width={300}
              height={200}
              src={coaching2}
              placeholder="blur"
              className="offer-img"
              alt="img"
            />
          </div>{' '}
          <div>
            <Image
              width={300}
              height={200}
              src={coaching1}
              placeholder="blur"
              className="offer-img"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInTouch
