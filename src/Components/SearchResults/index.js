
import Songs from "../Songs";
import "./styles.css"

const SearchResults = (props) => {


    return (
        <section className="results">
            {
                props.mySongs.map(song => (
                    
                    <Songs 
                        song={song} 
                        favoritos={props.favoritos}
                        setfavoritos={props.setfavoritos} 
                        key={song.id}
                    />
                ))

            }
        </section>
    )

}

export default SearchResults