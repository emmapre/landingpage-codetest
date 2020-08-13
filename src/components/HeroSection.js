import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-scroll'

import { Dots } from '../lib/Dots'

import { ReactComponent as Zeppeliner } from '../assets/zeppeliner.svg'

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  background-color: #2a2a2c;
  color: #fff;
  text-align: center;

  h1 {
    margin:0 0 15px 0;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
  }

  @media (min-width: 768px){
    height: 100vh;
    .text-container {
      width: 40%;
    }
  }
`

const StyledZeppeliner = styled(Zeppeliner)`
  fill: #fff;
  height: 250px;
  margin: -30px;
`

const StyledP = styled.p`
  display: flex;
  align-self: flex-start;
  margin: 10px 0 0 10px;
  font-size: 0.8em;
  font-weight: bold;
  
  @media (min-width: 768px){
   margin: 20px;
    }
`

const ScrollDiv = styled.div`
  cursor: pointer;
`

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledP>Lorem ipsum</StyledP>
      <div className='text-container'>
        <StyledZeppeliner />
        <h1>Digital Transformation</h1>
        <h2>Rådgivning. Implementering. Resultat.</h2>
        <p>Hvordan bliver din virksomhed en digital vinder i fremtiden? Hvilke tiltag skal det til strategisk och taktisk for at dreje forretningen i den rigtige retning? Hvilke elementer indeholder en succesfuld digital transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen fram strategisk rådgivning till implementering.</p>
      </div>
      <ScrollDiv>
        <Link smooth={true} to='infoSection'>
          <p>Start din rejse her</p>
          <Dots/>
        </Link>
      </ScrollDiv>
    </StyledHeroSection>
  )
}