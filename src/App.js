import React from 'react'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components/macro'


import { Menu } from './components/Menu'
import { HeroSection } from './components/HeroSection'
import { InfoSection } from './components/InfoSection'
import { FormSection } from './components/FormSection'


const Container = styled.div



export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Menu />
        <HeroSection />
        <InfoSection />
        <FormSection />
      </div>
    </div>
  )
}

