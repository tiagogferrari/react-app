import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../Componentes/Search/search";
import Lista from "../Componentes/Resultados/Lista";
import './busca.css';

const Busca = ({ onPageChange }) => {
  const search = useContext(SearchContext)
  const [dataExiste, setDataExiste] = useState(true)

  useEffect(() => {
    if (search.animesinfo === undefined || search.animesinfo.length === 0) {
      try {
        search.setInfo(JSON.parse(localStorage.getItem('myInfo')))
        setDataExiste(true)
      } catch (error) {
        console.log(error)
        setDataExiste(false)
      }
    }
  }, [search]);

  return (
    <div className="list">
      {(dataExiste && <Lista data={search.animesinfo} onPageChange={onPageChange} />) || 'Data não existe'}
    </div>
  )
}

export default Busca