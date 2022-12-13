import React, { useState, useEffect } from "react";
import abbreviateNumber from "../../utils/utils";
import axios from "axios";
// import { toast } from "react-toastify";

import {
  NavContainer,
  Image,
  Input,
  ContainerMain,
  ContainerImages,
  ButtonFixed,
  Button,
  Container,
  ImgContainer,
  InputContainer,
  ContainerOverlay,
} from "./styled";
import closeImage from "../../assets/close.svg";
import { InputComponent } from "../Input/input";

import logo from "../../assets/logo.svg";
import lupa from "../../assets/search.svg";
import { Card } from "../Card/Card";

export function Nav() {
  const [search, setSeach] = useState("");
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [urlImage, setUrlImage] = useState("");
  const [nameImage, setNameImage] = useState("");

  const [nameEditImage, setNameEditImage] = useState("");
  const [urlEditImage, setUrlEditImage] = useState("");

  //CONTROLE DE ESTADO
  const openModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const openModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const openModal = () => {
    setModal(!modal);
  };

  //IMAGEM A SER INSERIDA
  const newImage = {
    name: nameImage,
    url: urlImage,
  };

  //LIMPAR O CAMPO
  const clearField = () => {
    setNameImage("");
    setUrlImage("");
  };
  const clearFieldEdit = () => {
    setNameEditImage("");
    setUrlEditImage("");
  };

  //FUNCOES CRUD
  //CREATE
  const addNewImage = async () => {
    await axios
      .post("https://mentoria-api.vercel.app/api/images", newImage)
      .then((response) => {
        alert("Nova imagem postada com sucesso");
        clearField();
        openModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //UPDATE
  const editImage = async (image) => {
    const editContent = {
      name: nameEditImage,
      url: urlEditImage,
    };
    const id = image._id;
    await axios.put(
      `https://mentoria-api.vercel.app/api/images/${id}`,
      editContent
    );
    clearFieldEdit();
    openModalEdit();
  };

  //DELETE
  const deleteImage = async (image) => {
    const id = image._id;
    await axios.delete(`https://mentoria-api.vercel.app/api/images/${id}`);
    alert("Imagem apagada com sucesso!");
    openModalDelete();
  };

  //READ
  useEffect(() => {
    const getAllImage = async () => {
      const response = await axios.get(
        "https://mentoria-api.vercel.app/api/images"
      );
      setImages(response.data);
    };
    getAllImage();
  }, [images]);

  return (
    <>
      <NavContainer>
        <Image src={logo} alt="Logo Desafio" />
        <Input
          type="text"
          placeholder="Digite aqui"
          onChange={(e) => setSeach(e.target.value)}
        />
        <img
          src={lupa}
          alt="icone da lupa"
          style={{
            position: "absolute",
            right: 400,
            top: 45,
          }}
        />
      </NavContainer>
      <ContainerMain>
        <ContainerImages>
          {images
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
                openModal={openModalEdit}
                estadoParaAbrir={modalEdit}
                onClick={openModalEdit}
                spanTitle="Editar Imagem"
                valueName={nameEditImage}
                onChangeName={(e) => setNameEditImage(e.target.value)}
                valueUrl={urlEditImage}
                onChangeUrl={(e) => setUrlEditImage(e.target.value)}
                editImage={() => editImage(item)}
                openModalGarbage={openModalDelete}
                estadoGarbage={modalDelete}
                spanTitleGarbage="Deseja realmente deletar essa imagem?"
                deleteImage={() => deleteImage(item)}
                notDelete={openModalDelete}
              />
            ))}
        </ContainerImages>

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
                  value={nameImage}
                  onChange={(e) => setNameImage(e.target.value)}
                />
                <InputComponent
                  type="text"
                  placeholder="Url da imagem"
                  width={320}
                  height={38}
                  value={urlImage}
                  onChange={(e) => setUrlImage(e.target.value)}
                />
              </InputContainer>
              <Button
                type="submit"
                onClick={addNewImage}
                color="#fff"
                backgroundColor="#000"
              >
                Enviar
              </Button>
            </Container>
          </ContainerOverlay>
        )}
      </ContainerMain>
      {/* <ImageForm span="Editar Imagem" />
      <DeleteImage /> */}
    </>
  );
}
