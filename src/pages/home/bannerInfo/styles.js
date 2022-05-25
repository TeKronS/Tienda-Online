import styled from "styled-components";

export const BodyInfoBanner = styled.section`
  word-break: break-word;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 700px;
  justify-self: center;
  grid-template-rows: 110px 60px 60px 60px 60px;
`;

export const Title = styled.h3`
  margin-bottom: 10px !important;
  text-decoration: underline green;
  font-size: 3em !important;
  text-align: center;
`;

export const Info = styled.div`
  font-size: 2em;
  display: grid;
  grid-template-columns: 110px 1fr;
  border-radius: 999px;
  align-items: center;

  .label {
    font-weight: bold;
    margin-left: 2px;
  }
  .content {
    position: relative;
    border: 1px solid gray;
    display: flex;
    cursor: pointer;
    width: calc(100% - 2px);
    height: 58px;
    border-radius: 999px;
    justify-self: center;
    overflow: hidden;
  }
  :hover {
    .content {
      border: 1px solid black;
    }
    a {
      width: 60px;
    }
  }
  .git {
    background: #171515;
  }
  .facebook {
    background: #1877f2;
  }
  .portafolio {
    background: #1d1d1d;
    height: 54px;
    /* background: white; */
    svg {
      color: white;
    }
  }
`;

export const LinkImg = styled.a`
  display: flex;
  position: absolute;
  width: calc(100% - 2px);
  transition: 300ms ease-in 0s;
  border-radius: 999px;
  top: 2px;
  right: 0;

  img {
    justify-self: center;
    margin: auto;
  }
`;

export const Text = styled.span`
  margin-left: 20px;
  margin: auto 60px auto 20px;
  font-size: 2em;
  word-break: break-word;
  line-height: 5px;
  @media screen and (max-width: 680px) {
    font-size: 1em;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7em;
    line-height: 15px;
    text-align: center;
    margin: auto 60px auto 10px;
  }
`;

export const Name = styled.span`
  margin: auto;
  font-size: 1.5em;
  color: #495f6d;
  font-weight: bold;
  @media screen and (max-width: 680px) {
    font-size: 1em;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
