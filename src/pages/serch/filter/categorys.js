import { categorys } from "./../../../categorys";
import { CategorySection, SubCategorySection, CategorySpan } from "./styles";
export const Categorys = () => {
  function handleClick(e) {
    const child = e.target.nextSibling;

    if (child.style.display === "" || child.style.display === "none") {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }
  return (
    <CategorySection>
      <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
        Categorias
      </h3>
      <section>
        {Object.entries(categorys).map((entry) => {
          const [key, value] = entry;
          return (
            <CategorySpan key={key}>
              <h4 id={key}>{value.id}</h4>
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
                              id={key}
                              value={key}
                              type={"radio"}
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
