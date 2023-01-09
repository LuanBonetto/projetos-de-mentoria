import styled from "styled-components";

export const CardContainer = styled.div`
  width: 355px;
  height: 277px;
  margin: 56px 88px;

  /* background-color: #000; */

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 355px;
  height: 277px;
  /* background-color: orange; */
  object-fit: cover;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  color: #000;
`;

export const ContainerDiv = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
  font-weight: bold;
`;

export const ContainerButtons = styled.div`
  /* display: flex; */
  /* position: relative;
  right: 30px;
  top: 8px;
  flex-direction: column; */
  /* justify-content: space-around; */
  /* gap: 8px;
  height: 90px; */
  /* background-color: green; */
  /* align-items: flex-end; */

  /* display: none; */
  /* display: flex; */
  /* position: relative;
  width: 30px;
  height: 45px;
  right: 30px;
  top: 8px;
  flex-direction: column;
  background-color: blue;
  gap: 20px;
  &:hover {
  } */

  /* bottom: 274px;
  left: 328px; */
  position: relative;
  bottom: 272px;
  left: 328px;

  display: flex;
  flex-direction: column;
  width: 30px;
  gap: 8px;
  opacity: 0;
  transition: opacity 1s;
`;

export const ButtonEdit = styled.button`
  display: flex;
  width: 23px;
  height: 23px;
  border-radius: 4px;
  background: rgba(32, 32, 32, 0.8);
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContainerImageCard = styled.div`
  /* display: flex; */
  height: 277px;

  &:hover {
    ${ContainerButtons} {
      opacity: 1;
    }
  }
`;
