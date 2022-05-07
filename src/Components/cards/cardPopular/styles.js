import styled from "styled-components";

export const BodyCard = styled.article`
  height: 280px;
  width: 180px;
  border: 1px gray solid;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  a {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid;
    :visited {
      color: gray;
    }
    :link {
      color: gray;
    }
    :hover {
      color: black;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 180px;
  width: 180px;
  img {
    overflow: hidden;
    object-fit: contain;
    margin: auto;
    height: 100%;
    width: 100%;
  }
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
  margin-top: 2px;
  span {
    color: green;
    font-size: 17px;
  }
`;

export const Title = styled.h3`
  box-sizing: border-box;
  font-family: system-ui;
  font-size: 15px !important;
  line-height: 22px !important;
  height: 75px;
  margin: 2px 0 0 0 !important;
  padding: 0;
  span {
    display: -webkit-box;
    text-overflow: ellipsis ellipsis !important;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 100%;
    width: 170px;
    margin: auto;
    text-align: center;
  }
`;
