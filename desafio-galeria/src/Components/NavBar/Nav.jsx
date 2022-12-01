import React, { useState, useEffect } from "react";
import abbreviateNumber from "../../utils/utils";
import axios from "axios";

import {
  NavContainer,
  Image,
  Input,
  ContainerMain,
  ContainerTeste,
  ButtonFixed,
  Button,
  Container,
  ImgContainer,
  InputContainer,
  ContainerOverlay,
} from "./styled";
import closeImage from "../../assets/close.svg";
import { InputComponent } from "../Input/input";

import { DeleteImage } from "../PopUpDeleteImage/DeleteImage";

import logo from "../../assets/logo.svg";
import { Card } from "../Card/Card";

// import { data } from "../../../data.js";

export function Nav() {
  const [search, setSeach] = useState("");
  const [image, setImage] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    axios
      .get("https://mentoria-api.vercel.app/api/images")
      .then((response) => setImage(response.data));
  }, []);

  return (
    <>
      <NavContainer>
        <Image src={logo} alt="Logo Desafio" />
        <Input
          type="text"
          placeholder="Digite aqui"
          onChange={(e) => setSeach(e.target.value)}
        />
      </NavContainer>
      <ContainerMain>
        <ContainerTeste>
          {image
            .filter((info) => {
              if (search == "") {
                return info;
              } else if (
                info.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return info;
              }
            })
            .map((item, index) => (
              <Card
                key={index}
                image={item.url}
                name={item.name}
                likes={abbreviateNumber(item.likes)}
                views={abbreviateNumber(item.views)}
              />
            ))}
        </ContainerTeste>

        <ButtonFixed onClick={openModal}>+</ButtonFixed>
        {modal && (
          <ContainerOverlay>
            <Container>
              <ImgContainer>
                <button onClick={openModal}>
                  <img src={closeImage} alt="icone de fechar" />
                </button>
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
          </ContainerOverlay>
        )}
      </ContainerMain>
      {/* <ImageForm span="Editar Imagem" />
      <DeleteImage /> */}
    </>
  );
}
