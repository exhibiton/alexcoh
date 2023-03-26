import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
      <div className="hero-bg">
        <div>
          <h1 className="">
            Triathlon, cycling and run coaching by <span className="underline">Alex Coh</span>
          </h1>
        </div>
        <Link href={'/contact'} passHref className="contact-btn">
          Contact now
        </Link>
      </div>
    </>
  )
}

export default Hero
