import React from "react";
import { SobreBlocoCards } from "../SobreBlocoCards/SobreBlocoCards";
import { SobreBlocoDescricao } from "../SobreBlocoDescricao/SobreBlocoDescricao";
import { TituloSessao } from "../TituloSessao/TituloSessao";
import { SobreStyle } from "./stype";

export function Sobre(props) {
    return (
        <SobreStyle>
            <TituloSessao titulo="Sobre" />
            <SobreBlocoCards />
            <SobreBlocoDescricao />
        </SobreStyle>
    );
}
