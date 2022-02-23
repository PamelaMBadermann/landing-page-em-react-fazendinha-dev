import React from 'react';
import { RegistrationStyle, RegistrationLabel, RegistrationForm } from './style';

function Registration() {
    return (
        <RegistrationStyle>
            <RegistrationLabel>
                <h1>Registre-se já!</h1>
                <h2> +55 51 99988-7766</h2>
                <h3>contato@fazendinhadev.com</h3>
            </RegistrationLabel>
            <RegistrationForm>
                <input placeholder="Primeiro nome"></input>
                <input placeholder="Último nome"></input>
                <input placeholder="Endereço de email"></input>
                <input placeholder="Telefone para contato"></input>
                <button>Registre-se agora!</button>
            </RegistrationForm>
        </RegistrationStyle>
    );
}

export { Registration };