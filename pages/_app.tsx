import '../styles/globals.css'
import '../styles/mobile.css'
import '../styles/about.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
