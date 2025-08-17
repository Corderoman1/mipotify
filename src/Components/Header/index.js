import React from "react";
import { HeaderStyled } from "./styles";


const Header = (props) =>  {
    if(props.show){

        return(
            <HeaderStyled>
                <h2>mi<span >Potify</span></h2>
    
            </HeaderStyled>
        )
    }else{
                return(
            <HeaderStyled>
                <h2>mi<span>Potify</span></h2>
            </HeaderStyled>
        )
    }
}

export default Header