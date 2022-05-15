import styled from "styled-components";

export const BodyCard = styled.article`
  display: flex;
  box-sizing: content-box;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  font-size: 2.2em;
  :hover {
    .title {
      height: calc(100% - 30px);
    }
    .price {
      height: 30px;
    }
  }
`;

export const Img = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  align-self: center;
  justify-self: center;
`;

export const Title = styled.div`
  font-family: system-ui;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(250, 250, 250, 0.5);
  height: 0;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  transition: 250ms ease-in-out 0s;
  font-weight: bold;
  a {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`;

export const Price = styled.span`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(243, 248, 20, 0.5);
  height: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: 250ms ease-in-out 0s;
  font-weight: bold;
`;
