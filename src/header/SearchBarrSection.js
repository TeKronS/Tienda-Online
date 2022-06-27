import { useState } from "react";
import { SearchBarrSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const SerchBarrComponent = () => {
  const location = useLocation();

  const [query, setQuery] = useState(
    location.pathname.includes("/Query") ? location.pathname.substr(7) : ""
  );
  let history = useHistory();

  function handledChanged(e) {
    setQuery(e.target.value);
  }

  function enterPress(e) {
    if (query) {
      if (e.key === "Enter") {
        e.target.blur();
        serch();
      }
    }
  }

  function serch() {
    if (query) history.push(`/Query/${query}`);
  }

  return (
    <SearchBarrSection>
      <input
        value={query}
        type={"text"}
        placeholder={"Busqueda"}
        onChange={handledChanged}
        onKeyPress={enterPress}
      />
      <button onClick={serch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </SearchBarrSection>
  );
};
