import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d"
};

const sizeChange = "600px";

export const BodyInputRegistro = styled.div`
  width: 98%;
  max-width: 1000px;
  margin: 20px auto;
  max-width: 600px;
  border: 1px solid;
  border-radius: 7px;
`;

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  background: #ccc;
  border: 7px solid;
  border-radius: 7px;
  border-color: #ccc;

  @media (max-width: ${sizeChange}) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 20px;
  cursor: pointer;
  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding-right: 30px;
  background: #fff;
  border-radius: 3px;
  height: 35px;
  line-height: 35px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;
const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;
  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
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

const ContenedorTerminos = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
  @media (max-width: ${sizeChange}) {
    grid-column: span 1;
  }
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media (max-width: ${sizeChange}) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  text-align: center;
  height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = styled.div`
  height: auto;
  line-height: 25px;
  background: #f66060;
  padding: 10px 15px;
  border-radius: 3px;
  grid-column: span 2;
  @media (max-width: ${sizeChange}) {
    grid-column: span 1;
  }
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError
};
