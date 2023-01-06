import NavigationBar from '../../components/NavigationBar'
import styles from './ServicesDesktop.module.css'

export default function AboutDesktop() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.heroTitle}>Services</div>
    </div>
  )
}
