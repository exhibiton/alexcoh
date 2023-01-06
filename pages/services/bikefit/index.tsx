import { TabLink } from '../../../components/TabLink'
import NavigationBar from '../../../components/NavigationBar'
import styles from '../ServicesDesktop.module.css'

export default function ServicesCoaching() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.servicesNavigation}>
        <div className={styles.servicesNavigationLinks}>
          <div className={styles.navigationLink}>
            <TabLink href="/services/coaching">Coaching</TabLink>
          </div>
          <div className={styles.navigationLink}>
            <TabLink href="/services/nutrition">Nutrition Planning</TabLink>
          </div>
          <div className={styles.navigationLink}>
            <TabLink href="/services/bikefit">Bikefitting</TabLink>
          </div>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle}>Interested in bikefitting?</div>
      </div>
    </div>
  )
}
