import styled from 'styled-components';

const MenuTabStyles = styled.div`
    height: 100px;
    background: #247ba0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    color: #fff;

    h2 {
        color: #fff;
        font-weight: bold;
    }
`;

const MenuStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        color: #fff;
        margin: 20px;
    }

    h2 {
        margin-left: 20px;
    }
`;

export { MenuTabStyles, MenuStyles };