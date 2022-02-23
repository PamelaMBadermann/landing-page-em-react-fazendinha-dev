import React from "react";
import { MainContentStyles } from "./style";
import { MenuTab } from "../MenuTab/MenuTab";
import { Header } from "../Header/Header";
import { Sobre } from "../Sobre/Sobre";
import { Conteudo } from "../Conteudo/Conteudo";
import { Footer } from "../Footer/Footer";

export default function MainContent() {
    return (
        <MainContentStyles>
            <MenuTab agencyName="Fazendinha Dev" />
            <Header />
            <Sobre></Sobre>
            <Conteudo />
            <Footer />
        </MainContentStyles>
    );
}
