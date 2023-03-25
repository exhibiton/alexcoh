import Link from 'next/link'
import React, { useState } from 'react'
import { LogoIcon, MenuIcon } from './Icon'
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <div className="mob-nav  my-container">
        <Link rel="stylesheet" href="#">
          <LogoIcon />
        </Link>{' '}
        <span onClick={() => setSidebarOpen(true)}>
          <MenuIcon />
        </span>
      </div>
      <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
    </>
  )
}

export default Navbar
