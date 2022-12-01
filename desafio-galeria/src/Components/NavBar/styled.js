import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 110px;
  background-color: #202020;
  justify-content: space-between;
`;

export const Image = styled.img`
  /* width: auto;
    height: 80px;
    margin: 10px 10px; */

  width: 68px;
  height: 68px;
  margin: 21px;
  margin-left: 120px;
`;

export const Input = styled.input`
  /* width: 260px;
    height: 35px;
    padding: 5px 5px;
    margin: 35px 35px; */

  display: flex;
  padding: 16px;
  gap: 16px;
  width: 320px;
  height: 56px;
  margin: 27px 0;
  margin-right: 120px;
  flex-direction: row;
  align-items: center;

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

export const ContainerTeste = styled.div`
  display: grid;
  grid-template-rows: 400px 400px 400px;
  grid-template-columns: 550px 550px 550px;
`;

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

//MODAL STYLE

export const ContainerOverlay = styled.div`
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  width: 320px;
  height: 51px;
  border-radius: 4px;

  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;

  color: #fff;
  background-color: #000;
`;
