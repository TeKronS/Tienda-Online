import styled from "styled-components";

export const HeaderShop = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: 90px 40px;
  grid-template-columns: 80px minmax(300px, 1fr) auto;
  z-index: 4;
  background: rgba(31, 118, 83, 0.98);
  grid-template-areas:
    " Logo Search User"
    " Nav  Nav    Nav ";

  a {
    background: rgba(55, 55, 55, 0.1);
    text-decoration: none;
    text-align: center;
    color: white;
    border: 1px solid white;
    border-radius: 6px;
    box-shadow: 2px 1px 5px 3px #275a46;
    font-weight: 550;
    :hover {
      background: rgba(55, 55, 55, 0.6);
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 80px 1fr 50px;
  }
  @media screen and (max-height: 400px) {
    position: absolute;
  }
`;

export const Logo = styled.div`
  grid-area: Logo;
  margin: auto 2px auto auto;
  a {
    visibility: hidden;
  }
  img {
    visibility: visible;
    box-shadow: 2px 1px 5px 3px #275a46;
    width: 70px;
    height: 70px;
    border-radius: 999px;
  }
`;

export const SearchBarrSection = styled.section`
  display: flex;
  grid-area: Search;
  justify-content: center;
  align-items: center;
  margin: 0 10px 20px;

  input {
    border: none;
    border-radius: 2px;
    width: 80%;
    max-width: 500px;
    height: 32px;
    padding: 0 5px 2px;
  }
  button {
    margin: 0;
    height: 36px;
  }
`;

export const UserSection = styled.section`
  grid-area: User;
  display: grid;
  grid-template-rows: 60px 30px;
  position: relative;
  margin: 2px 10px 5px;
  a {
    font-size: 14px;
    margin-top: auto;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const BoxUser = styled.div`
  display: grid;
  grid-template-rows: 60px 30px;
  grid-template-columns: 50px 50px 40px 60px;
  box-sizing: border-box;
  line-height: 27px;
  top: 13px;
  right: 14px;

  @media screen and (max-width: 600px) {
    display: grid;
    position: absolute;
    background: #323f31;
    transform-origin: top right;
    transition: 400ms ease-in-out 0s;
    height: 200px;
    width: 170px;
    grid-template-rows: 70px 30px 90px;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1px -1px 5px -1px #275a46;
  }
`;
export const BurgerBox = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: start;
  user-select: none;
  margin: 4px 0 0;
  svg {
    cursor: pointer;
    color: white;
    border: 1px solid white;
    padding: 2px;
    border-radius: 5px;
    box-shadow: 2px 0px 20px 6px #275a46;
    z-index: 2;
  }
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
export const UserImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 999px;
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 600px) {
    grid-row-start: 1;
  }
`;

export const UserName = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  text-align: center;
  border: 1px solid;
  border-radius: 7px;
  background: #caf7e6;
  width: 100%;
  @media screen and (max-width: 600px) {
    grid-row-start: 2;
  }
`;

export const Options = styled.div`
  font-size: 13px;
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    height: 50%;
    border: 1px solid;
    border-radius: 7px;
  }
`;

export const NavigationBarr = styled.nav`
  grid-area: Nav;
  display: inline-flex;
  box-shadow: 1px -1px 5px -1px #275a46;
  justify-content: center;
  a {
    margin: auto 7px;
    padding: 0px 7px;
    line-height: 30px;
  }
`;

export const ButonLogin = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: -1;
  a {
    margin: auto;
    line-height: 35px;
    width: 96px;
  }
  top: 13px;
  left: -134px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    display: grid;
    position: absolute;
    background: #323f31;
    transform-origin: top right;
    transition: 400ms ease-in-out 0s;
    height: 130px;
    width: 150px;
    border-radius: 5px;
    padding: 10px;
    grid-template-rows: 1fr 40px;
    align-items: end;

    gap: 5px;
    box-shadow: 1px -1px 5px -1px #275a46;
    a {
      margin: 0;
      width: 100%;
      :hover {
        background: rgba(155, 155, 155, 0.7);
      }
    }
  }
`;
