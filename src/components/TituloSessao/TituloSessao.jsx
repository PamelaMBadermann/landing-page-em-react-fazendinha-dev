import React from "react";
import { TituloSessaoStyle } from "../TituloSessao/style";

export function TituloSessao(props) {
    return (
        <TituloSessaoStyle>
            <hr />
            <h1>{props.titulo}</h1>
        </TituloSessaoStyle>
    );
}
