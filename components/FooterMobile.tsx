import Image from 'next/image'
import styles from './Footer.module.css'
import footerLogo from '../images/footer-logo.png'

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <h3 className={styles.footerHeader}>Alex Coh</h3>
      <div className={styles.flex}>
        <div className={styles.left}>
          <p>
            © 2023 Alex Coh. <br />
            Triathlon, Cycling and <br /> Run Coaching.
          </p>
        </div>
        <div className={styles.right}>
          <p>Designed at</p>
          <Image src={footerLogo} alt="Footer Logo" />
        </div>
      </div>
    </div>
  )
}
