import Image from 'next/image'
import styles from './mobile.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.normalTitle}>
        <b>Entrepreneurial investors.</b>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerBig}>
          <div className={styles.footerSmall}>
            <div>contact us at</div>
            <div className={styles.footerEmail}>firstname@failup.com</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
