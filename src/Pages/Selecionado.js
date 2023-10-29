import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from '../Componentes/Search/search';
import Unico from "../Componentes/Resultados/Unico";

const Selecionado = ({ onPageChange }) => {
    const search = useContext(SearchContext)
    const [dataExiste, setDataExiste] = useState(true)

    useEffect(() => {
        if (search.animeselected === undefined ||
            Object.keys(search.animeselected).length === 0
        ) {
            try {
                search.setAnimeSelected(JSON.parse(localStorage.getItem('animesingle')))
                setDataExiste(true)
            } catch (error) {
                console.log(error)
                setDataExiste(false)
            }
        }
    }, [search])

    return (
        <div>
            {(dataExiste && <Unico info={search.animeselected} onPageChange={onPageChange} />) || (
                <p>Não existe dados</p>
            )}
        </div>
    )
}

export default Selecionado