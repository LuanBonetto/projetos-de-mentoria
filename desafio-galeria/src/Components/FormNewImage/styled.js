import styled from "styled-components";

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

  cursor: pointer;
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
