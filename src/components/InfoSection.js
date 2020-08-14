import React from 'react'
import styled from 'styled-components/macro'

import { Article } from '../lib/Article'

const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 4rem 0;
  background-color: #fff;
  color: #000;
  text-align: center;
  width: 100%;

  .articles-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0 0 0;
  }

  @media (min-width: 768px){
    height: 70vh;
    justify-content: center;

    h2 {
      width: 50%;
    }

    .articles-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;
    width: 60%;
    max-width: 800px;
    }
  }
`

export const InfoSection = () => {
  return (
    <StyledInfoSection id='infoSection'>
      <h2>Vi kan hjælpe dig med digital transformation på to fronter.</h2>
      <div className='articles-wrapper'>
        <Article
          alt='person with charts'
          title='Strategisk rådgivning om digital transformation'
          text='Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?'
        />
        <Article
          alt='board with chart'
          title='Eksekvering af digital transformation'
          text='I ved, hvad I vil, men I har brug for hjael til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a på Sitecore. Det handler om mennesker och resultater.'
        />
      </div>
    </StyledInfoSection>
  )
}