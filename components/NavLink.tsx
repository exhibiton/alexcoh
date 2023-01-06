// 'use client'

// import Link from 'next/link'
// import { useSelectedLayoutSegment } from 'next/navigation'

// // This *client* component will be imported into a blog layout
// export default function BlogNavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   // Navigating to `/blog/hello-world` will return 'hello-world'
//   // for the selected layout segment
//   const segment = useSelectedLayoutSegment()
//   const isActive = href === segment

//   return (
//     <Link
//       href={`${href}`}
//       // Change style depending on whether the link is active
//       className={isActive ? 'activeNavLink' : 'navLink'}>
//       {children}
//     </Link>
//   )
// }

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavLink.module.css'

export interface NavLinkProps extends LinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === href
  console.log(`isActive = ${isActive} router.pathname = ${router.pathname} and href = ${href}`)
  return (
    <div
      // Change style depending on whether the link is active
      className={isActive ? styles.activeNavLink : styles.navLink}>
      <Link href={`${href}`}>{children}</Link>
    </div>
  )
}
