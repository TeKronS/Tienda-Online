import styled from "styled-components";

export const Body = styled.section`
  display: grid;
  width: 100%;
  margin: auto;
  h2,
  h1 {
    text-align: center;
    font-size: 40px;
    line-height: 50px;
    margin: auto;
    a {
      color: black;
      :hover {
        color: green;
      }
    }
  }
`;
