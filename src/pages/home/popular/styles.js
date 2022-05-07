import styled from "styled-components";

export const BodySlider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 290px;
  background: white;
  overflow: hidden;
  .buttonSlide {
    z-index: 3;
    position: absolute;
    top: calc(50% - 25px);
    height: 50px;
    width: 50px;
    border-radius: 50px;
    border: 1px gray solid;
    cursor: pointer;
    transition: 200ms ease-in-out 0s;
    font-size: 20px;
    font-weight: bold;
    color: gray;

    :hover {
      height: 58px;
      width: 58px;
      top: calc(50% - 29px);
      color: black;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  position: absolute;
  grid-auto-flow: column;
  justify-items: center;
  transition: 400ms ease-in-out 0s;
  width: calc(((100vw - 17px) / 1) * 15);
  grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 1));

  @media screen and (min-width: 400px) {
    width: calc(((100vw - 17px) / 2) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 2));
  }
  @media screen and (min-width: 600px) {
    width: calc(((100vw - 17px) / 3) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 3));
  }
  @media screen and (min-width: 800px) {
    width: calc(((100vw - 17px) / 4) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 4));
  }
  @media screen and (min-width: 1000px) {
    width: calc(((100vw - 17px) / 5) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 5));
  }
  @media screen and (min-width: 1200px) {
    width: calc(((100vw - 17px) / 6) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 6));
  }
  @media screen and (min-width: 1400px) {
    width: calc(((100vw - 17px) / 7) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 7));
  }
  @media screen and (min-width: 1600px) {
    width: calc(((100vw - 17px) / 8) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 8));
  }
  @media screen and (min-width: 1800px) {
    width: calc(((100vw - 17px) / 9) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 9));
  }
  @media screen and (min-width: 2000px) {
    width: calc(((100vw - 17px) / 10) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 10));
  }
  @media screen and (min-width: 2200px) {
    width: calc(((100vw - 17px) / 11) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 11));
  }
  @media screen and (min-width: 2400px) {
    width: calc(((100vw - 17px) / 12) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 12));
  }
  @media screen and (min-width: 2600px) {
    width: calc(((100vw - 17px) / 13) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 13));
  }
  @media screen and (min-width: 2800px) {
    width: calc(((100vw - 17px) / 14) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 14));
  }
  @media screen and (min-width: 2800px) {
    width: calc(((100vw - 17px) / 15) * 15);
    grid-template-columns: repeat(auto-fit, calc((100vw - 17px) / 15));
  }
`;

export const ButtonLeft = styled.button`
  left: 5px;
`;
export const ButtonRight = styled.button`
  right: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 10px !important;
  text-decoration: underline green;
`;
