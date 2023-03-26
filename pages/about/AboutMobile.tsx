import Footer from '../../components/Footer'
import MobileFooter from '../../components/mobil/common/MobileFooter'
import Navbar from '../../components/mobil/common/Navbar'
import About from '../About'
import styles from './AboutMobile.module.css'

export default function AboutMobile() {
  return (
    <div>
      <Navbar />
      <About />
      <MobileFooter />
    </div>
  )
}
