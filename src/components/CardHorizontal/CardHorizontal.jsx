import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const CardHorizontalStyle = styled.div`
    background-color: deepskyblue;
    margin-left: 1vw;

    h2 {
        font-size: ${(props) => (props.focusUm ? "xx-large" : "medium")};
    }

    h3 {
        color: red;
        text-align: center;
        font-size: ${(props) => (props.focusDois ? "xx-large" : "medium")};
    }

    h4 {
        font-size: ${(props) => (props.focusTres ? "xx-large" : "medium")};
    }

    ${(props) => {
        if (props.rounded) {
            return css`
                border-radius: 15px;
            `;
        }

        return css`
            border-radius: 0;
        `;
    }}
`;

export function CardHorizontal(props) {
    return (
        <CardHorizontalStyle
            rounded={props.rounded}
            focusUm={props.focusUm}
            focusDois={props.focusDois}
            focusTres={props.focusTres}
        >
            <h2>{props.campoUm}</h2>
            <h3>{props.campoDois}</h3>
            <h4>{props.campoTres}</h4>
        </CardHorizontalStyle>
    );
}
