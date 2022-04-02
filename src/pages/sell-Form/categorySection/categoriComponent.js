import { useRef } from "react";
import { categorys } from "./../../../categorys";
import {
  CategorySection,
  BoxCategori,
  CategoryItem,
  SubCategorysBox,
  SubCategoryItem,
  Label
} from "./styles";
//---------------------------------
export const CategoryList = ({ setCategoryandSub, isEnableButtonNext }) => {
  const elementRef = useRef(null);
  const subCategoryRef = useRef(null);

  //---
  function categoryChanged(e) {
    if (e.target.tagName === "BUTTON") {
      const categoryId = e.target.id;
      const element = e.target.nextSibling;
      if (categorys[categoryId]) {
        if (setCategoryandSub() === e.target.id) {
          element.classList.toggle("visible");
          e.target.style.backgroundColor = "#B8F3DC";
          return;
        }
        setCategoryandSub(categoryId, null);
        element.classList.add("visible");
        e.target.style.backgroundColor = "#B8F3DC";
        removeBoxSubCategory(element);
        isEnableButtonNext();
      } else {
        alert("Por favor reinicie La Pagina");
      }
      return;
    }
    if (e.target.tagName === "INPUT") {
      subCategoryChanged(e);
      return;
    }
    if (e.target.tagName === "SECTION") {
      removeBoxSubCategory();
    }
  }

  //--------------------------

  function subCategoryChanged(e) {
    const element = e.target.parentNode.parentNode.parentNode.parentNode;
    const categoryId = element.parentNode.children[0].id;
    const subCategoryId = e.target.id;
    if (categorys[categoryId] && categorys[categoryId][subCategoryId]) {
      elementRef.current = element;
      if (e.target.checked === true) {
        if (subCategoryRef.current) {
          subCategoryRef.current.style.backgroundColor = "";
          subCategoryRef.current.style.color = "black";
        }
        subCategoryRef.current = e.target.previousSibling;
        subCategoryRef.current.style.backgroundColor = "#1F7653";
        subCategoryRef.current.style.color = "white";
        setCategoryandSub(categoryId, subCategoryId);

        isEnableButtonNext();
      }
    } else {
      alert("Por favor reinicie La Pagina");
    }
  }

  function removeBoxSubCategory(element) {
    if (elementRef.current) {
      elementRef.current.classList.remove("visible");
      if (element) {
        elementRef.current.previousSibling.style.backgroundColor = "#f4f4f4";
        const ulBox = elementRef.current.children[0];
        for (let i = 0; i < ulBox.childElementCount; i++) {
          const input = ulBox.children[i].children[0].children[1];
          if (input.checked === true) {
            input.checked = false;
            input.previousSibling.style.backgroundColor = "";
            subCategoryRef.current.style.color = "black";
            i = ulBox.childElementCount;
          }
        }
      }
    }
    if (element) {
      if (element === "all") {
        elementRef.current = null;
      } else {
        elementRef.current = element;
      }
    }
  }
  //-------------------------
  return (
    <CategorySection onClick={categoryChanged}>
      <h3>Categorias</h3>
      <BoxCategori>{mainCategory()}</BoxCategori>
    </CategorySection>
  );
};
//------------------------------
function mainCategory() {
  const category = [];
  for (let key in categorys) {
    category.push(
      <CategoryItem key={key}>
        <button id={key} type={"button"}>
          <span style={{ pointerEvents: "none" }}>
            <b>{categorys[key].id}</b>
          </span>
          <b></b>
        </button>
        <SubCategorysBox>
          <SubCategoryItem>{secondaryCategory(categorys[key])}</SubCategoryItem>
        </SubCategorysBox>
      </CategoryItem>
    );
  }
  return category;
}
//-------------------------
function secondaryCategory(subCtgry) {
  const subCategorys = [];
  for (let key in subCtgry) {
    if (`${key}` !== "id") {
      subCategorys.push(
        <li key={key}>
          <div>
            <Label className={"box"} htmlFor={key}>
              {subCtgry[key]}
            </Label>
            <input id={key} value={key} type={"radio"} name={"subCategory"} />
          </div>
        </li>
      );
    }
  }
  return subCategorys;
}
//---------------------------
