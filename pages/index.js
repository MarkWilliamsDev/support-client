import Head from 'next/head'

import ButtonContainer from '../src/components/ui/buttons/ButtonContainer'
import LinkButton from '../src/components/ui/buttons/LinkButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Support Client</title>
        <meta name="description" content="Support Client for Web Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ButtonContainer>
        <LinkButton label={'Support Tickets'} pathname={'/support/tickets'} />
      </ButtonContainer>
    </div>
  )
}
