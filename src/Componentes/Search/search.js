//importa a função createContext e useState do pacote ‘react’
import { createContext, useState } from "react";

//Cria o contexto search
export const SearchContext = createContext()

//Cria um componente que aceita componentes filhos 
export const SearchProvider = ({ children }) => {
    //Cria dois estados e uma função para atualizar cada estado
    const [animesinfo, setInfoAnime] = useState([])
    const [animeselected, setAnimeselected] = useState([])

    //Cria uma função para buscar dados na API
    const search = async (searchText) => {
        try {
            const response = await fetch(
                `https://api.myanimelist.net/v2/anime?q=${searchText}&limit=4`,
                {
                    headers: {
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNhY2M3OTBiNTlmOWNkYWViZjc5MDA4MjZiMmFlN2JjNGZjODg1NGQwNjdjYjBiYjRmY2NiYjAzYjg4M2Y4OTAxYTI2Y2Y3OThkOGEyYTQzIn0.eyJhdWQiOiJkYzE2MjQxNWYxYzAxNDhjMzQxYjA1ZjU1MWQ4YjI2YiIsImp0aSI6IjNhY2M3OTBiNTlmOWNkYWViZjc5MDA4MjZiMmFlN2JjNGZjODg1NGQwNjdjYjBiYjRmY2NiYjAzYjg4M2Y4OTAxYTI2Y2Y3OThkOGEyYTQzIiwiaWF0IjoxNjk4MjAzODk3LCJuYmYiOjE2OTgyMDM4OTcsImV4cCI6MTcwMDg4NTg5Nywic3ViIjoiMTI1MzAyNTUiLCJzY29wZXMiOltdfQ.qWczHGIpebY_eLwppRg4A3x4zft0MWjv8ERletRolSeOttxhDAKDu-6vogs0cB_wMZlBig-PEjB99Gy5Pwdgdbvr_SJxAmG4LvIKgHCvg64pZineGMOW9njjwrq3BSVjoRRq20Icf2CH8FN6s8qpd8e2aIiQ4K1OVA89WSKx4QcRUNfbY4FQXthsk3bHmzctb7yPQXjJGrRGCYPXS7xVzOOst9zX0BderV2BL3XcwTNEMhAnxYaqpad_AW0r2j3rxXz0owydEy-BDMQHaGDRDeA-thI29eMub-d9auc2O-i-Vk9_8s9lbvWY3ffBf8CS-yn0fvlOcgjFmIpsgEQfJA'
                    }
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log('Houve um problema com a operação fetch: ' + error.message);
        }
    }

    //Retorna o componente que faz com que o valor do contexto esteja disponível para os childrens
    return (
        <SearchContext.Provider
            //passa como value um objeto com os estados e funções
            value={{
                search,
                animesinfo,
                setInfoAnime,
                animeselected,
                setAnimeselected,
            }}
        >
            {children}
        </SearchContext.Provider>
    )

}