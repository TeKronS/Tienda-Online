import { useState } from "react";
import { querySales } from "./../firebase/firebase-querys";
import { SearchBarrSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SerchBarrComponent = () => {
  const [query, setQuery] = useState("");
  function serch() {
    if (query) {
      querySales(query);
    }
  }
  return (
    <SearchBarrSection>
      <input
        value={query}
        type={"text"}
        placeholder={"Busqueda"}
        // onChange={(e) => {
        //   setQuery(e.target.value);
        // }}
      />
      <button onClick={serch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </SearchBarrSection>
  );
};
