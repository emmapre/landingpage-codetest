import React from 'react'
import styled from 'styled-components/macro'


const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35px;

`
const TopDot = styled.span`
  height: 3px;
  width: 3px;
  background-color: #fff;
`
const MiddleDot = styled.span`
  height: 5px;
  width: 5px;
  background-color: #fff;
`
const BottomDot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #fff;
`

export const Dots = () => {

return(

<DotContainer>
<TopDot/>
<MiddleDot/>
<BottomDot/>
</DotContainer>

)}