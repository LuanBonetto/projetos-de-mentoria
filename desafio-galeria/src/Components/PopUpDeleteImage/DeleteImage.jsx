import React from "react";

import { ContainerMain, ContainerButtons, Button } from "./styled";

export function DeleteImage() {
  return (
    <ContainerMain>
      <span>Deseja realmente deleter essa imagem?</span>
      <ContainerButtons>
        <Button>Sim</Button>
        <Button background="#fff" color="#000">
          Não
        </Button>
      </ContainerButtons>
    </ContainerMain>
  );
}
