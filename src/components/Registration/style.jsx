import styled from 'styled-components';

const RegistrationStyle = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: #105ba8;
    color: #fff;
`;

const RegistrationLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    
    h1 {
        margin: 10px;
        color: #041c3f;
        font-size: 50px;
        font-weight: bold;
    }

    h2, h3 {
        margin: 10px;
    }
`;

const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 450px;
    margin-right: 50px;
    background: #dddddd;
    border-radius: 20px;

    input {
        border: none;
        border-radius: 10px;
        height: 60px;
        width: 90%;
        margin-top: 20px;
        color: #041c3f;
    }

    input, input::-webkit-input-placeholder {
        font-weight: bold;
        font-size: 18px;
    }

    button {
        font-weight: bold;
        border: none;
        border-radius: 10px;
        height: 60px;
        width: 90%;
        margin-top: 20px;
        font-size: 18px;
        background: #041c3f;
        color: #fff;
    }
`;

export { RegistrationStyle, RegistrationLabel, RegistrationForm };