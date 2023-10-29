import React, { useContext, useEffect } from "react";
import { SearchContext } from "../Componentes/Search/search";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Animes = () => {
  const { search } = useContext(SearchContext)
  useEffect(() => {
    search('Naruto').then((data) => {
      console.log(data)
    })
  }, [search])

  return (
    <div></div> 
  )
}

export default Animes