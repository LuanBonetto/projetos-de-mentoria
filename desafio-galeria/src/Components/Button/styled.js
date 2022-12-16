import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 51px;

  width: ${(props) => (props.width ? "193px" : "320px")};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "#000"};

  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
`;
