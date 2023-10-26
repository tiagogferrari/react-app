import { createContext, useState } from "react";

export const SearchContext = createContext()

//Cria um componente que aceita componentes filhos 
export const SearchProvider = ({ children }) => {
    //Cria dois estados e uma função para atualizar cada estado
    const [animesinfo, setInfoAnime] = useState([])
    const [animeselected, setAnimeselected] = useState([])

    const setInfo = (data) => {
        setInfoAnime(data)
    }

    const setSelected = (data) => {
        setAnimeselected(data)
    }

    //Cria uma função para buscar dados na API
    const search = (searchText) => {
        return fetch(
            `/api/anime?q=${searchText}`,
            {
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhNWEzMGU1N2FmNzFjNzA3NzZhMjVmN2Q5MzhhYTdmY2ZkYTAyYzdlNjdlZWM1NDY4MTM3NDczZDc1ZDQ0YTEzMjEwYTI2NTRjYzZmM2EwIn0.eyJhdWQiOiJkYzE2MjQxNWYxYzAxNDhjMzQxYjA1ZjU1MWQ4YjI2YiIsImp0aSI6IjJhNWEzMGU1N2FmNzFjNzA3NzZhMjVmN2Q5MzhhYTdmY2ZkYTAyYzdlNjdlZWM1NDY4MTM3NDczZDc1ZDQ0YTEzMjEwYTI2NTRjYzZmM2EwIiwiaWF0IjoxNjk4MjQwODA0LCJuYmYiOjE2OTgyNDA4MDQsImV4cCI6MTcwMDkyMjgwNCwic3ViIjoiMTI1MzAyNTUiLCJzY29wZXMiOltdfQ.X_HN9gg4GBRR8FX6asSLL4qqKm1QQ6reZMVXg2KVeX2bA38JvoJsh4gobBFgHZk57s_1kbS30Zr2BjvKendpCAOI1lvQmx-jeF1sCRkb6d2G59xoT_C_r-g7yR3dElqWJCb1fjQbPosP2m6bXy0xxuxRzXgH-t50c4PKl-1BGN5QTfBWBayu6N-LZiurxD2ATdWP_gXob7neC-wcD-O660-3epxxJcJXOGCxY1537ZiVIH7WxVEqYOq6wesCaWo3X7ul4j_AF8LMVKzh8V87FEbmOmWs0SqmYi5t3z-4lOEo10ViSyivo7CLCAPWd1fXEIxf2KttVy8GOH6duj9kiA'
                }
            }
        ).then((response) => response.json());
    }

    //Retorna o componente que faz com que o valor do contexto esteja disponível para os childrens
    return (
        <SearchContext.Provider
            //passa como value um objeto com os estados e funções
            value={{
                search,
                animesinfo,
                setInfo,
                animeselected,
                setSelected,
            }}
        >
            {children}
        </SearchContext.Provider>
    )

}