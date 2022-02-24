import React from "react";
import { CardDoisCamposStyle } from "./style";

export function CardDoisCampos(props) {
    return (
        <CardDoisCamposStyle>
            <h2>{props.titulo}</h2>
            <hr />
            <p>{props.texto}</p>
        </CardDoisCamposStyle>
    );
}
