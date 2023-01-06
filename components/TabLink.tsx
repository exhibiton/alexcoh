import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styles from './TabLink.module.css'

export interface TabLinkProps extends LinkProps {
  href: string
  children: React.ReactNode
}

export function TabLink({ children, href, ...props }: TabLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === href
  return (
    <div
      // Change style depending on whether the link is active
      className={isActive ? styles.activeNavLink : styles.navLink}>
      <Link href={`${href}`}>{children}</Link>
    </div>
  )
}
