import React from 'react'
import styled from 'styled-components/macro'
import illustration1 from '../assets/illustration1.svg'

const StyledArticle = styled.article`
  min-width: 200px;
  min-height: 150px;
  width: ${props => props.width || '200px'};
  height: ${props => props.height};
  padding: 0 16px 0 16px;
  margin: 0;
  border: ${props => props.border || 'none'};
  color: ${props => props.color || '#000'};
  margin: 0px;

  img{
    height: 150px;
  }

  h4{
    font-family: 'Gotham Bold';
    margin: 0 0 20px 0 ;
  }
`

export const Article = ({ 
  textColor,
  borderProperties,
  width,
  height,
  alt,
  title,
  text
}) => {
  return (
    <StyledArticle
      border={borderProperties}
      width={width}
      height={height}
      color={textColor}>
      <img src={illustration1} alt={alt}/>
      <h4>{title}</h4>
      <p>{text}</p>
    </StyledArticle>
  )
}