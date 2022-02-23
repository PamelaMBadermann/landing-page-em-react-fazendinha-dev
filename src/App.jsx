import React from "react";
import { Sobre } from "./components/Sobre/Sobre";
import Router from "./Router";
import { GlobalStyle } from './styles/global';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Router />
        </React.Fragment>
    );
}
