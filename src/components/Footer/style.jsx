import styled from 'styled-components';

const FooterStyle = styled.div`
    height: 100px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    color: #2f2f2f;

    h4 {
        justify-content: center;
        width: 50%;
    }
`;

const FooterIconsStyle = styled.div`
    height: 100px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: #2f2f2f;

    svg {
        margin: 20px;
    }
`;

export { FooterStyle, FooterIconsStyle };