import React from "react";
import "./styles.css"

const Librery = (props) => {   

    
    if(props.favoritos.length === 0){
        return(
            <h2 className="favoritos__title">Aun no tienes canciones favoritas</h2>
        )
    }else{
        return (
            <section className="favoritos">
                <h2 className="favoritos__title">Mis favoritos</h2>
                <table className="favoritos__table">
                    <thead className="favoritos__thead">
                        <tr className="favoritos__theadTr">
                            <td className="favoritos__theadtd">Nombre</td>
                            <td className="favoritos__theadtd">Autor</td>
                            <td className="favoritos__theadtd">Duracion</td>
                            <td className="favoritos__theadtd">Tocar</td>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                props.favoritos.map(song =>(
                                    <tr className="favoritos__itemTr" key={song.id}>
                                        <td className="favoritos__itemtd">{song.nombre}</td>
                                        <td className="favoritos__itemtd">{song.autor}</td>
                                        <td className="favoritos__itemtd">{song.duracion}</td>
                                        <td className="favoritos__itemtd">
                                            <button className="favoritos__play">Play</button>
                                        </td>
                                    </tr>
                                ))
                            }

                    </tbody>
                </table>
    

            </section>
        )

    }

}

export default Librery