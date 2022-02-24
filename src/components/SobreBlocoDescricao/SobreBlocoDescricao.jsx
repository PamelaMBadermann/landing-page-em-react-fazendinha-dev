import React from "react";
import { CardTresCampos } from "../CardTresCampos/CardTresCampos";
import { SobreBlocoDescricaoStyle } from "./style";

export function SobreBlocoDescricao() {
    return (
        <SobreBlocoDescricaoStyle>
            <CardTresCampos
                campoUm="1000 Horas"
                campoDois="De teorica e prática em ciencia de dados"
                campoTres="Nivel Iniciante"
                rounded
                focusUm
                BGDestaque
            />
            <CardTresCampos
                rounded
                focusUm
                campoUm="Sobre o Curso"
                campoDois="Um dos programas mais completos de formação em Data Science (ciência de dados), que preparará você para atuar em uma das profissões mais demandadas no mercado. "
            />
        </SobreBlocoDescricaoStyle>
    );
}
