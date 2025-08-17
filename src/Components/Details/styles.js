import styled from "styled-components";

const StyledDetails = styled.section`
    h2{
        font-size:${props => props.theme.fontsSize.titles};
        text-align:center;
        margin: 40px 0;
        }
    img{
        max-width:300px;
        width:95%;
        display:block;
        margin: 0 auto;
    }
    p{
        margin: 40px 20px;
        font-size: 20px;
    }
    a{
        text-decoration:none;
    }
    ${props => props.theme.buttons}
`
export default StyledDetails