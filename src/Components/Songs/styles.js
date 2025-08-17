import styled from "styled-components";

const StyledSongs = styled.article`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 10px;
    a{
        width:100%;
        text-align:center;
        text-decoration: none;
        text-transform: uppercase;
    }
    ${props => props.theme.buttons}
`

export default StyledSongs