import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 300px;
    max-width: 500px;
    padding: 50px;

`;

const StyleIcons = styled.div`
    font-size: 50px;
    color: blue;

`;

const StyleTitulo = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;

`;

const StyleTexto = styled.p`
    font-size: 18px;
    font-weight: bold;
    width:200px;
    word-wrap: break-word;
    
`;

export const Card = (props) => {
    return (
        <StyleCard>
            <StyleIcons> {props.icons} </StyleIcons>
            <StyleTitulo> {props.titulo} </StyleTitulo>
            <StyleTexto> {props.texto} </StyleTexto>
        </StyleCard>
    );
};
