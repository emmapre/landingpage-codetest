import React from 'react'
import styled from 'styled-components/macro'

import {Dots} from '../lib/Dots'

import { ReactComponent as Zeppeliner } from '../assets/zeppeliner.svg'
// svartgår färg 2a2a2c

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2a2c;
  color: #fff;
  text-align: center;

`

const StyledZeppeliner = styled(Zeppeliner)`
  fill: #fff;
  height: 200px;
`

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledZeppeliner />
      <h1>Digital Transformation</h1>
      <h3>Rådgivning. Implementering. Resultat.</h3>
      <p>Hvordan bliver din virksomhed en digital vinder i fremtiden? Hvilke tiltag skal det til strategisk och taktisk for at dreje forretningen i den rigtige retning? Hvilke elementer indeholder en succesfuld digital transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen fram strategisk rådgivning till implementering.</p>
      <p>Start din rejse her</p>
      <Dots/>
    </StyledHeroSection>
  )
}