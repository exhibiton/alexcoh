import Image from 'next/image'
import styles from './mobile.module.css'
import MobileNavigation from '../components/MobileNavigationBar'
import cyclist from '../images/mainCyclist.png'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <MobileNavigation />
      <div className={styles.heroTitle}>
        <div className={styles.heroImage}>
          <Image src={cyclist} alt="Cyclist" placeholder="blur" />
        </div>
        <div className={styles.heroText}>
          Triathlon, cycling and <br />
          run coaching by <u>Alex Coh</u>
        </div>
        <Link href="/contact">
          <div className={styles.contactNow}>Contact Now</div>
        </Link>
      </div>
    </div>
  )
}
