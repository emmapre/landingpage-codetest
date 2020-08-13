import React from 'react'
import styled from 'styled-components/macro'

const StyledInputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  width: ${props => props.width};

  label {
    position: absolute;
    top: calc(50% - 7px);
    left: 5px;
    opacity: 0;
    transition: all .3s ease;
  }

  input:not(:placeholder-shown){
    padding: 28px 0px 12px 0px;
  }

  input:not(:placeholder-shown) + label{
    transform: translateY(-10px);
    opacity: .7;
  }
`

const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 1.2rem 0;
  border: none;
  border-bottom: solid 1px rgba(256,256,256,.5);
  background: transparent;
  min-width: 100%;
  box-sizing: border-box;
  transition: all .3s linear;
  color: #fff;
  font-family: 'Gotham Thin';
  -webkit-appearance:  none; 
  &:focus{
    border-bottom: solid 1px #fff;
    outline: 0;
  }
  ::placeholder{
  color:#fff;
}
`
const StyledLabel = styled.label`
  font-size: 12.5px;
  color: #fff;
  opacity: .8;
`

export const Input = ({
  placeholder,
  labelFor,
  type,
  value,
  required
}) => {

return (
  <StyledInputContainer>
    <StyledInput
      placeholder={placeholder}
      type={type}
      required={required}
    />
    <StyledLabel for={labelFor}>{placeholder}</StyledLabel>
  </StyledInputContainer>
)

}