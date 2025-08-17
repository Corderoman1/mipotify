import styled from "styled-components"

const HeaderStyled = styled.header `
    background-color: #000;
    height: 200px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    h2{
        color: #fff;
        font-size: Clamp(50px,10vw,15vw);
        text-align: center;
    }
    span{ color: ${props => props.theme.colors.primary};}
    span:hover{ color: ${props => props.theme.colors.second};}
    
`

export {
    HeaderStyled
}
