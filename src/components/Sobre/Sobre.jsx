import React from "react";
import { SobreBlocoCards } from "../SobreBlocoCards/SobreBlocoCards";
import { SobreBlocoDescricao } from "../SobreBlocoDescricao/SobreBlocoDescricao";
import { SobreStyle } from "./stype";

export function Sobre(props) {
    return (
        <SobreStyle>
            <SobreBlocoCards />
            <SobreBlocoDescricao />
        </SobreStyle>
    );
}
