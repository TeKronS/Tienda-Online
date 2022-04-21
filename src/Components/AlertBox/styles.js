import styled from "styled-components";

export const Body = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 0;
  height: 0;
  .visible {
    transform: scale(1);
  }
`;
export const FixedBox = styled.div`
  display: flex !important;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.5);
  transform-origin: center;
  transform: scale(0);
  transition: 350ms ease-in-out 0s;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const AlertBoxElemt = styled.section`
  background: #da2f5f;
  border-radius: 6px;
  width: 90%;
  max-width: 500px;
  padding: 5px;
  div {
    padding: 4px;
    background: rgba(31, 118, 83, 0.98);
    border-radius: 6px;

    div {
      background: rgba(31, 118, 83, 0.98);
    }
  }

  span {
    display: block;
    padding: 10px;
    font-size: 24px;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 101;
  background: #c70039;
  border: 2px solid #da2f5f;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  font-size: 25px;
  color: white;
  :before {
    content: "X";
  }
  :hover {
    background: #da2f5f;
  }
`;

export const OptionButtonBox = styled.div`
  display: flex;

  button {
    height: 50px;
    padding: 10px;
    flex: 1;
    margin: 5px;
    border-radius: 6px;
    border: 2px solid black;
    background: #c70039;
    color: white;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background: #da2f5f;
    }
  }
`;
