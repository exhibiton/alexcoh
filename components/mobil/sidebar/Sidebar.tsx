import React from 'react'
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
                <a href="#">Home</a>
              </li>{' '}
              <li>
                <a href="#">About</a>
              </li>{' '}
              <li>
                <a href="#">Services</a>
              </li>{' '}
              <li>
                <a href="#">Terstimonials</a>
              </li>{' '}
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="media-icons">
          <a href="#" className="">
            <FbIcon />
          </a>
          <a href="#" className="">
            <InstaIcon />
          </a>
          <a href="#" className="">
            <FbIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar
