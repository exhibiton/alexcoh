import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import styles from './LongetivityMobile.module.css'
import longetivity from '../../../images/longetivity1.jpg'
import FooterMobile from '../../../components/FooterMobile'
import Navbar from '../../../components/mobil/common/Navbar'

export default function BikeFittingDesktop() {
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
          <div className={styles.navigationLink}>
            <TabLink href="/services/longetivity">Longetivity Coaching</TabLink>
          </div>
        </div>
      </div>
      <div className={styles.coachingOne}>
        <Image src={longetivity} alt="Bikefitting Services" placeholder="blur" />
      </div>

      <div className={styles.mainContainer}>
        <p className={styles.mainTitle}>
          Longevity Coaching: <br />
          Perform, Recover, Thrive
        </p>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.mainBodyText}>
          Endurance and strength coaching tailored to your sport, fitness level, and long-term goals. Whether
          you're focused on endurance sports, gym training, or integrating yoga for mobility and injury
          prevention, your program is fully customized to support your needs.
          <br /> <br />
          Advanced recovery techniques including breathwork, cold exposure, contrast therapy, structured
          mobility routines, and deload strategies to accelerate recovery and prevent injuries.
          <br /> <br />
          Precision nutrition and hydration guidance designed to fuel performance, enhance recovery, and
          promote longevity. Your plan evolves based on real-time data and blood test results to ensure
          optimal nutritional support.
          <br /> <br />
          Sleep optimization strategies to improve sleep quality, regulate circadian rhythms, and maximize
          physical and cognitive recovery.
          <br /> <br />
          Regular blood testing and interpretation using third-party lab services (not included in the price).
          Biomarker analysis provides deep insights into performance, recovery, and overall health, allowing
          for precise adjustments to your training and nutrition.
          <br /> <br />
          Unlimited access to your coach, with direct, real-time communication whenever you need adjustments,
          guidance, or troubleshooting. No rigid schedules—just full support whenever it's needed.
          <br /> <br />
          Ongoing support and adaptation through weekly check-ins and continuous data tracking to refine
          training, recovery, and nutrition strategies based on your progress and needs.{' '}
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
            <div className={styles.carouselTextTitle}>Longetivity Coaching</div>
            <div className={styles.carouselTextContent}>
              €400 per month, including full access to coaching, program adaptations, and biomarker-driven
              adjustments.
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>400€</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondBody}>
        <div className={styles.mainBodyText}>
          <p>
            <h2>Who Is This For?</h2>
            This coaching is for athletes looking for a sustainable performance edge, high-performers who want
            to future-proof their health, and anyone seeking a structured, science-driven approach to
            training, recovery, and longevity.
            <br />
            <br />
            Apply now for a consultation and take control of your performance, recovery, and long-term health.
          </p>
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <FooterMobile />
    </div>
  )
}
