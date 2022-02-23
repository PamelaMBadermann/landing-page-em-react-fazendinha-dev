import React from "react";
import styled from "styled-components";
import { CardHorizontal } from "../CardHorizontal/CardHorizontal";
export function Sobre(props) {
    const BlocoInfos = styled.div`
        display: flex;
        flex-direction: row;
        text-align: center;
    `;

    return (
        <BlocoInfos>
            <CardHorizontal
                focusDois
                rounded
                campoUm="Em breve"
                campoDois="março/2022"
                campoTres="7 meses de estudos"
            ></CardHorizontal>
            <CardHorizontal
                focusUm
                rounded
                campoUm="Vagas Limitadas"
                campoDois="30 alunos"
                campoTres="19:00 as 22:30"
            ></CardHorizontal>
            <CardHorizontal
                focusDois
                rounded
                campoUm="Parcelas a partir de"
                campoDois="R$500"
                campoTres="Financiamentos disponíveis"
            ></CardHorizontal>
        </BlocoInfos>
    );
}
