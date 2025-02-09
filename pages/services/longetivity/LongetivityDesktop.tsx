import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import NavigationBar from '../../../components/NavigationBar'
import styles from './ServicesLongetivity.module.css'
import Footer from '../../../components/Footer'
import services1 from '../../../public/services1.svg'
import longetivity from '../../../images/longetivity1.jpg'
import bikefitting2 from '../../../public/bikefitting2.svg'

export default function LongetivityDesktop() {
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
          <div className={styles.navigationLink}>
            <TabLink href="/services/longetivity">Longetivity</TabLink>
          </div>
        </div>
      </div>
      <div className={styles.coachingOne}>
        <Image src={longetivity} alt="Longetivity Coaching" placeholder="blur" />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainTitle}>
          Longevity Coaching: <br />
          Perform, Recover, Thrive
        </div>
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
          training, recovery, and nutrition strategies based on your progress and needs.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <div className={styles.carouselSection}>
        <div className={styles.carousel}>
          <div className={styles.carouselPicture}>
            <Image src={services1} alt="Longetvity 1" />
          </div>
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
          <div className={styles.carouselDoublePicture}>
            <Image src={bikefitting2} alt="Bikefitting 2" />
          </div>
        </div>
      </div>

      <div className={styles.secondBody}>
        <div className={styles.mainBodyText}>
          <div className={styles.mainTitle}>Who Is This For?</div>
          <br />
          <br />
          This coaching is for athletes looking for a sustainable performance edge, high-performers who want
          to future-proof their health, and anyone seeking a structured, science-driven approach to training,
          recovery, and longevity.
          <br />
          <br />
          Apply now for a consultation and take control of your performance, recovery, and long-term health.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
