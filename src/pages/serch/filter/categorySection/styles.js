import styled from "styled-components";

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  user-select: none;
  section {
    display: none;
  }
  h3 {
    cursor: pointer;
  }
`;

export const CategorySpan = styled.span`
  margin: 3px 5px;
  display: flex;
  flex-direction: column;
`;
export const CategoryBox = styled.label`
  display: flex;
  border-top: 1px solid;
  justify-content: space-between;
  border-bottom: none !important;
  padding: 0 0 0 5px !important;
  cursor: pointer;
`;
export const CategoryTitle = styled.h4`
  line-height: 30px;
  width: calc(100% - 20px);
  margin: 0 3px 0 0;
`;
export const CategoryInput = styled.input`
  align-self: center;
  width: 15px;
  height: 15px;
  margin: 0;
  cursor: pointer;
`;

export const SubCategorySection = styled.div`
  display: none;
  transition: 400ms ease-in-out 0s;

  ul {
    margin: 5px 0 0 0;
  }
  li {
    list-style: none;
    border: 1px solid green;
    border-radius: 12px;
    margin: 2px 4px 2px -30px;
    padding: 0 5px;

    :hover {
      background: #acc485;
    }
  }
  label {
    line-height: 21px;
  }
`;
