import React from 'react'
import styled from 'styled-components/macro'

import { Button } from '../lib/Button'

export const Form = () => {

const StyledForm = styled.form`
  width: 80%;
  margin: 2rem 0;

  @media (min-width: 768px){
    max-width: 60%;
    
    .name-input{
      min-width: 100%;
    
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`

const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 1.2rem 0 0.8rem 0;
  border: none;
  border-bottom: solid 1px rgba(256,256,256,.5);
  background: transparent;
  min-width: 100%;
  box-sizing: border-box;
  transition: all .3s linear;
  color: #fff;
  font-family: 'Gotham Thin';
  -webkit-appearance:  none; 

  &:focus {
    border-bottom: solid 1px #fff;
    outline: 0;
  }

  ::placeholder {
    color:#fff;
  }

  @media (min-width: 768px) {
    min-width: 50%;

    .name-input {
      min-width: 100%;
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
    <label className='name-input'>
      <StyledInput
        type='text'
        placeholder='Navn'
        required
        className='name-input'
      />
    </label>
    <div>
      <label>
        <StyledInput
          type='tel'
          placeholder='Mobil'
          required
        />
      </label>
      <label>
        <StyledInput
          type='email'
          placeholder='E-mail'
          required
        />
      </label>
    </div>
    <div>
      <label>
        <StyledInput
          type='text'
          placeholder='Postnr'
          required
        />
      </label>
      <label>
        <StyledInput
          type='text'
          placeholder='By'
          required
        />
      </label>
    </div>
    <Button
      type='submit'
      buttonText='Ring mig op'
      textColor='#eb5b51'
    />
  </StyledForm>
)
}