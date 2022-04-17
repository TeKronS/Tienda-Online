import styled from "styled-components";

export const Item = styled.article`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 150px;
  background: #eaf0e9;
  border: 4px solid green;
  justify-content: space-between;
  position: relative;
  margin-top: 5px;
  overflow: hidden;

  :hover {
    h3 {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      height: 166px;
      margin-top: 27px;
    }
    button {
      display: inline-block !important;
    }
  }
  @media screen and (max-width: 330px) {
    width: 140px;
  }
  @media screen and (max-width: 310px) {
    width: 150px;
  }
`;

export const Img = styled.div`
  display: flex;
  height: 150px;
  width: 140px;
  margin-left: -70px;
  position: absolute;
  bottom: 0;
  left: 50%;

  img {
    overflow: hidden;
    object-fit: contain;
    margin: auto;
    border-radius: 3px;
  }
  @media screen and (max-width: 330px) {
    width: 130px;
    margin-left: -65px;
  }
  @media screen and (max-width: 310px) {
    width: 140px;
    margin-left: -70px;
  }
`;

export const Title = styled.h3`
  display: grid;
  grid-template-rows: 136px 28px;
  grid-template-columns: 100%;
  font-size: 20px;
  margin: 10px 0 0;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  height: 26px;
  transition: 300ms ease-in-out 0s;
  word-wrap: break-word;
  border-radius: 5px;
  border-bottom: 1px solid;
  box-shadow: 1px 5px 12px -5px #275a46;

  a {
    margin: 0 3px;
    text-decoration: none;
    color: green;
  }

  span {
    background: yellowgreen;
    color: black;
  }
`;

export const DeleteButton = styled.button`
  display: none;
  position: absolute;
  width: 100%;
  height: 26px;
  font-size: 20px;
  font-weight: bold;
  background: #da2f5f;
  z-index: 3;
  line-height: 20px;
  border: none;
  cursor: pointer;
  border: 3px #da2f5f solid;
  :hover {
    background: #c70039;
  }
  :active {
    border: 3px black solid;
  }
`;
