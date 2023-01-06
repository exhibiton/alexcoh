import Link from 'next/link'
import NavigationBar from '../../components/NavigationBar'
import styles from './ServicesDesktop.module.css'

export default function ServicesDesktop() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.servicesNavigation}>
        <div className={styles.servicesNavigationLinks}>
          <div className={styles.navigationLink}>
            <Link href="/services/coaching">Coaching</Link>
          </div>
          <div className={styles.navigationLink}>
            <Link href="/services/nutrition">Nutrition Planning</Link>
          </div>
          <div className={styles.navigationLink}>
            <Link href="/services/bikefit">Bikefitting</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
