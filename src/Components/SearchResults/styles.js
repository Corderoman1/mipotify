import styled from "styled-components";


const StyledSearchResults = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input[type='text']{
        max-width: 600px;
        width:95%;
        margin: 20px;
        height:40px;
        border-radius: 10px;

    };
    ${props => props.theme.buttons};
`

const StyledSection = styled.section`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items:center;
    margin: 40px auto;
`

export {    
    StyledSearchResults,
    StyledSection
} 