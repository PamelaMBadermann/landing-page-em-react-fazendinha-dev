import React from 'react';
import { MenuTabStyles } from './style';

function MenuTab(props) {
    return (
        <MenuTabStyles>
            <h2>{props.agencyName}</h2>
            <div>About</div>
            <div>Tutors</div>
            <div>Program</div>
            <div>Location</div>
            <div>Our Agency</div>
        </MenuTabStyles>
    );
}

export { MenuTab };