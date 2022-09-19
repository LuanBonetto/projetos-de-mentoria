import React from "react";

import { CardContainer, CardImage, ContainerInfo, ContainerDiv } from "./styled";

export function Card(props) {
    return (
        <CardContainer>
            <CardImage src={props.image} alt="Logo React"/>
            <ContainerInfo>
                <h3>{props.name}</h3>
                <ContainerDiv>
                    <span>L: {props.likes}</span>
                    <span>V: {props.views}</span>
                </ContainerDiv>
            </ContainerInfo>
        </CardContainer>
    )
}