import styled from "styled-components";

export const Title = styled.h3`
  font-size: 3em !important;
  margin-bottom: 10px !important;
  text-decoration: underline green;
  text-align: center;
`;

export const CardsContainer = styled.div`
  max-height: calc(200vh - 300px);
  max-width: 1200px;
  justify-self: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  margin: 10px auto;
  box-sizing: content-box !important;
  grid-gap: 10px;
  grid-template-areas:
    "area1 area2"
    "area1 area3"
    "area4 area5"
    "area4 area6";

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "area1 "
      "area2 "
      "area3 "
      "area4 "
      "area5 "
      "area6 ";
    max-height: 1600px;
  }
`;
