import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import NavigationBar from '../../../components/NavigationBar'
import styles from './NutritionMobile.module.css'
import nutrition1 from '../../../images/nutrition1.jpg'
import FooterMobile from '../../../components/FooterMobile'

export default function NutritionDesktop() {
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
          {`Alex Coh's nutrition planning is`} <br />
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
        <div className={styles.price}>
          <p>Price</p>
        </div>
      </div>

      <div className={styles.carouselSection}>
        <div className={styles.carousel}>
          <div className={styles.carouselText}>
            <div className={styles.carouselTextTitle}>
              Non coached <br /> athletes
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>300€</a> / Setup
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>100€</a> / Month
            </div>
            <div className={styles.carouselTextContent}>
              Continuous support is not <br /> mandatory but is <br /> recommended
            </div>
          </div>
          <div className={styles.carouselDarkText}>
            <div className={styles.carouselTextTitle}>Coached athletes</div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>150€</a> / Setup
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>20€</a> / Month
            </div>
            <div className={styles.carouselTextContent}>
              Continuous support is not <br /> mandatory but is <br /> recommended
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondBody}>
        <div className={styles.mainBodyText}>
          All nutrition plans include a long interview with you where we focus on your nutrition habit
          history, food allergies and go through your overall feeling of energy levels, sleep quality,
          recovery. <br /> <br />
          Nutrition plans are then custom built for every customer based on that interview and include
          complete recipes that are simple and efficient. The key to an efficient nutrition plan is to make it
          user friendly – easy to execute and delicious.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <FooterMobile />
    </div>
  )
}
