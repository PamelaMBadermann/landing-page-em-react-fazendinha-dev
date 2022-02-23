import React from 'react';
import { MainContentStyles } from './style';
import { MenuTab } from '../MenuTab/MenuTab';

export default function MainContent() {
    return (
        <MainContentStyles>
            <MenuTab agencyName="Fazendinha Dev" />
            <h1>FazendinhaDev</h1>
        </MainContentStyles>
    );
}