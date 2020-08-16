import React from 'react'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components/macro'

import { Menu } from './components/Menu'
import { HeroSection } from './components/HeroSection'
import { InfoSection } from './components/InfoSection'
import { FormSection } from './components/FormSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    margin:70px 0 0 0;
  }

  @media (min-width: 768px){
    main {
    margin:0 0 0 70px;
  } }
`

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Menu />
        <main>
          <HeroSection />
          <InfoSection />
          <FormSection />
        </main>
      </Container>
    </div>
  )
}

