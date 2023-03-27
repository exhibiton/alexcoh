import React from 'react'
import Link from 'next/link'
import { CrossIcon, FbIcon, InstaIcon } from '../common/Icon'

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
                <Link passHref href="contact">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="media-icons">
          <a href="#" target={'blank'} className="">
            <FbIcon />
          </a>
          <a href="#" target={'blank'} className="">
            <InstaIcon />
          </a>
          <a href="#" target={'blank'} className="">
            <FbIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar
