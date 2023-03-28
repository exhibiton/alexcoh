import NavigationBar from '../../components/NavigationBar'
import styles from './ContactDesktop.module.css'
import Image from 'next/image'
import contact from '../../public/contact.svg'
import Footer from '../../components/Footer'
import useContactForm from '../../hooks/useContactForm'

export default function AboutDesktop() {
  const { contactForm, setContactForm, isLoading, handleSubmit } = useContactForm()

  function handleInterested(text: string) {}

  const interestedlist = [
    {
      text: 'TRIATHLON COACHING',
      selected: false,
    },
    {
      text: 'CYCLING COACHING',
      selected: false,
    },
    {
      text: 'RUNNING COACHING',
      selected: false,
    },
    {
      text: 'NUTRITION PLANNING',
      selected: false,
    },
    {
      text: 'BIKEFITTING',
      selected: false,
    },
  ]
  return (
    <div>
      <NavigationBar />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.formTitle}>Get in touch</div>
            <div className={styles.formSubTitle}>{`I'm interested in`}</div>
            <div className={styles.buttonRow}>
              {interestedlist &&
                interestedlist.map((obj, index) => (
                  <button
                    onClick={() => handleInterested('TRIATHLON COACHING')}
                    className={styles.interestBtn}>
                    {obj.text}
                  </button>
                ))}
            </div>
            <div className={styles.formInput}>
              <input required type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className={styles.formInput}>
              <input required type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className={styles.formInput}>
              <input required type="text" id="phone" name="phone" placeholder="Phone" />
            </div>
            <div className={styles.formInput}>
              <input required type="text" id="message" name="message" placeholder="Message" />
            </div>
            <button type="submit" className={styles.getInTouch}>
              Send Message
            </button>
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
function useContactUs(): { setFormData: any; isLoading: any; handleSubmit: any; formData: any } {
  throw new Error('Function not implemented.')
}
