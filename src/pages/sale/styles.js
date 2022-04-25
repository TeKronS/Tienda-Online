import styled from "styled-components";

export const SaleDocBody = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: minmax(50px, auto) calc(100vw / 3.5) auto auto;
  text-align: center;
  width: calc(100% - 20px);
  gap: 10px;
  margin: 10px;

  font-size: calc(1em + 1vw);
  /* @media screen and (max-width: 950px) {
    font-size: 16px;
  } */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows:
      minmax(50px, auto)
      minmax(200px, calc(100vw / 2.5))
      minmax(130px, auto) auto auto;
  }
  @media screen and (max-width: 400px) {
    font-size: calc(1em + 2vw);
    grid-template-columns: 100%;
    grid-template-rows: minmax(50px, auto) minmax(200px, auto) calc(100vw / 1.5) auto auto auto;
    text-align: center;
  }
`;

export const Title = styled.h2`
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  margin: 0;
  line-height: 26px;
  span {
    word-wrap: break-word;
    line-clamp: 2;
    width: 100%;
    margin: auto;
  }
`;

export const DataDocBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  overflow: visible;
  div {
    display: flex;
    height: 100%;
    width: auto;
    margin: auto auto 15px;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
  }
  span > span {
    color: green;
    font-weight: 555;
    font-size: 1.1em;
  }
  button {
    background: yellowgreen;
    height: auto;
    min-height: 30px;
  }
  @media screen and (max-width: 600px) {
    grid-row-start: 2;
  }
  @media screen and (max-width: 400px) {
    grid-row-start: 2;
  }
`;

export const Price = styled.span`
  font-weight: 555;
  overflow: visible;
  font-size: 2em;

  span {
    box-sizing: border-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    direction: ltr;
  }
`;

export const DocImgContainer = styled.section``;

export const DescriptionDocBody = styled.section`
  grid-column-start: 1;
  grid-column-end: -1;
  position: relative;
  box-sizing: content;
  overflow-x: auto;
  font-size: 1.1em;

  p {
    word-wrap: break-word;
    padding: 10px;
    text-align: left;
    margin: 10px;
  }
`;

export const ComentaryContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: -1;
  font-size: 1.1em;
`;
