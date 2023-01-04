import Head from 'next/head'
import { Media, MediaContextProvider } from '../components/Media'
import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Failup Ventures</title>
        <meta
          name="description"
          content="We're entrepreneurial investors from the next generation. Failup Ventures invests in early-stage startups in the US and Nordics."
        />
      </Head>
      <MediaContextProvider disableDynamicMediaQueries>
        <Media at="xs">
          <MobileHome />
        </Media>
        <Media greaterThan="xs">
          <DesktopHome />
        </Media>
      </MediaContextProvider>
    </>
  )
}
