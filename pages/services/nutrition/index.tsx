import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import NavigationBar from '../../../components/NavigationBar'
import styles from './ServicesNutrition.module.css'
import nutrition1 from '../../../images/nutrition1.jpg'
import Footer from '../../../components/Footer'

export default function ServicesNutrition() {
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
        <Image src={nutrition1} alt="Nutrition Services" placeholder="blur" />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainTitle}>
          Alex Coh's nutrition planning is <br />
          custom made for every client.
        </div>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.mainBodyText}>
          I consider your body type, food allergies, your sport of choice, training volume and intensity
          (where applicable), and create a plan that will provide your body with the right nutrients for
          optimal health and performance. <br /> <br />
          Nutrition plans also include fueling for training and events as needed (not limited to endurance
          sports).
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
