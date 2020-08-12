import React from 'react'

import { Article } from '../lib/Article'

export const InfoSection = () => {
  return (
    <section>
      <h2>Vi kan hjælpe dig med digital transformation på to fronter.</h2>

      {/* ARTICLE KOMPONENTER HÄR */}

      <Article
        title='Strategisk rådgivning om digital transformation'
        svg='illustration1.svg'
        alt='person with charts'
        text='Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?'
      />
      {/* article texter
Strategisk rådgivning om digital transformation
Udnytter din virksomhed sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?

Eksekvering af digital transformation
I ved, hvad I vil, men I har brug for hjael til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a på Sitecore. Det handler om mennesker och resultater. */}


    </section>
  )
}