import React from "react";

const Unico = ({ info }) => {

    const titulo = info.title;
    const imagem = info.main_picture.large

    return(
        <div>
            <img src={imagem}/>
        </div>
    )
}

export default Unico;