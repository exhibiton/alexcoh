import Head from 'next/head'
import { Media, MediaContextProvider } from '../../../components/Media'
import Mobile from './LongetivityMobile'
import Desktop from './LongetivityDesktop'

export default function Longetivity() {
  return (
    <>
      <Head>
        <title>Services - Bikefitting | Alex Coh Triathlon, Cycling, Run and Longetivity Coaching</title>
        <meta
          name="description"
          content="Alex Coh provides premium endurance coaching in Triathlon, Cycling, Running and Longetivity."
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
