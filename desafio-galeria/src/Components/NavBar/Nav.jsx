import React, { useState, useEffect } from "react";
import abbreviateNumber from "../../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  NavContainer,
  Image,
  Input,
  ContainerMain,
  ContainerImages,
  ButtonFixed,
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
import ButtonMain from "../Button/Button";

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

  //CONFIG TOASTFY
  const configToastify = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

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
    //IMAGEM A SER INSERIDA
    const newImage = {
      name: nameImage,
      url: urlImage,
    };

    await axios
      .post("https://mentoria-api.vercel.app/api/images", newImage)
      .then((response) => {
        toast.success("Imagem postada com sucesso!", configToastify);
        clearField();
        openModal();
        getAllImage();
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
    toast.success("Imagem editada com sucesso!", configToastify);
    clearFieldEdit();
    openModalEdit();
    getAllImage();
  };

  //DELETE
  const deleteImage = async (image) => {
    const id = image._id;
    await axios.delete(`https://mentoria-api.vercel.app/api/images/${id}`);
    toast.success("Imagem deletada com sucesso!", configToastify);
    openModalDelete();
    getAllImage();
  };

  //SHOW ALL IMAGE
  const getAllImage = async () => {
    const response = await axios.get(
      "https://mentoria-api.vercel.app/api/images"
    );
    setImages(response.data);
  };

  //READ
  useEffect(() => {
    getAllImage();
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
                isOpen={modalEdit}
                onClick={openModalEdit}
                spanTitle="Editar Imagem"
                valueName={nameEditImage}
                onChangeName={(e) => setNameEditImage(e.target.value)}
                valueUrl={urlEditImage}
                onChangeUrl={(e) => setUrlEditImage(e.target.value)}
                editImage={() => editImage(item)}
                openModalGarbage={openModalDelete}
                isOpenGarbage={modalDelete}
                spanTitleGarbage="Deseja realmente deletar essa imagem?"
                deleteImage={() => deleteImage(item)}
                notDelete={openModalDelete}
              />
            ))}
        </ContainerImages>

        <ButtonFixed onClick={openModal}>+</ButtonFixed>
        {modal && (
          <ContainerOverlay onClick={openModal}>
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
              <ButtonMain
                type="submit"
                onClick={addNewImage}
                children="Enviar"
                style={{ marginTop: "35px" }}
              />
            </Container>
          </ContainerOverlay>
        )}
      </ContainerMain>
    </>
  );
}
