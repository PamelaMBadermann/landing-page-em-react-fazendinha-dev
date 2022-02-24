import React from 'react';
import styled from 'styled-components';

const StyleCardProfessor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyleImagem = styled.div`
    background-image: url(${props => props.imagem});
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    height: 200px;
    width: 200px;
`;
const StyleTitulo = styled.h1`
    font-size:24px;
`;
const StyleTexto= styled.p`
    font-size:18px;
    font-weight: bold;
`;

export const CardProfessor = (props) => {
    return (
        <StyleCardProfessor>
            <StyleImagem imagem={props.imagem}/>
            <StyleTitulo> {props.titulo} </StyleTitulo>
            <StyleTexto> {props.texto} </StyleTexto>
        </StyleCardProfessor>
    )
}