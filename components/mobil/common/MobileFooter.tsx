import React from 'react'
import { MadeIcon } from './Icon'

function MobileFooter() {
  return (
    <div className="mobile-footer">
      <div>
        <span>Alex Coh</span>
        <p className=""> © 2023 Alex Coh. Triathlon, Cycling and Run Coaching.</p>
      </div>
      <div>
        <p className=""> Made at</p>
        <span>
          <MadeIcon />
        </span>
      </div>
    </div>
  )
}

export default MobileFooter
