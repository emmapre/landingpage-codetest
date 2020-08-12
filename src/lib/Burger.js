import React from 'react'
import styled from 'styled-components/macro'

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  span {
    width: 2.5rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#5d5d5d' : '#fff'};
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger aria-label="Toggle menu" open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}