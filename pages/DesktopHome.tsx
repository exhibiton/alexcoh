import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import styles from './page.module.css'
import cyclist from '../images/mainCyclist.png'

export default function Home() {
  return (
    <div>
      <div>
        <NavigationBar />
        <div className={styles.heroTitle}>
          <div className={styles.heroImage}>
            <Image src={cyclist} alt="Cyclist" />
          </div>
          <div className={styles.heroText}>
            Triathlon, cycling and run coaching by <u>Alex Coh</u>
          </div>
        </div>
      </div>
    </div>
  )
}
