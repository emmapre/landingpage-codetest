import React from 'react'
import styled from 'styled-components/macro'

const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  height: 30px;
`
const TopDot = styled.span`
  height: 5px;
  width: 5px;
  background-color: #fff;
  border-radius: 50%;
`
const MiddleDot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #fff;
  border-radius: 50%;
`
const BottomDot = styled.span`
  height: 9px;
  width: 9px;
  background-color: #fff;
  border-radius: 50%;
`

export const Dots = () => {

return(

<DotContainer>
<TopDot/>
<MiddleDot/>
<BottomDot/>
</DotContainer>

)}