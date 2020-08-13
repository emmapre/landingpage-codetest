import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  min-width: 64px;
  min-height: 36px;
  width: ${props => props.width || '250px'};
  height: ${props => props.height || '70px'};
  padding: 0 16px 0 16px;
  border-radius: 3px;
  background-color: ${props => props.background};
  border: none;
  color: 
    ${props => props.color || '#000'};
  margin: 20px;
  font-family: ${props => props.fontFamily || 'Gotham Bold'};
  font-size: ${props => props.fontSize || '18px'};

  &:hover{
    cursor: pointer;
  }
`

const Icon = styled.span`
   padding-right: 8px;
  padding-left: -4px;
`

export const Button = ({
  onClick,
  icon,
  buttonText,
  backgroundColor,
  textColor,
  borderProperties,
  width,
  height,
  fontFamily,
  fontSize,
  type
}) => {
  return (

    <StyledButton
      onClick={onClick}
      background={backgroundColor}
      border={borderProperties}
      width={width}
      height={height}
      color={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      type={type}
    >
      {icon && <Icon>{icon}</Icon>}
      {buttonText}
    </StyledButton >
  )
}

