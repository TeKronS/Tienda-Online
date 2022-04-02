import styled from "styled-components";

export const CategorySection = styled.section`
  grid-template-rows: minmax(25px, 40px) 1fr;
  width: calc(100% - 20px);
  overflow-y: auto !important;
  justify-items: start !important;
  @media screen and (max-width: 700px) {
    justify-items: center !important;
  }
`;

export const BoxCategori = styled.div`
  display: grid;
  align-self: start;
  align-content: start !important;
  gap: 6px;
  width: 50%;
  /* margin: 0 8px 0 0; */
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CategoryItem = styled.span`
  margin: 0;
  width: 100%;
  position: relative;
  button {
    border-radius: 4px;
    border: 1px solid green;
    background: #f4f4f4;
    line-height: 30px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    cursor: pointer;
    @media screen and (max-width: 700px) {
      border-radius: 99px;
      text-align: center;
    }
  }
`;

export const SubCategorysBox = styled.div`
  display: none;
  position: absolute;
  background: #b8f3dc;
  top: 1px;
  left: calc(100% + 5px);
  z-index: 1;
  width: calc(100% - 10px);
  border: 1px solid green;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 55px;

  @media screen and (max-width: 700px) {
    top: 33px;
    left: 10%;
    right: 10%;
    width: auto;
    border-top: none;
  }
`;

export const SubCategoryItem = styled.ul`
  margin: 10px;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: space-around !important;
  flex-wrap: wrap;
  border-radius: 99px;

  li {
    display: flex;
    list-style: none;
  }

  div {
    display: flex;
  }

  input {
    display: none;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  line-height: 30px;
  display: grid;
  color: black;
  text-align: center;
  font-size: 14px;
  padding: 0 10px;
  border: 2px solid burlywood;
  border-radius: 99px;
  height: auto;
  :hover {
    background: #8dd3b8;
  }
  :active {
    background: #499276 !important;
  }
`;
