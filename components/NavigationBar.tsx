import Image from 'next/image'
import { NavLink } from './NavLink'
import styles from './NavigationBar.module.css'

export default function NavigationBar() {
  return (
    <div>
      <div className={styles.topNav}>
        <div className={styles.navigation}>
          <div className={styles.navigationLinks}>
            <div>
              <NavLink href="/">Home</NavLink>
            </div>
            <div>
              <NavLink href="/about">About</NavLink>
            </div>
            <div>
              <NavLink href="/services/coaching">Services</NavLink>
            </div>
            <div>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <div>
              <NavLink href="/testimonials">Testimonials</NavLink>
            </div>
          </div>
        </div>
        <div className={styles.navigationSpacer}>
          <br />
        </div>

        <div className={styles.navigationLogo}>
          <Image src="/alexCohLogo.svg" alt="Alex Coh Logo" height={68} width={68} />
        </div>
      </div>
    </div>
  )
}
