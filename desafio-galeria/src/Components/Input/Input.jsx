import React from "react";
import { MainInput } from "./styled";

export function InputComponent(props) {
  return (
    <MainInput
      type={props.type}
      width={props.width}
      height={props.height}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
