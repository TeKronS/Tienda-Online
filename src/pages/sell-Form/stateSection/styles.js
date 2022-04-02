import styled from "styled-components";

export const BoxStateSection = styled.section`
  grid-template-rows: minmax(25px, 40px) 1fr;
`;

export const BoxState = styled.div`
  display: grid;
  width: 100%;
  max-width: 260px;
  min-height: 75px;
  max-height: 140px;
  grid-template-columns: 80px 80px;
  grid-template-rows: 1fr;
  align-content: start;
  justify-content: space-between;
  gap: 0px 5px;
`;

export const State = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 99px;
  border-bottom-right-radius: 99px;
  cursor: pointer;
  label {
    cursor: pointer;
    color: black;
    font-size: 20px;
    text-align: center;
    font-weight: 555;
    text-shadow: 0px -2px 15px #b8f3dc;
    margin: auto;
  }
  input {
    cursor: pointer;
    width: 30px;
    background-color: #fff;
    height: 40px;
    margin: auto;
    :checked {
      width: 40px;
    }
  }
`;
