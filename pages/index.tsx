import Head from 'next/head'
import { Media, MediaContextProvider } from '../components/Media'
import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'
export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Coh Triathlon, Cycling and Run Coaching</title>
        <meta name="title" content="Alex Coh Triathlon, Cycling and Run Coaching" />
        <meta
          name="description"
          content="Alex Coh provides premium endurance coaching in Triathlon, Cycling and Running."
        />
        <meta
          name="keywords"
          content="alex, alex coh, triathlon coaching, cycling coaching, running coaching, run coaching, coaching, endurance coaching"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
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
