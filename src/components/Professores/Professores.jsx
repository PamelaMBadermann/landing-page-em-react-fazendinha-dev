import React from 'react';
import styled from 'styled-components';
import { CardProfessor } from './CardProfessor';
import prof1 from './Imagens/prof1.jpg'
import prof2 from './Imagens/prof2.jpg'
import prof3 from './Imagens/prof3.jpg'

const StyleProfessores = styled.div`
    display: flex;
    padding: 100px;
    gap: 50px;
`;

export const Professores = () => {
    return(
        <StyleProfessores>
            <CardProfessor imagem={prof1} titulo="Rosangela Alves" texto="Especialista em Python" />
            <CardProfessor imagem={prof2} titulo="Paulo Vinicius" texto="Especialista em Correção de Trabalhos" />
            <CardProfessor imagem={prof3} titulo="Cintia Cruz" texto="Especialista em Estatísticas" />
        </StyleProfessores>
    )
}