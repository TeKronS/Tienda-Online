import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
  font-size: 16px;
  h2 {
    text-align: center;
  }
  text-decoration: none;
  @media screen and (max-height: 500px) {
    min-height: calc(100vh - 30px);
    h2 {
      margin: 2px 5px 6px;
    }
  }
`;

export const Form = styled.form`
  position: relative;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto 6px;
  overflow: hidden;
  border: 1px solid green;
  height: 100%;
  max-height: 360px;
`;

export const SliderBox = styled.div`
  transition: 1000ms ease-in-out 0s;
  display: grid;
  height: calc(100% - 50px);
  width: 100%;
  grid-template-columns: repeat(7, 100%);
  grid-auto-flow: column;
  section {
    display: grid;
    grid-gap: 10px;
    margin: 14px 10px 7px;
    overflow-y: auto !important;
    font-size: 18px;
    line-height: 20px;
    justify-items: center;
    overflow: hidden;
    @media screen and (max-height: 500px) {
      margin: 10px 4px 0;
      grid-gap: 6px;
    }
  }
  h3 {
    color: green;
    text-shadow: 0px -2px 15px #b8f3dc;
    text-align: center;
    font-size: 24px;
    height: 20px;
    margin: auto;
  }
`;

export const Label = styled.label`
  color: green;
  text-align: center;
  font-size: 24px;
  font-weight: 555;
  text-shadow: 0px -2px 15px #b8f3dc;
  height: 20px;
  margin: auto;
`;

export const Input = styled.input`
  box-sizing: border-box;
  box-shadow: 1px -1px 5px -1px #275a46;
  border-radius: 99px;
  border: 1px solid green;
  padding: 10px;
  transition: 250ms ease-in-out 0s;
  margin: auto;

  :focus {
    outline: none !important;
    border-color: #275a46;
    box-shadow: 1px -1px 5px -1px #14da8c;
    @media screen and (max-height: 100px) {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      margin: 0;
    }
  }
`;

export const BoxTitle = styled.section`
  grid-template-rows: minmax(20px, 36px) minmax(55px, 65px) auto;

  input {
    width: 80%;
    max-width: 600px;
    margin: 10px 0;
  }
`;

export const BoxDescription = styled.section`
  grid-template-rows: minmax(20px, 36px) 1fr 5px;

  textarea {
    margin: 10px 0;
    width: 90%;
    height: 100%;
    resize: none;
    padding: 10px;
    transition: 250ms ease-in-out 0s;
    border: 1px solid green;

    :focus {
      outline: none !important;
      border-color: #275a46;
      box-shadow: 1px -1px 5px -1px #14da8c;
    }
  }
`;

export const BoxAmount = styled.section`
  grid-template-rows: minmax(20px, 36px) minmax(55px, 65px) 1fr;

  input {
    max-width: 155px;
    margin: 10px 0;
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  button {
    cursor: pointer;
    padding: 8px 12px;
    margin: 5px;
  }
`;

export const ButtonBack = styled.button`
  z-index: 3;
  visibility: hidden;
`;
export const ButtonSend = styled.button`
  position: absolute;
  right: 0;
  z-index: 4;
  display: none;
`;
export const ButtonNext = styled.button`
  z-index: 3;
  visibility: visible;
  opacity: 0.6;
  pointer-events: none;
`;
