import Image from 'next/image'
import React, { useState } from 'react'

function Testimonols() {
  const [isShowMatthiasText, setShowMatthiasText] = useState(false)

  return (
    <>
      {/* TESTIMONIAL ITEM  */}
      <div className="prfile">
        <Image width={120} height={120} src="/assets/img/profile.png" alt="img" className="filter-gray" />
        <h1 className="heading px-30">Matthias Petry</h1>
        {isShowMatthiasText ? (
          <div>
            <p className="para px-30">
              Alex is quite simply the best that you can get. He’s transformed my attitude and nutrition as
              well as my fitness. He’s endlessly encouraging, always has time and judges exactly what’s
              needed. I’ve achieved things with Alex that I wouldn’t have thought were possible.
            </p>
            <p className="para px-30">
              Trust is probably the keyword. Alex works hard at this. After a while you begin to trust that
              Alex knows your limits and whatever he sets, while it might look insurmountable, is possible if
              you get your mindset right. I’m still not quite sure how I completed a few of the training
              sessions.
            </p>
            <p className="para px-30">
              The training feels, and is, truly personalised. Alex listens carefully to feedback and tweaks my
              training plan sometimes more than once a week. I suppose the simplest way of putting it is Alex
              recognises everyone is human, sometimes they want to go off the plan, sometimes they don’t feel
              right, and he adjusts constantly.
            </p>
            <p className="para px-30">
              Everything is designed to maximise your potential and use of time. I’ve seen major results,
              raising by FTP 20w in 4 months, raising my cycling efficiency closer to 10% and feeling stronger
              and fitter than I ever had before. The biggest change I’ve seen through working with Alex is
              mental rather than physical. He’s helped me build confidence to attack training sessions and
              races.
            </p>
          </div>
        ) : (
          <p className="para px-30">
            Alex is quite simply the best that you can get. He’s transformed my attitude and nutrition as well
            as my...{' '}
          </p>
        )}

        <div className="px-30 ">
          <button onClick={() => setShowMatthiasText(!isShowMatthiasText)} className="more-btn">
            {isShowMatthiasText ? 'LESS' : 'MORE'}
          </button>
        </div>
      </div>
      <div className=" border-line">
        <span></span>
      </div>
    </>
  )
}

export default Testimonols
