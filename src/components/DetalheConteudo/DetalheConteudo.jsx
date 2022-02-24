import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';
import python from './imagens/python.jpg';
import science from './imagens/science.jpg';
import mobile from './imagens/mobile.jpg';


const StyleDetalheConteudo = styled.div`

`;

export const DetalheConteudo = () => {
    return(
        <StyleDetalheConteudo>
            <Item
                titulo='PYTHON'
                texto='FDILMLDGKFDHNKFHFGDH'
                imagem={python}
                posicaoImagem='direita'
            />
            <Item
                titulo='SCIENCE'
                texto='FHSDFHSGDFHDSHHH'
                imagem={science}
                posicaoImagem='esquerda'
            />
            <Item
                titulo='MOBILE'
                texto='SFDGSDFHGHSGHSH'
                imagem={mobile}
                posicaoImagem='direita'
            />
        </StyleDetalheConteudo>
    )
}