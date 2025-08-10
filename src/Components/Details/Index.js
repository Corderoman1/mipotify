import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import "./styles.css"


const Details = () => {
    const [details, setDetails] = useState([])
    const [error, setError] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${id}`)
                setDetails(response.data.album[Math.floor(Math.random() * 10)])
            } catch (error) {
                setError(error) 
                console.log(error);
            
            }
        }
        fetchDetails()
        
    },[])
    console.log(details);
    
    return (
            <section>
                <h2 className="details__title">{id}</h2>
                <img src={details.strAlbumThumb} className="details__img"></img>
                <p className="details__descripcion">{details.strDescriptionEN}</p>
                <Link to = '/'>
                    <button className="details__button"> Regresar</button>
                </Link>
                {/* <img url={details[0].strAlbum3DThumb}></img> */}

            </section>
    )
}
export default Details