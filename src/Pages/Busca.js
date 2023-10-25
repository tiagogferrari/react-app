import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../Componentes/Search/search";

const Busca = () => {
  const search = useContext(SearchContext)
  const [dataExiste, setDataExiste] = useState(true)

  useEffect(() => {
    if (search.animesinfo === undefined || search.animesinfo.length === 0) {
      try {
        search.setInfo(JSON.parse(localStorage.getItem('myInfo')))
        setDataExiste(true)
      } catch (error) {
        console.log (error)
        setDataExiste = (false)
      }
    }
    console.log(search.animesinfo)
  }, [search])

  return(
    <div>
      {(dataExiste && 'Data existe') || 'Data não existe'}
    </div>
  )
}

export default Busca