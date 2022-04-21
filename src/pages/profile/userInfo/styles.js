import styled from "styled-components";

export const Ficha = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  border: 1px solid;
  border-right: none;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: auto;
  z-index: 2;
  background: #f4f4f4;

  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
    gap: 10px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 60px;
    width: calc(100% - 22px);
    border-right: 1px solid;
    padding: 0 6px;
  }
`;

export const DataContainer = styled.div`
  font-size: 1.5em;
  display: grid;
  grid-template-columns: 77px 15px minmax(100px, auto);
  margin-left: 10px;
  @media screen and (max-width: 530px) {
    justify-content: center;
    margin-left: 0;
  }
`;

export const DataSpan = styled.span`
  display: grid;
  grid-template-rows: 31px 31px 1fr 31px 31px 31px;
  font-weight: 555;
`;

export const DataDiv = styled.div`
  display: grid;
  grid-template-rows: 31px 31px 1fr 31px 31px 31px;

  input {
    height: 20px;
    margin-right: 10px;
  }
`;

export const DivText = styled.div`
  display: flex;
  border-bottom: 1px solid;
  align-items: center;
  div {
    max-width: 230px;
  }
  :last-child {
    border-bottom: none !important;
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  font-size: 2em;
  font-weight: 555;
  width: 100%;
  max-width: 800px;
  margin: 10px auto 0;
  color: white;
  align-content: stretch;
  justify-content: stretch;
  button {
    margin-right: 4px;
    padding: 3px 0;
    width: 100%;
    background: rgba(31, 118, 83, 0.98);
    cursor: pointer;
    :hover {
      background: #135841;
    }
  }
`;
