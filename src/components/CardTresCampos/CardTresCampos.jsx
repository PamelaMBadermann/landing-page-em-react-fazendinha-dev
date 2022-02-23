import React from "react";
import { CardTresCamposStyle, TextoCardTresCamposStyle } from "./style";

export function CardTresCampos(props) {
    return (
        <CardTresCamposStyle
            leftCard={props.leftCard}
            centerCard={props.centerCard}
            rightCard={props.rightCard}
            focusUm={props.focusUm}
            focusDois={props.focusDois}
            focusTres={props.focusTres}
            BGDestaque={props.BGDestaque}
        >
            <TextoCardTresCamposStyle>
                <h2>{props.campoUm}</h2>
                <h3>{props.campoDois}</h3>
                <h4>{props.campoTres}</h4>
            </TextoCardTresCamposStyle>
        </CardTresCamposStyle>
    );
}
