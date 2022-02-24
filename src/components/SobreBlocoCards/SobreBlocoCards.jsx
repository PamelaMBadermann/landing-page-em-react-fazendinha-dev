import React from "react";
import { SobreBlocoCardsStyle } from "./style";
import { CardTresCampos } from "../CardTresCampos/CardTresCampos";

export function SobreBlocoCards(props) {
    return (
        <SobreBlocoCardsStyle>
            <CardTresCampos
                leftCard
                focusDois
                campoUm="EM BREVE"
                campoDois="Abril/22"
                campoTres="11 meses de duração"
            ></CardTresCampos>
            <CardTresCampos
                centerCard
                focusDois
                campoUm="Carga horária"
                campoDois="1000h"
                campoTres="20h de dedicação semanal"
            ></CardTresCampos>
            <CardTresCampos
                focusDois
                campoUm="Vagas Limitadas"
                campoDois="30 alunos"
                campoTres="aulas sincronas das 19:00 as 22:30"
            ></CardTresCampos>
            <CardTresCampos
                rightCard
                focusDois
                BGDestaque
                campoUm="Parcelas a partir de"
                campoDois="R$500"
                campoTres="Financiamentos disponíveis"
            ></CardTresCampos>
        </SobreBlocoCardsStyle>
    );
}
