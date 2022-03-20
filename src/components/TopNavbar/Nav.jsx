import React from 'react'
import { StyledNav, StyledNavLogo } from './Nav.styled';
import Button1 from './button1';
import logo from './logo.jpg';

export default function Nav() {
  return (
  <>
    <StyledNavLogo>
          <img src= {logo} alt="Logo" />
          
    </StyledNavLogo>
   
    <StyledNav>
          <Button1 />
          
    </StyledNav>
      
  </>
  )
}
