import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cartao.css';
import { SearchContext } from "../Search/search";
import { Card, Button } from 'react-bootstrap';

//Cartão que representa os resultados da busca
const Cartao = ({ anime, onPageChange }) => {
    const search = useContext(SearchContext)

    //Quando clicar em ver mais, redireciona para 'selecionado'
    const Clicado = (event) => {
        //previne ação padrão do evento (submit do form)
        event.preventDefault();
        fetch(
            `/api/anime/${anime.id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
            {
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJhNWEzMGU1N2FmNzFjNzA3NzZhMjVmN2Q5MzhhYTdmY2ZkYTAyYzdlNjdlZWM1NDY4MTM3NDczZDc1ZDQ0YTEzMjEwYTI2NTRjYzZmM2EwIn0.eyJhdWQiOiJkYzE2MjQxNWYxYzAxNDhjMzQxYjA1ZjU1MWQ4YjI2YiIsImp0aSI6IjJhNWEzMGU1N2FmNzFjNzA3NzZhMjVmN2Q5MzhhYTdmY2ZkYTAyYzdlNjdlZWM1NDY4MTM3NDczZDc1ZDQ0YTEzMjEwYTI2NTRjYzZmM2EwIiwiaWF0IjoxNjk4MjQwODA0LCJuYmYiOjE2OTgyNDA4MDQsImV4cCI6MTcwMDkyMjgwNCwic3ViIjoiMTI1MzAyNTUiLCJzY29wZXMiOltdfQ.X_HN9gg4GBRR8FX6asSLL4qqKm1QQ6reZMVXg2KVeX2bA38JvoJsh4gobBFgHZk57s_1kbS30Zr2BjvKendpCAOI1lvQmx-jeF1sCRkb6d2G59xoT_C_r-g7yR3dElqWJCb1fjQbPosP2m6bXy0xxuxRzXgH-t50c4PKl-1BGN5QTfBWBayu6N-LZiurxD2ATdWP_gXob7neC-wcD-O660-3epxxJcJXOGCxY1537ZiVIH7WxVEqYOq6wesCaWo3X7ul4j_AF8LMVKzh8V87FEbmOmWs0SqmYi5t3z-4lOEo10ViSyivo7CLCAPWd1fXEIxf2KttVy8GOH6duj9kiA'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                // Atualiza o anime selecionado no contexto de busca
                search.setSelected(data)
                // Armazena os dados do anime selecionado no localStorage
                localStorage.setItem('animesingle', JSON.stringify(data))
                onPageChange('selecionado');
            })
    };

    //Restringe o tamanho do título
    const titulo = anime.title.length > 49
        ? `${anime.title.substring(0, 48)}...`
        : anime.title;
    const urlImg = anime.main_picture.medium;

    return (
        <div className="divCards">
            <Card className="my-card">
                <Card.Img variant="top" className="imgCard" src={urlImg} alt={titulo} style={{ maxHeight: 300 }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary" onClick={Clicado}>
                        Ver mais</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cartao
