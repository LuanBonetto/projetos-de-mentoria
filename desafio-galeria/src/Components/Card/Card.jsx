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
          <ButtonEdit>
            <img src={EditIcon} alt="" />
          </ButtonEdit>
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
