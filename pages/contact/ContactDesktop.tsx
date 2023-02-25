import NavigationBar from '../../components/NavigationBar'
import styles from './ContactDesktop.module.css'
import Image from 'next/image'
import contact from '../../public/contact.svg'
import Footer from '../../components/Footer'

export default function AboutDesktop() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.container}>
        <form>
          <div className={styles.form}>
            <div className={styles.formTitle}>Get in touch</div>
            <div className={styles.formSubTitle}>{`I'm interested in`}</div>
            <div className={styles.buttonRow}>
              <div className={styles.interestBtn}>TRIATHLON COACHING</div>
              <div className={styles.interestBtn}>CYCLING COACHING</div>
              <div className={styles.interestBtn}>RUNNING COACHING</div>
              <div className={styles.interestBtn}>NUTRITION PLANNING</div>
              <div className={styles.interestBtn}>BIKEFITTING</div>
            </div>
            <div className={styles.formInput}>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className={styles.formInput}>
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className={styles.formInput}>
              <input type="text" id="phone" name="phone" placeholder="Phone" />
            </div>
            <div className={styles.formInput}>
              <input type="text" id="message" name="message" placeholder="Message" />
            </div>
            <div className={styles.getInTouch}>
              <a href={'/contact'}>Send Message</a>
            </div>
          </div>
          <div className={styles.bottomPicture}>
            <Image src={contact} alt="About 2" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
