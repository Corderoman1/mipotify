
import { Link } from "react-router-dom"
import StyledSongs from "./styles"

const Songs = (props) => {
    
    const addFavs = () => {
        props.setfavoritos(prevState => [...prevState,props.song])
        
    }
    if(!props.favoritos.includes(props.song)){
        return (
            <>
                {
                    <StyledSongs className="song">
                        <h2 className="song__title">Album:{props.song.strAlbum}</h2>
                        <p className="song__autor">Autor:{props.artist}</p>
                        <Link to={`/Details/${props.song.strAlbum}`}>
                            <button className="song__agregar">Details</button>
                        </Link>
                    </StyledSongs>
                }
                
            </>
        )

    }else{
        return (
            <>
                {
                    <StyledSongs className="song">
                        <h2 className="song__title">{props.song.nombre}</h2>
                        <p className="song__autor">{props.song.autor}</p>
                        <button className="song__agregar" disabled>Agregar a favoritos ❤️</button>
                    </StyledSongs>
                }
                
            </>
        )
    }

}

export default Songs