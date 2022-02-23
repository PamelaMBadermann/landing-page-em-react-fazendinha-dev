import React from "react";
import { MainContentStyles } from "./style";
import { MenuTab } from "../MenuTab/MenuTab";
import { Sobre } from "../Sobre/Sobre";
import { Conteudo } from "../Conteudo/Conteudo";

export default function MainContent() {
    return (
        <MainContentStyles>
            <MenuTab agencyName="Fazendinha Dev" />
            <h1>FazendinhaDev</h1>
            <Sobre></Sobre>
            <Conteudo />
        </MainContentStyles>
    );
}
