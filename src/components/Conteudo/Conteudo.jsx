import React from "react";
import styled from "styled-components";
import { Card } from "../Conteudo/Card";
import { MdOutlineScience } from 'react-icons/md';
import { SiPython } from 'react-icons/si';
import { BiMobileAlt } from 'react-icons/bi';


const StyleConteudo = styled.div`
    display: flex;
    height: 30vh;
    gap: 20px;
    padding: 80px;
`;

export const Conteudo = () => {
    return (
        <StyleConteudo>
            <Card icons={<SiPython/>} titulo="Python" texto="ldxnzgjdsfbjgfzhjgfabdfgzdfgzfg" />
            <Card icons={<MdOutlineScience/>} titulo="Data Science" texto="zdfgzdfz;lkhkjdsgfbjgfhnzg" />
            <Card icons={<BiMobileAlt/>} titulo="Mobile Developer" texto="gçdmzgkjhnjhgbjhgfbdgjzf" />
        </StyleConteudo>
    );
};
