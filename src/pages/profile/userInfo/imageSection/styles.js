import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 200px;
  justify-self: center;
  img {
    /* opacity: 0.5; */
    overflow: hidden;
    object-fit: cover;
    margin: auto;
  }
`;
