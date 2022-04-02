import styled from "styled-components";

export const FilterBarBoxPosition = styled.section`
  position: fixed;
  overflow: visible;
  z-index: 5;
  bottom: 0;
  top: 140px;
`;

export const FilterBar = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  height: 100%;
  box-shadow: 1px -1px 5px -1px #275a46;
  border-top-right-radius: 4px;
  width: 200px;
  transition: 350ms ease-in-out 0s;
  overflow: hidden;
  background: #f4f4f4;
  font-size: 18px;

  h3 {
    text-align: center;
    line-height: 30px;
    color: #1b3228;
    background: #d1e1da;
    margin: 8px 0;

    :hover {
      background: #b7cdc3;
    }
  }
  label {
    justify-content: space-between;
    display: flex;
    padding: 0 5px;
    line-height: 30px;
    border-bottom: 1px solid green;
    align-items: center;
    :hover {
      background: #acc485;
    }
  }
`;

export const FilterHeader = styled.div`
  width: 100%;
  height: 32px;
  cursor: pointer;
  background: #207150;
  text-align: right;

  :hover {
    color: white;
    background: #1f5841;
  }

  svg {
    margin-right: 10px;
    font-size: 32px;
    @media screen and (max-width: 600px) {
      transform: rotateY(180deg);
    }
  }
`;

export const FilterType = styled.div`
  display: grid;
  align-content: start;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 8px;
  width: 200px;
  transition: 350ms ease-in-out 0s;
`;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  section {
    display: none;
  }
  h4 {
    padding-left: 5px;
    line-height: 28px;
    width: 100%;
    margin: 0;
    border-top: 1px solid;
  }
`;

export const CategorySpan = styled.span`
  margin: 3px 5px;
`;

export const SubCategorySection = styled.div`
  ul {
    margin: 5px 0;
  }
  li {
    list-style: none;
    border: 1px solid green;
    border-radius: 12px;
    margin: 2px 4px 2px -30px;
    padding: 0 5px;
    :hover {
      background: #acc485;
    }
  }
  label {
    line-height: 21px;
  }
`;

export const PriceSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 30px;
  label {
    text-align: left;
    margin-top: 5px;
    border-top: 1px solid green;
    border-bottom: none;
  }
  input {
    align-self: center;
    width: 80%;
  }
`;

export const Relleno = styled.div`
  position: fixed;
  top: 100%;
  width: 200px;
  height: 1000px;
  background: #bdcabc;
  transition: 350ms ease-in-out 0s;
  text-align: center;
  overflow: hidden;
`;
