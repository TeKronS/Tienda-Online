import styled from "styled-components";

export const BodyInputLogin = styled.div`
  margin: 50px auto;
  width: 95%;
  max-width: 300px;
  border: 1px solid #275a46;
  border-radius: 7px;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: 555;
  color: #275a46;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    margin: 20px 15px 5px;
    gap: 7px;
    input {
      padding: 0 10px;
      line-height: 35px;
      border-radius: 5px;
    }
  }
  a {
    margin: 5px auto 20px;
    color: green;
    :hover {
      color: yellowgreen;
    }
  }
`;
