import React from "react";
import styled from 'styled-components';

const CardHorizontalStyle = styled.div`

`


export function CardHorizontal(props){
    return (<div>
        <h2>{props.campoUm}</h2>
        <h3>{props.campoDois}</h3>
        <h4>{props.campoTre}</h4>
    </div>)
}