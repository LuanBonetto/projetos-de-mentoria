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
} from "./styled";
import { ImageForm } from "../FormNewImage/NewImage";

import logo from "../../assets/logo.svg";
import { Card } from "../Card/Card";

// import { data } from "../../../data.js";

export function Nav() {
  const [search, setSeach] = useState("");
  const [image, setImage] = useState([]);

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
        <ButtonFixed>+</ButtonFixed>
      </ContainerMain>
      {/* <ImageForm /> */}
    </>
  );
}
