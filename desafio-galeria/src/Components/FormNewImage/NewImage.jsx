import React from "react";
import { Button, Container, ImgContainer, InputContainer } from "./styled";
import closeImage from "../../assets/close.svg";
import { InputComponent } from "../Input/input";

export function ImageForm() {
  return (
    <Container>
      <ImgContainer>
        <img src={closeImage} alt="icone de fechar" />
      </ImgContainer>
      <span>Inserir Nova Imagem</span>
      <InputContainer>
        <InputComponent
          type="text"
          placeholder="Nome"
          width={320}
          height={38}
        />
        <InputComponent
          type="text"
          placeholder="Url da imagem"
          width={320}
          height={38}
        />
      </InputContainer>
      <Button type="submit">Enviar</Button>
    </Container>
  );
}
