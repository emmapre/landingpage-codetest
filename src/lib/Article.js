import React from 'react'
import styled from 'styled-components/macro'

const StyledArticle = styled.article`
  min-width: 64px;
  min-height: 36px;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0 16px 0 16px;
  border-radius: 3px;
  background-color: ${props => props.background};
  border: ${props => props.border};
  color: 
    ${props => props.color || '#000'};
  margin: 20px;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};

  &:hover{
    cursor: pointer;
  }
`

export const Article = (
  backgroundColor,
  textColor,
  borderProperties,
  width,
  height,
  fontFamily,
  fontSize,
  svg,
  alt,
  title,
  text,
) => {
  return (
    <StyledArticle
      background={backgroundColor}
      border={borderProperties}
      width={width}
      height={height}
      color={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}>
      {svg && <img src={svg} alt={alt} />}
      {title && <h4>{title}</h4>}
      {text && <p>{text}</p>}
    </StyledArticle>
  )
}