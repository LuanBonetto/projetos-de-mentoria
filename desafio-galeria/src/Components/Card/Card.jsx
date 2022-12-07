import React from "react";

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
  ContainerDelete,
  ContainerButtonsGarbage,
} from "../../Components/NavBar/styled";
import closeImage from "../../assets/close.svg";

import { InputComponent } from "../Input/input";

import { BsFillEyeFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

import EditIcon from "../../assets/editIcon.svg";
import GarbageIcon from "../../assets/garbageIcon.svg";

export function Card(props) {
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
                <Button
                  type="submit"
                  onClick={props.editImage}
                  color="#fff"
                  backgroundColor="#000"
                >
                  Enviar
                </Button>
              </Container>
            </ContainerOverlay>
          )}
          <ButtonEdit onClick={props.openModalGarbage}>
            <img src={GarbageIcon} alt="" />
          </ButtonEdit>
          {props.estadoGarbage && (
            <ContainerOverlay>
              <ContainerDelete>
                <span>{props.spanTitleGarbage}</span>
                <ContainerButtonsGarbage>
                  <Button
                    type="submit"
                    onClick={props.deleteImage}
                    color="#fff"
                    backgroundColor="#000"
                    width="true"
                  >
                    Sim
                  </Button>
                  <Button
                    type="submit"
                    onClick={props.notDelete}
                    color="#000"
                    width="true"
                  >
                    Não
                  </Button>
                </ContainerButtonsGarbage>
              </ContainerDelete>
            </ContainerOverlay>
          )}
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
