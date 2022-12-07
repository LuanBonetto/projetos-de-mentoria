import React, { useState } from "react";

import {
  CardContainer,
  CardImage,
  ContainerInfo,
  ContainerDiv,
  ButtonEdit,
  ContainerImageCard,
  ContainerButtons,
} from "./styled";

import {
  Container,
  ImgContainer,
  ContainerOverlay,
  Button,
  InputContainer,
} from "../../Components/NavBar/styled";
import closeImage from "../../assets/close.svg";

import { InputComponent } from "../Input/input";

import { BsFillEyeFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

import EditIcon from "../../assets/editIcon.svg";
import GarbageIcon from "../../assets/garbageIcon.svg";

export function Card(props) {
  // const [modal, setModal] = useState(false);

  return (
    <CardContainer>
      <ContainerImageCard>
        <CardImage src={props.image} alt="Logo React"></CardImage>
        <ContainerButtons>
          <ButtonEdit onClick={props.openModal}>
            <img src={EditIcon} alt="" />
          </ButtonEdit>
          {props.estadoParaAbrir && (
            <ContainerOverlay>
              <Container>
                <ImgContainer>
                  <button onClick={props.onClick}>
                    <img src={closeImage} alt="icone de fechar" />
                  </button>
                </ImgContainer>
                <span>{props.spanTitle}</span>
                <InputContainer>
                  <InputComponent
                    type="text"
                    placeholder="Nome"
                    width={320}
                    height={38}
                    value={props.valueName}
                    onChange={props.onChangeName}
                  />
                  <InputComponent
                    type="text"
                    placeholder="Url da imagem"
                    width={320}
                    height={38}
                    value={props.valueUrl}
                    onChange={props.onChangeUrl}
                  />
                </InputContainer>
                <Button type="submit" onClick={props.editImage}>
                  Enviar
                </Button>
              </Container>
            </ContainerOverlay>
          )}
          <ButtonEdit>
            <img src={GarbageIcon} alt="" />
          </ButtonEdit>
        </ContainerButtons>
      </ContainerImageCard>
      <ContainerInfo>
        <h3>{props.name}</h3>
        <ContainerDiv>
          <span>
            <AiFillLike /> {props.likes}
          </span>
          <span>
            <BsFillEyeFill /> {props.views}
          </span>
        </ContainerDiv>
      </ContainerInfo>
    </CardContainer>
  );
}

{
  /* <ButtonEdit>
  <img src={EditIcon} alt="" />
</ButtonEdit> */
}
