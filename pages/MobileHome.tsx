import Image from 'next/image'
import styles from './mobile.module.css'
import MobileNavigation from '../components/MobileNavigationBar'
import cyclist from '../images/mainCyclist.png'
import Link from 'next/link'
import cohMobile from '../public/cohmobile.svg'
import Navbar from '../components/mobil/common/Navbar'
import HomePage from './HomePage'
import AboutProfile from './AboutProfile'
import MobileFooter from '../components/mobil/common/MobileFooter'

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <AboutProfile />
      <MobileFooter />
    </div>
  )
}
