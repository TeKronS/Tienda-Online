import { useRef } from "react";
import { categorys } from "./../../../../categorys";
import {
  CategorySection,
  CategoryTitle,
  CategoryBox,
  CategoryInput,
  SubCategorySection,
  CategorySpan,
} from "./styles";

export const Categorys = ({ filterResult }) => {
  const prevElmtCategory = useRef(null);
  const prevElmtSubCategory = useRef(null);
  const prevElmtOpen = useRef(null);

  function handleClick(e) {
    const child = e.target.nextSibling;

    if (child.style.display === "" || child.style.display === "none") {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }

  function changeSubCategory(e) {
    let subCategory;
    if (e.target.checked) {
      subCategory = e.target.value;
      if (prevElmtSubCategory.current) {
        prevElmtSubCategory.current.checked = false;
      }
      prevElmtSubCategory.current = e.target;
    } else {
      subCategory = false;
      prevElmtSubCategory.current = null;
    }

    filterResult({ subCategory: subCategory });
  }

  function changeCategory(e) {
    let category;
    if (e.target.checked) {
      category = { category: e.target.value };
      if (prevElmtCategory.current) {
        prevElmtCategory.current.checked = false;
        prevElmtOpen.current.style.display = "none";
        if (prevElmtSubCategory.current) {
          category = { category: e.target.value, subCategory: false };
          prevElmtSubCategory.current.checked = false;
          prevElmtSubCategory.current = null;
        }
      }
      prevElmtCategory.current = e.target;
      prevElmtOpen.current = e.target.parentNode.nextSibling;
      e.target.parentNode.nextSibling.style.display = "flex";
    } else {
      category = { category: false, subCategory: false };
      if (prevElmtSubCategory.current) {
        prevElmtSubCategory.current.checked = false;
        prevElmtSubCategory.current = null;
      }
      prevElmtCategory.current = null;
      e.target.parentNode.nextSibling.style.display = "none";
    }
    filterResult(category);
  }

  return (
    <CategorySection>
      <h3 onClick={handleClick}>Categorias</h3>
      <section>
        {Object.entries(categorys).map((entry) => {
          const [key, value] = entry;
          return (
            <CategorySpan key={key}>
              <CategoryBox htmlFor={key}>
                <CategoryTitle>{value.id}</CategoryTitle>
                <CategoryInput
                  onChange={changeCategory}
                  type={"checkbox"}
                  id={key}
                  value={key}
                  name={"Category"}
                />
              </CategoryBox>
              <SubCategorySection>
                <ul>
                  {Object.entries(value).map((entry) => {
                    const [key, value] = entry;
                    if (`${key}` !== "id") {
                      return (
                        <li key={key}>
                          <label htmlFor={key}>
                            {value}
                            <input
                              onChange={changeSubCategory}
                              id={key}
                              value={key}
                              type={"checkbox"}
                              name={"subCategory"}
                            />
                          </label>
                        </li>
                      );
                    }
                  })}
                </ul>
              </SubCategorySection>
            </CategorySpan>
          );
        })}
      </section>
    </CategorySection>
  );
};
