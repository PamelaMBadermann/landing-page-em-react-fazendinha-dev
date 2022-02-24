import React from "react";
import { CardTresCampos } from "../CardTresCampos/CardTresCampos";
import { CardDoisCampos } from "../CardDoisCampos/CardDoisCampos";
import { SobreBlocoDescricaoStyle } from "./style";
import styled from "styled-components";

const CardDescricaoStyle = styled(CardTresCampos)`
    width: 30%;
`;

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
            <CardDoisCampos
                titulo="Sobre o Curso"
                texto="Um dos programas mais completos de formação em Data Science (ciência de dados), que preparará você para atuar em uma das profissões mais demandadas no mercado. Você aprenderá desde o básico de análise de dados, estatística e programação até aspectos avançados, incluindo engenharia de dados e machine learning."
            />
        </SobreBlocoDescricaoStyle>
    );
}
