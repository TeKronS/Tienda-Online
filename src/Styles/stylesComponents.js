import styled from "styled-components";

export const Body = styled.div`
  display: block;
  width: 100%;
  position: relative;
  min-height: 100vh;
`;

export const BodyShop = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  width: 100%;
  top: 130px;
  min-height: calc(100vh - 130px);
  font-size: 10px;
  .desplegeFilter {
    .desplege svg {
      transform: rotateY(0deg) !important;
    }
    @media screen and (max-width: 600px) {
      .order {
        left: 40px;
      }
      .desplege {
        height: 32px !important;
        width: 32px !important;
      }
      .desplege .relleno {
        height: 0 !important;
        width: 0 !important;
      }
    }
  }
`;

export const FooterShop = styled.footer`
  background: #bdcabc;
  width: 100%;
  height: 30px;
  line-height: 24px;
  text-align: center;
  align-self: flex-end;
  grid-column-start: 1;
  grid-column-end: -1;
  margin-top: auto;
  box-sizing: border-box;
  box-shadow: 1px -1px 5px -1px gray;
`;

export const Button = styled.button`
  padding: 0 17px 4px;
  background: #207150;
  color: white;
  line-height: 35px;
  border-radius: 7px;
  margin: 12px auto;
  box-shadow: 1px -1px 5px -1px #275a46;
  font-weight: 550;
  cursor: pointer;
  :hover {
    background: #1f5841;
  }
`;
