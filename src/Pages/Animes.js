import React, { useContext, useEffect } from "react";
import { SearchContext } from "../Componentes/Search/search";

const Animes = () => {
  
  const { search } = useContext(SearchContext)
  useEffect(() => {
    search('OnePiece').then((data) => {
      console.log(data)
    })
  }, [search])
  
  return(
    <div>animes</div>
  )
}

export default Animes