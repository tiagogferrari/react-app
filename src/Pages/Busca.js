import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../Componentes/Search/search";
import Lista from "../Componentes/Resultados/Lista";

const Busca = ({ onPageChange }) => {
  // Utilizando o contexto de busca
  const search = useContext(SearchContext)
  // Criando um estado para verificar se os dados existem
  const [dataExiste, setDataExiste] = useState(true)

  // Utilizando o hook useEffect para verificar se os dados existem quando o componente é montado ou atualizado
  useEffect(() => {
    if (search.animesinfo === undefined || search.animesinfo.length === 0) {
      try {
        // Tentando buscar os dados do localStorage e atualizar o estado animesinfo
        search.setInfo(JSON.parse(localStorage.getItem('myInfo')))
        setDataExiste(true)
      } catch (error) {
        // Se ocorrer um erro (por exemplo, se os dados não existirem no localStorage), atualiza o estado dataExiste para false
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