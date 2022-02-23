import React from 'react';
import { FooterStyle, FooterIconsStyle } from './style';
import { FaTwitter, FaInstagram, FaFacebook, FaPinterest, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <FooterStyle>
            <FooterIconsStyle>
                <h4>© 2022 Fazendinha Dev Solutions. All rights reserved.</h4>
            </FooterIconsStyle>
            <FooterIconsStyle>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter fontSize="40"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram fontSize="40"/>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook fontSize="40"/>
                </a>
                <a href="https://br.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FaPinterest fontSize="40"/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn fontSize="40"/>
                </a>
            </FooterIconsStyle>
        </FooterStyle>
    );
}

export { Footer };