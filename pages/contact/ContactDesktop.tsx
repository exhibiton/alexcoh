import NavigationBar from '../../components/NavigationBar'
import styles from './ContactDesktop.module.css'
import Image from 'next/image'
import contact from '../../public/contact.svg'
import Footer from '../../components/Footer'
import useContactForm from '../../hooks/useContactForm'
import { useState } from 'react'

interface InterestedItem {
  text: string
  selected: boolean
}

export default function AboutDesktop() {
  const { contactForm, setContactForm, isLoading, handleSubmit } = useContactForm()

  const interested: InterestedItem[] = [
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
  const [interestedList, setInterestedList] = useState<InterestedItem[]>(interested)
  const [selectedList, setSelectedList] = useState<string[]>([])

  const handleInterested = (value: InterestedItem) => {
    const data = interestedList.map((obj: InterestedItem) => {
      if (obj.text === value.text) {
        obj.selected = !obj.selected
        if (obj.selected) {
          setSelectedList([...selectedList, obj.text])
        } else {
          setSelectedList(selectedList.filter((item) => item !== obj.text))
        }
      }
      return obj
    })
    setInterestedList(data)
    console.log(selectedList, 'selectedList')
    setContactForm({ ...contactForm, interested: selectedList.toString() })
  }

  return (
    <div>
      <NavigationBar />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.formTitle}>Get in touch</div>
            <div className={styles.formSubTitle}>{`I'm interested in`}</div>
            <div className={styles.buttonRow}>
              {interestedList &&
                interestedList.map((obj, index) => (
                  <span
                    key={index}
                    onClick={() => handleInterested(obj)}
                    className={obj.selected ? styles.activeinteteredbtn : styles.interestBtn}>
                    {obj.text}
                  </span>
                ))}
            </div>
            <div className={styles.formInput}>
              <input
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                value={contactForm.name}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className={styles.formInput}>
              <input
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                value={contactForm.email}
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={styles.formInput}>
              <input
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                value={contactForm.phone}
                required
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className={styles.formInput}>
              <input
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                value={contactForm.message}
                required
                type="text"
                id="message"
                name="message"
                placeholder="Message"
              />
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
