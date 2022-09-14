import React from "react";

import { ContainerNav, Logo, Input, ContainerCards } from "./styled";
import imagemLogo from '../../../public/images/logo.svg'
import { Card } from "../CardImage/CardImage";
 

export function Nav() {
    return (
        <>
            
            <ContainerNav>
                <Logo src={imagemLogo}/>
                <Input type='text' placeholder="Buscar"/>
            </ContainerNav> 
            <ContainerCards>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </ContainerCards>
        </>
    )
}