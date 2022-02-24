import styled from "styled-components";
import { css } from "styled-components";

const CardTresCamposStyle = styled.div`
    background-color: #d3d3d3;
    color: black;
    /* margin-left: 1vw; */

    h2 {
        font-size: ${(props) => (props.focusUm ? "xx-large" : "medium")};
        color: ${(props) => (props.focusUm ? "red" : "")};
    }

    h3 {
        font-size: ${(props) => (props.focusDois ? "xx-large" : "medium")};
        color: ${(props) => (props.focusDois ? "red" : "")};
    }

    h4 {
        font-size: ${(props) => (props.focusTres ? "xx-large" : "medium")};
        color: ${(props) => (props.focusTres ? "red" : "")};
    }

    ${(props) => {
        if (props.rounded) {
            return css`
                border-radius: 15px;
            `;
        }
        if (props.leftCard) {
            return css`
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
                border-right: dotted orange;
            `;
        }
        if (props.centerCard) {
            return css`
                border-right: dotted orange;
            `;
        }
        if (props.rightCard) {
            return css`
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
            `;
        }
    }}

    ${(props) => {
        if (props.BGDestaque) {
            return css`
                background-color: #105ba8;
                color: white;
            `;
        }
    }}
`;

const TextoCardTresCamposStyle = styled.div`
    height: 100%;
    padding-right: 10%;
    padding-left: 10%;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`;

export { CardTresCamposStyle, TextoCardTresCamposStyle };
