import axios from "axios";
import { useEffect, useState } from "react";
import Songs from "../Songs";
import "./styles.css"

const SearchResults = (props) => {
  const [favoritos,setfavoritos] = useState([])
  const [songs,setSongs] = useState([])
  const [artist,setArtist] = useState("")
  const [error, setError] = useState(null)



  useEffect(() =>{
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/discography.php?s=${artist}`)
        setSongs(response.data.album)

        
        
      } catch (error) {
        setError(error)
        setSongs(null)
        
      }
    }
    fetchSongs()
  },[artist] )
 

  const buscar = (e) =>{
    e.preventDefault()
    setArtist(e.target[0].value)
    e.target[0].value = ""
  }
  
        return (

            <>
                <form onSubmit={buscar} className="formulario">
                    <input type="text" id="buscar" className="formulario__input"></input>
                    <button type="submit" className="formulario__button">BUscar</button>
                </form>
                <section className="results">

                {
                    !songs ? (!error ? (<p className="search__mensaje">Realiza una busqueda por artista Ejemplo: Ed Sheeran</p>) 
                    : (<p className="search__mensaje">Error al cargar la pagina</p>)) 
                    : (

                        songs.map(song => (
                            
                            <Songs 
                            song={song} 
                            artist={artist}
                            favoritos={favoritos}
                            setfavoritos={setfavoritos}
                            key = {song.strAlbum}
                            />
                        ))
                    )
                    
                }
                </section>
            </>
        )


}

export default SearchResults