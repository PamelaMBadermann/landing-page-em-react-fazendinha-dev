import React from "react";
import styled from "styled-components";
import { Card } from "../Conteudo/Card";

const StyleConteudo = styled.div`
    display: flex;
    height: 30vh;
    gap: 20px;
`;

export const Conteudo = () => {
    return (
        <StyleConteudo>
            <Card titulo="Python" texto="" />
            <Card titulo="Data Science" texto="" />
            <Card titulo="Mobile Developer" texto="" />
        </StyleConteudo>
    );
};
