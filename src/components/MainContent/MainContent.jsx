import React from "react";
import { Sobre } from "../Sobre/Sobre";
import { MainContentStyles } from "./style";
import { Conteudo } from "../Conteudo/Conteudo";

export default function MainContent() {
    return (
        <MainContentStyles>
            <h1>FazendinhaDev</h1>
            <Sobre></Sobre>
            <Conteudo />
        </MainContentStyles>
    );
}
