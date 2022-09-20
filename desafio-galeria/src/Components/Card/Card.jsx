import React from "react";

import { CardContainer, CardImage, ContainerInfo, ContainerDiv } from "./styled";
import {BsFillEyeFill} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'

export function Card(props) {
    return (
        <CardContainer>
            <CardImage src={props.image} alt="Logo React"/>
            <ContainerInfo>
                <h3>{props.name}</h3>
                <ContainerDiv>
                    <span><AiFillLike/> {props.likes}</span>
                    <span><BsFillEyeFill/> {props.views}</span>
                </ContainerDiv>
            </ContainerInfo>
        </CardContainer>
    )
}