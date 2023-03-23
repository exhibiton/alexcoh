import Head from 'next/head'
import { Media, MediaContextProvider } from '../../../components/Media'
import Mobile from './CoachingMobile'
import Desktop from './CoachingDesktop'

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Services - Coaching | Alex Coh Triathlon, Cycling and Run Coaching</title>
        <meta
          name="description"
          content="Alex Coh provides premium endurance coaching in Triathlon, Cycling and Running."
        />
      </Head>
      <MediaContextProvider disableDynamicMediaQueries>
        <Media at="xs">
          <Mobile />
        </Media>
        <Media greaterThan="xs">
          <Desktop />
        </Media>
      </MediaContextProvider>
    </>
  )
}
