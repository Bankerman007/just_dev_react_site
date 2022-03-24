import styled from 'styled-components';



export const ContainerBg = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50;
    overflow: hidden;

`


export const FooterStyled = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px 25px;
    bottom: auto;
    position:bottom;
    background-color:black;
    z-index:100;
    font-size: 15px;
    color: White;
    line-height: .5;
    @media (max-width: 768px) {
        font-size: 10px
`