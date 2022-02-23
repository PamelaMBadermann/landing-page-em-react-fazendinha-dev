import styled from 'styled-components';
import DataScience from '../../assets/data.jpg';

const HeaderStyle = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TextHeader = styled.div`
    width: 50%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 100px;
        font-weight: bold;
        color: #105ba8
    }

    h3 {
        margin-right: 80px;
        margin-left: 100px;
    }
`;

const ImageHeader = styled.div`
    background-image: url(${DataScience});
    display: flex;
    background-size: cover;
    width: 50%;
    height: inherit;
    max-height: 600px;
`;


export { HeaderStyle, TextHeader, ImageHeader };