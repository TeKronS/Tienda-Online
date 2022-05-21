import styled from "styled-components";

export const PriceSectionBody = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 30px;
  label {
    text-align: left;
    margin-top: 5px;
    border-top: 1px solid green;
    border-bottom: none !important;
  }
  input {
    align-self: center;
    width: 80%;
    margin: 3px 0;
  }
`;
