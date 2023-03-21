import Image from 'next/image'
import styles from './MobileNavigationBar.module.css'
import cohIcon from '../public/alexCohLogo.svg'
import navigationLink from '../public/navigationLink.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navigationContainer}>
        <div className={styles.cohIcon}>
          <Image src={cohIcon} alt="Coh" />
        </div>
        <div className={styles.navigationIcon}>
          <Image src={navigationLink} alt="Coh" />
        </div>
      </div>
    </div>
  )
}
