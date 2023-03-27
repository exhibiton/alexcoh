import styles from './ServicesMobile.module.css'
import Link from 'next/link'
import NavigationBar from '../../components/NavigationBar'

export default function ServicesMobile() {
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

// export default function ServicesMobile() {
//   return (
//     <div>
//       <div className={styles.heroTitle}>About xdfvdf</div>
//     </div>
//   )
// }
