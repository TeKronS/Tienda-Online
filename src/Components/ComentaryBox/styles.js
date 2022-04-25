import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ComentaryCardBody = styled.article`
  margin: 10px 10px 20px 10px;
  box-sizing: border-box;
  box-shadow: 1px -1px 2px -1px #275a46, -1px 1px 2px -1px #275a46;
  border-radius: 4px;
`;

export const Name = styled.div`
  font-size: 0.7em;
  text-align: left;
  padding: 1px 5px 0 5px;
  span {
    color: green;
    font-size: 15px;
    font-weight: bold;
  }
`;

export const Comentary = styled.div`
  font-size: 0.9em;
  text-align: left;
  margin: 5px 0 5px 0;
  padding: 5px 10px;
  border-top: 1px solid grey;
`;

export const Response = styled.span`
  text-align: left;
  line-height: 37px;
  display: flex;
  margin-left: 15px;
  font-size: 0.9em;

  div {
    font-size: 1.1em;
    height: 5px;
    padding-top: 10px;
    display: inline-block;
    margin: 0 15px 0 15px;
    line-height: 0;
    opacity: 0.7;
    pointer-events: none;
    user-select: none;
  }
`;

export const SendButton = styled.button`
  align-self: end;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 1em;
  padding: 4px 6px;
  cursor: pointer;
  border-top: 1px solid green;
  border-left: 1px solid green;
  border-radius: 4px;
  :hover {
    background: #8ab18c;
  }
  :active {
    background: white;
  }
`;

export const ComentaryInput = styled.textarea`
  box-sizing: border-box;
  width: calc(100% - 30px);
  margin: 0 0 15px 10px;
  resize: none;
  padding: 10px;
  min-height: 60px !important ;
  overflow: hidden;
`;

export const Time = styled.time`
  margin-left: 9px;
  font-size: 0.75em;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
