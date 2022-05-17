import styled from "styled-components";

export const OrderBox = styled.section`
  border: 1px solid #021323;
  background: #207150;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  white-space: nowrap;
  position: fixed;
  overflow: hidden;
  top: 140px;
  right: 2px;
  left: 210px;
  z-index: 2;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: white;
  transition: 350ms ease-in-out 0s;

  button {
    margin-right: 1px;
    background: #d1e1da;
    border: none;
    margin-right: 3px;
    cursor: pointer;
    :hover {
      background: #acc485;
    }
  }
  span {
    font-size: 16px;
    line-height: 22px;
    margin-right: 6px;
  }
  div {
    font-size: 13px;
    display: inline-block;
    pointer-events: none;
    width: 10px;
    margin-left: 2px;
  }
`;
