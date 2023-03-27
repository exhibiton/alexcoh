import MobileFooter from '../components/mobil/common/MobileFooter'
import Navbar from '../components/mobil/common/Navbar'
import HomePage from './HomePage'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <MobileFooter />
    </div>
  )
}
