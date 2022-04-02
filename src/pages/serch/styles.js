import styled from "styled-components";

export const SalesBody = styled.section`
  position: relative;
  display: grid;
  top: 40px;
  left: 210px;
  width: calc(100% - 212px);
  min-height: 400px;
  overflow: hidden;
  transition: 350ms ease-in-out 0s;
  @media screen and (max-width: 600px) {
    left: 10px;
    width: calc(100% - 12px);
  }
`;

export const ItemSerch = styled.article`
  display: grid;
  position: relative;
  grid-template-columns: 222px 1fr;
  font-size: 16px;
  width: calc(100% - 5px);
  height: 222px;
  overflow: hidden;
  margin: 10px 0 0 1px;
  box-sizing: border-box;

  @media screen and (max-width: 450px) {
    height: 172px;
    grid-template-columns: 172px 1fr;
  }

  a {
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: green;
    height: 100%;
    direction: ltr;
    margin: 0;
  }
`;

export const ItemSerchImgContainer = styled.div`
  display: flex;
  padding: 5px;
  width: 210px;
  height: 212px;
  background: #eff0f0;
  @media screen and (max-width: 450px) {
    height: 162px;
    width: 160px;
  }
  img {
    overflow: hidden;
    object-fit: contain;
    margin: auto;
    border-radius: 3px;
  }
`;

export const TextItemContainer = styled.div`
  display: grid;
  padding: 10px 0 10px 5px;
  align-content: space-between;
  font-family: system-ui;
  h3 {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: 50px;
    font-family: system-ui;
    font-size: 18px !important;
    line-height: 24px !important;
    font-weight: 555 !important;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    text-decoration: underline overline grey;
  }
  span {
    color: green;
  }
`;
