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
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  )
}

export default Animes