import React from 'react';
import styled from 'styled-components';

const StyleItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
`;

const StyleDiv = styled.div`
    padding: 30px;
`;
const StyleTitulo = styled.h1`
    font-size: 24x;
    text-align: center;
`;
const StyleTexto = styled.p`
    font-size: 18px;
    text-align: center;
`;
const StyleImagem = styled.div`
    background-image: url(${props => props.imagem});
    height: 100vh;
    background-size:cover;
    background-position:center;
`;

export const Item = (props) => {
    return (
        <StyleItem>

            {props.posicaoImagem === "esquerda" ? 
                <StyleImagem imagem={props.imagem}></StyleImagem> : 
                null
            }

            <StyleDiv> 
                <StyleTitulo> {props.titulo} </StyleTitulo>
                <StyleTexto> {props.texto} </StyleTexto>
            </StyleDiv>

            {props.posicaoImagem === "direita" ? 
                <StyleImagem imagem={props.imagem}></StyleImagem> : 
                null
            }

        </StyleItem>
    )
}