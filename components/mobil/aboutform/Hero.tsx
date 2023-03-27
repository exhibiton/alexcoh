import React from 'react'

const Hero = () => {
  return (
    <div className="px-30 mt-50">
      <h1 className="heading">Get in touch</h1>
      <p className="about_interested">I’m interested in</p>
      <div className="btn_resp">
        <div>
          {' '}
          <button className="about_btn_common mt-24">TRIATHLON COACHING</button>
        </div>
        <div>
          {' '}
          <button className="about_btn_common mt-24">CYCLING COACHING</button>
        </div>
        <div>
          {' '}
          <button className="about_btn_common mt-24">RUNNING COACHING</button>
        </div>
      </div>
      <div className="btn_resp">
        <div>
          <button className="about_btn_common mt-24">NUTRITION PLANNING</button>
        </div>
        <div>
          <button className="about_btn_common mt-24">BIKE FITTING</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
