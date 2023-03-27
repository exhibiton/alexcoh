import Image from 'next/image'
import { TabLink } from '../../../components/TabLink'
import Link from 'next/link'
import NavigationBar from '../../../components/NavigationBar'
import styles from './ServicesBikefitting.module.css'
import bikefitting from '../../../images/bikefitting.jpg'
import Footer from '../../../components/Footer'
import services1 from '../../../public/services1.svg'
import bikefitting2 from '../../../public/bikefitting2.svg'

export default function BikeFittingDesktop() {
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
        <Image src={bikefitting} alt="Bikefitting Services" placeholder="blur" />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainTitle}>
          I have developed my bikefitting <br />
          methods over many years of <br />
          intensive learning.
        </div>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.mainBodyText}>
          Fitting using different methodologies, all centered around a passion for helping people of all
          shapes and sizes feel more comfortable and perform better on their bicycle. <br /> <br />
          Your position will be set up based upon your unique physiology and central nervous system response
          to stimulus, with a focus on; neuromechanical efficiency providing an increase in power, a decrease
          in respiratory rate, an increase in pedalling efficiency, and most importantly, comfort.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <div className={styles.carouselSection}>
        <div className={styles.carousel}>
          <div className={styles.carouselPicture}>
            <Image src={services1} alt="Bikefitting 1" />
          </div>
          <div className={styles.carouselText}>
            <div className={styles.carouselTextTitle}>Bikefitting</div>
            <div className={styles.carouselTextContent}>
              Duration is 3 hrs or longer. It varies depending on how many problems we need to address during
              the fit and your adaptation time to the changes.
            </div>
            <div className={styles.carouselPrice}>
              <a className={styles.carouselPriceBold}>275€</a>
            </div>
          </div>
          <div className={styles.carouselDoublePicture}>
            <Image src={bikefitting2} alt="Bikefitting 2" />
          </div>
        </div>
      </div>

      <div className={styles.secondBody}>
        <div className={styles.mainBodyText}>
          Duration is 3 hrs or longer. It varies depending on how many problems we need to address during the
          fit and your adaptation time to the changes. <br /> <br />
          First part of the bikefit is an interview followed by muscle flexibility and joint mobility testing,
          and then you will get on the bike and warm up. At this point I will start to make changes to your
          position to make you a better performing athlete. Comfort + performance equal SPEED and efficiency.
          All parts used to make your position better cost extra.(saddles, shims, wedges, cleats etc). <br />{' '}
          <br />
          Every bikefit comes with a money back if not happy guarantee provided you change the parts I
          recommend and follow the core strengthening and/or stretching regimen I provide in the report you
          receive after the bikefit.
        </div>
        <div className={styles.getInTouch}>
          <Link href={'/contact'}>Get in touch</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
