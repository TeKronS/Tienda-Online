import styled from "styled-components";

export const ProfileSection = styled.section`
  display: grid;
  width: 100%;
  max-width: calc(100vw - 27px);
  margin: 10px;
  grid-template-columns: 100%;
  overflow: hidden;
  .animation {
    animation-name: example;
    animation-duration: 2s;
    animation-delay: 0s;
    @keyframes example {
      0% {
        transform: translateX(200px);
      }
      100% {
        transform: translateX(0);
      }
    }
    @media screen and (max-width: 530px) {
      animation-duration: 1.3s;
      @keyframes example {
        0% {
          transform: translateY(200px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: green;
  font-size: 24px;
  grid-column-start: 1;
  grid-column-end: -1;
`;

export const InfoVentas = styled.section`
  font-size: 1.6em;
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  line-height: 30px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin-bottom: 5px;

  span {
    font-weight: 555;
    padding: 0 5px;
    span {
      padding: 0 2px;
      color: green;
    }
  }
`;
