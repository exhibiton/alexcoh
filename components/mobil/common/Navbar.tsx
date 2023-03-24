import Link from 'next/link'
import React from 'react'
import { LogoIcon, MenuIcon } from './Icon'

function Navbar() {
  return (
    <div className="mob-nav  my-container">
      <Link rel="stylesheet" href="#">
        <LogoIcon />
      </Link>{' '}
      <span>
        <MenuIcon />
      </span>
    </div>
  )
}

export default Navbar
