import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchContext } from "../Search/search";
import { Card, Button } from 'react-bootstrap';

const Cartao = (props /*,{ onPageChange }*/) => {
    const search = useContext(SearchContext)

    const Clicado = (event) => {
        event.preventDefault();
        fetch(
            `/api/anime/${props.anime.anime_id}`,
            {
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhNWEzMGU1N2FmNzFjNzA3NzZhMjVmN2Q5MzhhYTdmY2ZkYTAyYzdlNjdlZWM1NDY4MTM3NDczZDc1ZDQ0YTEzMjEwYTI2NTRjYzZmM2EwIn0.eyJhdWQiOiJkYzE2MjQxNWYxYzAxNDhjMzQxYjA1ZjU1MWQ4YjI2YiIsImp0aSI6IjJhNWEzMGU1N2FmNzFjNzA3NzZhMjVmN2Q5MzhhYTdmY2ZkYTAyYzdlNjdlZWM1NDY4MTM3NDczZDc1ZDQ0YTEzMjEwYTI2NTRjYzZmM2EwIiwiaWF0IjoxNjk4MjQwODA0LCJuYmYiOjE2OTgyNDA4MDQsImV4cCI6MTcwMDkyMjgwNCwic3ViIjoiMTI1MzAyNTUiLCJzY29wZXMiOltdfQ.X_HN9gg4GBRR8FX6asSLL4qqKm1QQ6reZMVXg2KVeX2bA38JvoJsh4gobBFgHZk57s_1kbS30Zr2BjvKendpCAOI1lvQmx-jeF1sCRkb6d2G59xoT_C_r-g7yR3dElqWJCb1fjQbPosP2m6bXy0xxuxRzXgH-t50c4PKl-1BGN5QTfBWBayu6N-LZiurxD2ATdWP_gXob7neC-wcD-O660-3epxxJcJXOGCxY1537ZiVIH7WxVEqYOq6wesCaWo3X7ul4j_AF8LMVKzh8V87FEbmOmWs0SqmYi5t3z-4lOEo10ViSyivo7CLCAPWd1fXEIxf2KttVy8GOH6duj9kiA'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                search.setSelected(data)
                localStorage.setItem('animeselected', JSON.stringify(data))
                //onPageChange('busca')
            })
    }

    const titulo = props.anime.title;
    const urlImg = props.anime.main_picture;
    const sinopse = props.anime.synopsis

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={urlImg} alt={titulo} style={{ maxHeight: 300 }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {sinopse}
                    </Card.Text>
                    <Button variant="primary" onClick={Clicado}>Ver mais</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cartao