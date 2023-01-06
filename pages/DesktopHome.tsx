import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import styles from './page.module.css'
import cyclist from '../images/mainCyclist.png'
import cohIcon from '../public/cohIcon.svg'

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
        <div className={styles.contactButton}>Contact Now</div>
        <div className={styles.services}>
          <div className={styles.servicesSection}>
            <div className={styles.servicesText}>
              <div className={styles.servicesTitle}>
                We offer coaching services for athletes internationally around the world
              </div>
              <div className={styles.servicesSubtitle}>
                Time to start your health and fitness journey today - discover how!
              </div>
            </div>
            <div className={styles.cohIcon}>
              <Image src={cohIcon} alt="Coh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
