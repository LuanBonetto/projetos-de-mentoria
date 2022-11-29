import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 457px;
  height: 189px;
  border-radius: 10px;
  background-color: #d9d9d9;
  /* padding: 31px 0 33px 0; */
  color: #000;
  align-items: center;

  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  span {
    display: flex;
    margin-top: 31px;
  }

  margin-left: 60px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 54px;
`;

export const Button = styled.button`
  display: flex;
  width: 193px;
  height: 51px;

  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.background || "#000"};
  color: ${(props) => props.color || "#fff"};
`;
