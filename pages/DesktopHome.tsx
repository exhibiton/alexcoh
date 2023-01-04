import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div>
        <div className={styles.heroTitle}>
          <div>
            Triathlon, cycling and run coaching by <u>Alex Coh</u>
          </div>
        </div>
      </div>
    </div>
  )
}
