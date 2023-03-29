import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import styles from './page.module.css'
import cyclist from '../images/mainCyclist.png'
import coachingPreview from '../images/coachingPreview.jpg'
import nutritionPreview from '../images/nutritionPreview.jpg'
import bikefittingPreview from '../images/bikefittingPreview.jpg'
import imgcarousel from '../images/imgcarousel.jpg'
import cohIcon from '../public/cohIcon.svg'
import coachingIcon from '../public/coachingIcon.svg'
import nutritionIcon from '../public/nutritionIcon.svg'
import bikefittingIcon from '../public/bikefittingIcon.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <NavigationBar />
        <div className={styles.heroTitle}>
          <div className={styles.heroImage}>
            <Image src={cyclist} alt="Cyclist" placeholder="blur" />
          </div>
          <div className={styles.heroText}>
            Triathlon, cycling and run <br />
            coaching by <u>Alex Coh</u>
          </div>
        </div>
        <Link href="/contact">
          <div className={styles.contactButton}>Contact Now</div>
        </Link>
        <div className={styles.cohIcon}>
          <Image src={cohIcon} alt="Coh" />
        </div>

        <div className={styles.services}>
          <div className={styles.servicesSection}>
            <div className={styles.servicesText}>
              <div className={styles.servicesTitle}>
                We offer coaching services for athletes internationally around the world
              </div>
              <div className={styles.servicesSubtitle}>
                Time to start your health and fitness journey today - discover how!
              </div>
            </div>
          </div>
        </div>
        <div className={styles.coachingSection}>
          <div className={styles.coachingText}>Coaching</div>
          <div className={styles.coachingPicture}>
            <Image src={coachingPreview} alt="Coaching" placeholder="blur" />
          </div>
          <div className={styles.coachingIcon}>
            <Image src={coachingIcon} alt="Coaching Icon" />
          </div>
          <div className={styles.coachingDescription}>
            {`Alex Coh's`} coaching system has evolved through in excess of 22 years...
          </div>
        </div>

        <div className={styles.nutritionSection}>
          <div className={styles.nutritionDescription}>
            {`Alex Coh's`} nutrition planning is custom made for every client...
          </div>
          <div className={styles.nutritionIcon}>
            <Image src={nutritionIcon} alt="Nutrition Icon" />
          </div>
          <div className={styles.nutritionPicture}>
            <Image src={nutritionPreview} alt="Nutrition" placeholder="blur" />
          </div>
          <div>
            <div className={styles.moreButtonDiv}>
              <Link href={'/services/coaching'}>
                <div className={styles.moreButton}>More</div>
              </Link>
            </div>

            <div className={styles.nutritionText}>
              Nutrition
              <br />
              Planning
            </div>
          </div>
        </div>

        <div className={styles.bikefittingSection}>
          <div>
            <Link href={'/services/nutrition'}>
              <div className={styles.moreButton}>More</div>
            </Link>
            <div className={styles.bikefittingText}>Bikefitting</div>
          </div>
          <div className={styles.bikefittingPicture}>
            <Image src={bikefittingPreview} alt="bikefitting" placeholder="blur" />
          </div>
          <div className={styles.bikefittingIcon}>
            <Image src={bikefittingIcon} alt="bikefitting Icon" />
          </div>
          <div className={styles.bikefittingDescription}>
            Alex Coh has developed bikefitting methods over many years of intensive learning...
          </div>
        </div>
        <div className={styles.moreButtonDiv}>
          <Link href={'/services/bikefit'}>
            <div className={styles.moreButton}>More</div>
          </Link>
        </div>
        <div className={styles.interestedSection}>
          <div className={styles.interestedSectionText}>
            Interested in bikefitting, endurance sports coaching or <br />
            nutrition planning? Look no further.
          </div>
          <div className={styles.getInTouch}>
            <Link href={'/contact'}>Get in touch</Link>
          </div>
        </div>
        <div className={styles.imgCarouselSection}>
          <Image src={imgcarousel} alt="Images" placeholder="blur" />
        </div>
        <div className={styles.testimonialsSection}>
          <div className={styles.testimonialsText}>Featured at:</div>
          <div className={styles.testimonialsDarkText}>Ramus</div>
          <div className={styles.testimonialsDarkText}>Rohtos Labs</div>
          <div className={styles.testimonialsDarkText}>The Zommunique</div>
          <div className={styles.testimonialsDarkText}>Pyöräily ja triathlon</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
