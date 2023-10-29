import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from '../Componentes/Search/search';
import Unico from "../Componentes/Resultados/Unico";

const Selecionado = ({ onPageChange }) => {
    const search = useContext(SearchContext)

    // Criando um estado para verificar se os dados existem
    const [dataExiste, setDataExiste] = useState(true)

    // Utilizando o hook useEffect para verificar se os dados existem quando o componente é montado ou atualizado
    useEffect(() => {
        if (search.animeselected === undefined ||
            Object.keys(search.animeselected).length === 0
        ) {
            try {
                // Tentando buscar os dados do localStorage e atualizar o estado animeselected
                search.setAnimeSelected(JSON.parse(localStorage.getItem('animesingle')))
                setDataExiste(true)
            } catch (error) {
                // Se ocorrer um erro (por exemplo, se os dados não existirem no localStorage), atualiza o estado dataExiste para false
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