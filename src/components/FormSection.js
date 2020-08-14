import React from 'react'
import styled from 'styled-components/macro'
import { Form } from '../components/Form'

import { ReactComponent as Prize } from '../assets/prize.svg'

const StyledFormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 50px 0;
  background-color: #eb5b51;
  color: #fff;
  text-align: center;
  width: 100%;
  min-height: 70vh;
`

const StyledPrize = styled(Prize)`
  fill: #fff;
  height: 70px;
`

export const FormSection = () => {
  return (
    <StyledFormSection>
      <h2>Få 10 gode råd om digital transformation</h2>
      <h4>Ja tak, jeg vil gerne höre mere om digital transformation</h4>
      <Form/>
      <StyledPrize/>
      <h4>Pentia vinner pris for digital innovation 2017</h4>
    </StyledFormSection>
  )
}