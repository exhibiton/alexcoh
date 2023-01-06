import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import NavigationBar from '../../../components/NavigationBar'
import styles from '../ServicesDesktop.module.css'
import coaching1 from '../../../images/coaching1.jpg'
import Footer from '../../../components/Footer'

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
      <div className={styles.coachingOne}>
        <Image src={coaching1} alt="Coaching Services" />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainTitle}>
          My coaching system has evolved <br />
          through in excess of 22 years <br />
          competing and training in <br />
          endurance sports.
        </div>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.mainBodyText}>
          I take into account your age, fitness level, time available for exercise, overall health, muscle
          fiber type (determining what kind of training works best) and am focused on giving the best possible
          results within your available time for training. <br /> <br /> We all have jobs, family commitments,
          friends, and every minute of training needs to count.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
