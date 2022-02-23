import React from 'react';
import { MenuTabStyles, MenuStyles } from './style';
import { GiCorn } from 'react-icons/gi';

function MenuTab(props) {
    return (
        <MenuTabStyles>
            <MenuStyles>
                <GiCorn fontSize="40"/>
                <h2>{props.agencyName}</h2>
            </MenuStyles>
            <MenuStyles>
                <div>About</div>
                <div>Tutors</div>
                <div>Program</div>
                <div>Location</div>
                <div>Our Agency</div>
            </MenuStyles>
        </MenuTabStyles>
    );
}

export { MenuTab };