import Head from 'next/head'
import { Media, MediaContextProvider } from '../components/Media'
import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Coh Triathlon, Cycling and Run Coaching</title>
        <meta
          name="description"
          content="Alex Coh provides premium endurance coaching in Triathlon, Cycling and Running."
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
