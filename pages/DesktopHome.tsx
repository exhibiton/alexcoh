import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <NavigationBar />
        <div className={styles.heroTitle}>
          <div>
            Triathlon, cycling and run coaching by <u>Alex Coh</u>
          </div>
        </div>
      </div>
    </div>
  )
}
