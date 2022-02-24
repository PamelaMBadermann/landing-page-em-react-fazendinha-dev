import React from "react";
import Router from "./Router";
import { GlobalStyle } from "./styles/global";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Router />
        </React.Fragment>
    );
}
