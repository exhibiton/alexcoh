import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerEmail}>ac@alexcohcoaching.com</div>
      <div className={styles.footerAddress}>Kalliomäki 39A, 02490, Pickala, Finland</div>
    </div>
  )
}
