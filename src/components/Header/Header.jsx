import React from 'react';
import { HeaderStyle, TextHeader, ImageHeader } from './style';

function Header() {
    return (
        <HeaderStyle>
            <TextHeader>
                <h2>Descubra novas ferramentas de Análise de Dados</h2>
                <h1>Data Science</h1>
                <h3>Aprenda novas ferramente de Analise de Dados que mudarão sua concepção de Data Science.</h3>
            </TextHeader>
            <ImageHeader/>
        </HeaderStyle>
    );
}

export { Header };