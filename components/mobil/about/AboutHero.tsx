import React from 'react'

function AboutHero() {
  return (
    <>
      <div className="img-box">
        <div>
          <img src="./assets/img/about1.jpg" alt="img" />
        </div>{' '}
        <div>
          <img src="./assets/img/box-2.png" alt="img" />
        </div>{' '}
        <div>
          <img src="./assets/img/box3.png" alt="img" />
        </div>{' '}
        <div>
          <img src="./assets/img/about6.jpg" alt="img" />
        </div>
      </div>
      <div className="py-30">
        <p className="px-30 heading">
          Interested in bikefitting, endurance sports coaching or nutrition planning? Look no further!
        </p>
        <p className="px-30 para">
          I am Alex Coh. I come from Croatia and have been an endurance athlete for nearly 22 years.
          <br />
          <br />
          My journey into a career in bikefitting and coaching was the fact that I went through hell with many
          of my coaches who used standardized preset workouts without regard to actual available training
          time, recovery, fuelling or hydration. This has led to me spending 6 months recovering from
          overtraining where I said enough is enough and started learning about coaching first testing on
          myself, then on friends and family and finally started taking athletes 3 years ago.
          <br />
          <br />I am currently coaching 37 people of various fitness levels in cycling and triathlon ranging
          from beginners to World tour cyclists.
        </p>
      </div>
      <div className="py-30 px-30">
        <div>
          <img src="./assets/img/track.png" className="offer-img" alt="img" />
        </div>

        <div className="py-30">
          <p className="para px-30  ">
            I am Alex Coh. I come from Croatia and have been an endurance athlete for nearly 22 years.{' '}
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutHero
