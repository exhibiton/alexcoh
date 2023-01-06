import NavigationBar from '../../components/NavigationBar'
import styles from './AboutDesktop.module.css'

export default function AboutDesktop() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.heroTitle}>About</div>
    </div>
  )
}
