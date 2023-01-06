import NavigationBar from '../../components/NavigationBar'
import styles from './ContactDesktop.module.css'

export default function AboutDesktop() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.heroTitle}>Contact</div>
    </div>
  )
}
