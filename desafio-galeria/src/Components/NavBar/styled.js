import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 110px;
  background-color: #202020;
  justify-content: space-between;
  padding: 27px 120px 27px 120px;

  @media screen and (max-width: 1000px) {
    /* display: flex;
    flex-wrap: wrap; */
  }
`;

export const Image = styled.img`
  /* width: auto;
    height: 80px;
    margin: 10px 10px; */

  width: 68px;
  height: 68px;
  /* margin: 21px 21px 21px 120px; */
  /* margin-left: 120px; */

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Input = styled.input`
  /* width: 260px;
    height: 35px;
    padding: 5px 5px;
    margin: 35px 35px; */

  display: flex;
  /* padding: 16px; */
  gap: 16px;
  width: 320px;
  height: 56px;
  /* margin: 27px 120px 27px 0; */
  /* margin-right: 120px; */
  flex-direction: row;
  align-items: center;
  /* padding-left: 56px; */
  padding: 20px 16px 20px 56px;

  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;

  background-color: rgba(204, 204, 204, 0.16);
  border-radius: 56px;
  border: 1px solid #cccccc;
  color: #cccccc;
  outline: none;
`;

export const ContainerMain = styled.main`
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  background-color: #fff;
`;

export const ContainerImages = styled.div`
  /* display: grid;
  grid-template-rows: 400px 400px 400px;
  grid-template-columns: 550px 550px 550px; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* padding-left: 250px; */

  @media screen and (max-width: 1284px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
  }
  /* @media screen and (max-width: 1189px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  } */
`;

//MODAL STYLE

export const ContainerOverlay = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgb(49, 49, 49, 0.8);
  /* opacity: 0;
    transition: opacity 2000ms ease-in-out; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 433px;
  height: 305px;
  border-radius: 10px;
  background-color: #d9d9d9;
  color: #000;

  span {
    display: flex;
    width: 288px;
    height: 20px;
    justify-content: center;

    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding: 8px 8px 0 0;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  gap: 20px;
`;

// MODAL DELETE STYLE

export const ContainerDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 457px;
  height: 189px;
  border-radius: 10px;
  background-color: #d9d9d9;
  padding-top: 31px;

  span {
    display: flex;
    width: 100%;
    justify-content: center;
    color: #000;

    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
  }
`;

export const ContainerButtonsGarbage = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 54px;
`;

//EDITANDO BUTTONS
export const ButtonFixed = styled.button`
  position: fixed;
  right: 23px;
  bottom: 22px;
  width: 71px;
  height: 71px;

  font-size: 25px;
  color: #ffffff;
  cursor: pointer;

  border-radius: 36px;
  border: 1px solid #000;
  background-color: #000;
`;

export const ContainerIconSearch = styled.div`
  /* position: absolute;
  display: inline-block;

  left: 400;
  top: 45; */
  position: absolute;
  display: inline-block;
  /* right: 300px;
  top: 17px; */
  right: 400px;
  top: 45px;

  img {
    size: 24px;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  width: 320px;
  justify-content: flex-end;

  @media screen and (max-width: 650px) {
    display: flex;
    width: 100%;
  }
`;
