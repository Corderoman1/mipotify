import React from "react";
import "./styles.css"


const Header = (props) =>  {
    if(props.show){

        return(
            <header className="header">
                <h2 className="header__title">mi<span className="header__span">Potify</span></h2>
    
            </header>
        )
    }else{
                return(
            <header className="header">
                <h2 className="header__title">mi<span className="header__span">Potify</span></h2>
                <p className="header__mensaje">Se agrego a favoritos correctamente</p>
            </header>
        )
    }
}

export default Header