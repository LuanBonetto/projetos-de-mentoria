import React from "react";
import { Container, ContainerCard, ContainerInfo, Image } from "./styled";

export function Card() {
    return(
        <>
            <ContainerCard>
                <Image src='https://github.com/MatheusCamba.png'/>
                <ContainerInfo>
                    <h2>Nome</h2>
                    <Container>
                        <span>L: 2mil</span>
                        <span>V: 16mil</span>
                    </Container>
                </ContainerInfo>
            </ContainerCard>
        </>
    )
}