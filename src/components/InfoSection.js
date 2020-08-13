import React from 'react'
import styled from 'styled-components/macro'

import { Article } from '../lib/Article'

import { ReactComponent as Illustration1 } from '../assets/illustration1.svg'


const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 50px 0;
  background-color: #fff;
  color: #000;
  text-align: center;
  width: 100%;

  .articles-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 0 0;
  }

  @media (min-width: 768px){
    
    h2{
      width: 50%;
    }
    .articles-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;
    width: 60%;
  }
    }
  }
`


export const InfoSection = () => {
  return (
    <StyledInfoSection id='infoSection'>
      <h2>Vi kan hjælpe dig med digital transformation på to fronter.</h2>

      {/* ARTICLE KOMPONENTER HÄR */}
      <div className='articles-wrapper'>
  
      <Article
      svgUrl='illustration1'
      alt='person with diagrams'
        title='Strategisk rådgivning om digital transformation'
        // alt='person with charts'
        text='Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?'
      />
      <Article
      svgUrl='illustration2'
      alt='board with chart'
        title='Eksekvering af digital transformation'
        // alt='person with charts'
        text='I ved, hvad I vil, men I har brug for hjael til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a på Sitecore. Det handler om mennesker och resultater.'
      />
      </div>


      {/* article texter
Strategisk rådgivning om digital transformation
Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?

Eksekvering af digital transformation
I ved, hvad I vil, men I har brug for hjael til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a på Sitecore. Det handler om mennesker och resultater. */}


    </StyledInfoSection>
  )
}