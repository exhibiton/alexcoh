import React from 'react'
import Link from 'next/link'
import { CrossIcon, FbIcon, InstaIcon, WhatsAppIcon } from '../common/Icon'

interface IProps {
  setSidebarOpen: Function
  isSidebarOpen: boolean
}

function Sidebar(props: IProps) {
  const { setSidebarOpen, isSidebarOpen } = props

  return (
    <>
      <div className={`sidebar-style ${isSidebarOpen ? 'open' : ''}`}>
        <div>
          <div className="cut-btn" onClick={() => setSidebarOpen(false)}>
            <CrossIcon />
          </div>
          <div className="menu-list">
            <ul>
              <li>
                <Link passHref href="/">
                  Home
                </Link>
              </li>{' '}
              <li>
                <Link passHref href="/about">
                  About
                </Link>
              </li>{' '}
              <li>
                <Link passHref href="/services/coaching">
                  Services
                </Link>
              </li>{' '}
              <li>
                <Link passHref href="/testimonials">
                  Testimonials
                </Link>
              </li>{' '}
              <li>
                <Link passHref href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="media-icons">
          <a href="https://www.instagram.com/alex_coh_coaching/" target={'blank'} className="">
            <InstaIcon />
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=358452259190&text=Hello%2C%20My%20Name%20is"
            target={'blank'}
            className="">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar
