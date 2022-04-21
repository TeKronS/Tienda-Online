import styled from "styled-components";
import spiner from "./spiner.svg";

export const Body = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 2;
  background-image: url(${spiner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BottomInput = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid black;
  padding: 3px;
  visibility: visible;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
