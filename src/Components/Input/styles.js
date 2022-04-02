import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d"
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-right: 5px;
`;

export const Input = styled.input`
  width: calc(100% - 30px);
  padding: 3px 27px 3px 3px;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s ease all;
  border: 1px solid;
  &:focus {
    border: 1px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 1px solid;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 1px solid ${colores.error} !important;
    `}
`;

export const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 2px;
  top: 25%;
  z-index: 2;
  font-size: 16px;
  opacity: 0;
  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
`;
