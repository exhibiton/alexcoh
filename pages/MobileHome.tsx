import Image from 'next/image'
import styles from './mobile.module.css'
import MobileNavigation from '../components/MobileNavigationBar'
import cyclist from '../images/mainCyclist.png'
import Link from 'next/link'
import cohMobile from '../public/cohmobile.svg'
import Navbar from '../components/mobil/common/Navbar'
import HomePage from './HomePage'
import MobileAboutFrom from './MobileAboutForm'
import MobileFooter from '../components/mobil/common/MobileFooter'
import AboutProfile from './AboutProfile'
import AboutPage from './AboutPage'
import Sidebar from '../components/mobil/sidebar/Sidebar'
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <MobileAboutFrom /> */}
      {/* <AboutProfile /> */}
      {/* <AboutPage /> */}
      <MobileFooter />
      {/* <Sidebar /> */}
    </div>
  )
}
