import styled from "styled-components";

export const DataSellerBody = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 10px;

  h3 {
    margin: 10px;
    border-bottom: 1px dotted green;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: auto;
    margin: 5px auto 15px;
    text-align: left;
  }

  span > span {
    font-size: 1.1em;
    color: green;
    font-weight: 555;
  }

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 3;
    font-size: 1.1em;
    padding: 10px;
    div {
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-template-rows: 32px 32px;
      margin: auto;
      gap: 0 5px;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 400px) {
    grid-row-start: 4;
    font-size: 0.9em;
  }
`;
