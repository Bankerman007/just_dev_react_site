import styled from "styled-components";


export const StyledNav = styled.nav`
    background: ;
    color: blue;
    height: 30px;
    margin-top: -40px;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 1px;
    position: absolute;
    top: 0;
    z-index: 1;
    padding: 15px;
    @media (max-width: 768px) {
        height: 3px;
    }
    
    
`
export const StyledNavLogo = styled.nav`
    background:;
    color: dark;
    height: 110px;
    margin-top: -15px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1px;
    position: sticky;
    top:0
    z-index: 100;
    padding: 50px 25px;
`