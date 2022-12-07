import React, { useState, useEffect } from "react";
import abbreviateNumber from "../../utils/utils";
import axios from "axios";
// import { toast } from "react-toastify";

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
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [urlImage, setUrlImage] = useState("");
  const [nameImage, setNameImage] = useState("");

  const [nameEditImage, setNameEditImage] = useState("");
  const [urlEditImage, setUrlEditImage] = useState("");

  const openModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const openModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const openModal = () => {
    setModal(!modal);
  };

  const newImage = {
    name: nameImage,
    url: urlImage,
  };

  const clearField = () => {
    setNameImage("");
    setUrlImage("");
  };

  const addNewImage = async () => {
    await axios
      .post("https://mentoria-api.vercel.app/api/images", newImage)
      .then((response) => {
        alert("Nova imagem postada com sucesso");
        // toast.success("Nova imagem postada com sucesso! 😃", configToast);
        console.log(response.data, "deu certo");
        console.log("O id q vamos atualizar: ", response.data._id);
        clearField();
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Erro ao postar imagem 😵", configToast);
      });
  };

  const editImage = async (image) => {
    const editContent = {
      name: nameEditImage,
      url: urlEditImage,
    };
    const id = image._id;
    console.log(id);
    await axios.put(
      `https://mentoria-api.vercel.app/api/images/${id}`,
      editContent
    );

    console.log("enviada");
    console.log("StateName ", nameEditImage);
    console.log("StateUrl ", urlEditImage);
  };

  const deleteImage = async (image) => {
    const id = image._id;
    await axios.delete(`https://mentoria-api.vercel.app/api/images/${id}`);
    alert("Imagem apagada. Por favor recarregue a página");
  };

  useEffect(() => {
    const getAllImage = async () => {
      const response = await axios.get(
        "https://mentoria-api.vercel.app/api/images"
      );
      setImage(response.data);
    };
    getAllImage();
  }, []);

  // useEffect(() => {
  //   axios
  //     .put("https://mentoria-api.vercel.app/api/images/:id", image)
  //     .then((response) => console.log("fazendo o put"));
  // }, []);
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
                openModal={openModalEdit}
                estadoParaAbrir={modalEdit}
                onClick={openModalEdit}
                spanTitle="Editar Imagem"
                valueName={nameEditImage}
                onChangeName={(e) => setNameEditImage(e.target.value)}
                valueUrl={urlEditImage}
                onChangeUrl={(e) =>
                  console.log(setUrlEditImage(e.target.value))
                }
                editImage={() => editImage(item)}
                openModalGarbage={openModalDelete}
                estadoGarbage={modalDelete}
                spanTitleGarbage="Deseja realmente deletar essa imagem?"
                deleteImage={() => deleteImage(item)}
                notDelete={openModalDelete}
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
                  value={nameImage}
                  onChange={(e) => setNameImage(e.target.value)}
                />
                <InputComponent
                  type="text"
                  placeholder="Url da imagem"
                  width={320}
                  height={38}
                  value={urlImage}
                  onChange={(e) => console.log(setUrlImage(e.target.value))}
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
