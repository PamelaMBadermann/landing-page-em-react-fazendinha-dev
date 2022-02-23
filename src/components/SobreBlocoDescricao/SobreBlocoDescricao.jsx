import React from "react";
import { CardTresCampos } from "../CardTresCampos/CardTresCampos";
import { SobreBlocoDescricaoStyle } from "./style";

export function SobreBlocoDescricao(props) {
    return (
        <SobreBlocoDescricaoStyle>
            <CardTresCampos
                campoUm="1000h"
                campoDois="De teorica e prática em ciencia de dados"
                campoTres="Nivel Iniciante"
            />
            <p>Bloco Texto descrição com altos bla bla bla</p>
        </SobreBlocoDescricaoStyle>
    );
}
