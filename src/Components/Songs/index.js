
import { Link } from "react-router-dom"
import "./styles.css"

const Songs = (props) => {
    
    const addFavs = () => {
        props.setfavoritos(prevState => [...prevState,props.song])
        
    }
    if(!props.favoritos.includes(props.song)){
        return (
            <>
                {
                    <article className="song">
                        <h2 className="song__title">Album:{props.song.strAlbum}</h2>
                        <p className="song__autor">Autor:{props.artist}</p>
                        <Link to={`/Details/${props.song.strAlbum}`}>
                            <button className="song__agregar">Details</button>
                        </Link>
                    </article>
                }
                
            </>
        )

    }else{
        return (
            <>
                {
                    <article className="song">
                        <h2 className="song__title">{props.song.nombre}</h2>
                        <p className="song__autor">{props.song.autor}</p>
                        <button className="song__agregar" disabled>Agregar a favoritos ❤️</button>
                    </article>
                }
                
            </>
        )
    }

}

export default Songs