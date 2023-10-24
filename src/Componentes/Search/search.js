//importa a função createContext e useState do pacote ‘react’
import { createContext, useState } from "react";

//Cria o contexto search
export const SearchContext = createContext()

//Cria um componente que aceita componentes filhos 
export const SearchProvider = ({children}) => {
    //Cria dois estados e uma função para atualizar cada estado
    const [animesinfo, setInfoAnime] = useState([])
    const [animeunico, setAnimeUnico] = useState([])
  
    //Cria uma função para buscar dados na API
    const search = (searchText) => {
      return fetch(
        `https://api.jikan.moe/v3/search/anime?q=${searchText}&limit=20`  
      ).then((response) => response.json())
    }

    //Retorna o componente que faz com que o valor do contexto esteja disponível para os childrens
    return (
        <SearchContext.Provider
            //passa como value um objeto com os estados e funções
            value = {{
                search,
                animesinfo,
                setInfoAnime,
                animeunico,
                setAnimeUnico,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}
