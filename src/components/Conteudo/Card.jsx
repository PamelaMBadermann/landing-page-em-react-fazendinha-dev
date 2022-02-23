import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
    margin: 50px;
    display: flex;
`;

const StyleImagem = styled.div`
    background-image: url();
    height: 100px;
`;

const StyleTitulo = styled.h1`
    font-size: 14px;
    text-transform: uppercase;
`;

const StyleTexto = styled.p`
    font-size: 11px;
`;

export const Card = (props) => {
    return (
        <StyleCard>
            <StyleImagem />
            <StyleTitulo> {props.titulo} </StyleTitulo>
            <StyleTexto> {props.texto} </StyleTexto>
        </StyleCard>
    );
};
