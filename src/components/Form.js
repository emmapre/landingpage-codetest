import React from 'react'
import styled from 'styled-components/macro'

import { Input } from '../lib/Input'
import { Button } from '../lib/Button'

export const Form = () => {

const StyledForm = styled.form`
  @media (min-width: 768px){
    width: 80%;
  }
  div {
    @media (min-width: 768px){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`

const handleSubmit = event => {
  event.preventDefault()
  alert('Vi ringer snart!')
}

return (
  <StyledForm
  onSubmit={handleSubmit}
  >
    <Input
      placeholder='Navn'
      labelFor='Navn'
      type='text'
      required='true'
    />
    <div>
      <Input
        placeholder='Mobil'
        labelFor='Mobil'
        type='tel'
        required='true'
      />
      <Input
        placeholder='E-mail'
        labelFor='E-mail'
        type='email'
        required='true'
      />
      <Input
        placeholder='Postnr'
        labelFor='Postnr'
        type='text'
        required='true'
      />
      <Input
        placeholder='By'
        labelFor='By'
        type='text'
        required='true'
      />
    </div>
    <Button
      type='submit'
      buttonText='Ring mig op'
      textColor='#eb5b51'
    />
  </StyledForm>
)
}