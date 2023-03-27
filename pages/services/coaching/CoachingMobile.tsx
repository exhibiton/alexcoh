import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import styles from './CoachingMobile.module.css'
import coaching1 from '../../../images/coaching1.jpg'
import FooterMobile from '../../../components/FooterMobile'
import Navbar from '../../../components/mobil/common/Navbar'

export default function CoachingDesktop() {
  return (
    <div>
      <Navbar />
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
        <Image src={coaching1} alt="Coaching Services" placeholder="blur" />
      </div>

      <div className={styles.mainContainer}>
        <p className={styles.mainTitle}>
          My coaching system
          <br /> has evolved through
          <br /> in excess of 22 years <br />
          competing and training in endurance sports.
        </p>
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
        <div className={styles.price}>
          <p>Price</p>
        </div>
      </div>
      <div className={styles.carouselSection}>
        <div className={styles.carousel}>
          <div className={styles.carouselText}>
            <div className={styles.carouselTextTitle}>Triathlon coaching</div>
            <div className={styles.carouselTextContent}>
              Includes a monthly plan with swimming, running and cycling workouts for indoor and outdoor use
              and also includes a core and stretching regimen with as many changes to the plan as are needed
              to make the training fit into your schedule.
              <br />
              <br />
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>200€</a> / Month
            </div>
          </div>
          <div className={styles.carouselDarkText}>
            <div className={styles.carouselTextTitle}>
              Cycling <br />
              coaching
            </div>
            <div className={styles.carouselTextContent}>
              Includes a monthly plan for cycling with indoor and outdoor workouts and also includes a core
              and stretching regimen with as many changes to the plan as are needed to make the training fit
              into your schedule.
              <br />
              <br />
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>150€</a> / Setup
            </div>
          </div>
          <div className={styles.carouselText}>
            <div className={styles.carouselTextTitle}>
              Run <br />
              coaching
            </div>
            <div className={styles.carouselTextContent}>
              Includes a monthly plan for running and also includes a core and stretching regimen with as many
              changes to the plan as are needed to make the training fit into your schedule.
              <br />
              <br />
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>150€</a> / Setup
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondBody}>
        <div className={styles.mainBodyText + ' ' + styles.bottom}>
          Included in the price is daily feedback on the workouts, 2 calls/discussions per month, general
          nutrition guidelines and fuelling for racing and training.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <FooterMobile />
    </div>
  )
}
