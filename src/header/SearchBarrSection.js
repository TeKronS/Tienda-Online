import { useState, useEffect } from "react";
import { querySales } from "./../firebase/firebase-querys";
import { SearchBarrSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getCollection } from "./../firebase/fire-data-base";

export const SerchBarrComponent = () => {
  const [titles, setTitles] = useState(null);
  const [query, setQuery] = useState("");
  console.log(titles);
  useEffect(() => {
    getCollection("TitlesForSerch").then(async (result) => {
      const data = await result.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setTitles(data);
    });
  }, []);
  // .split(' ')
  function handledChanged(e) {
    setQuery(e.target.value);
  }

  async function serch() {
    let idList = [];
    if (query) {
      let keywords = query.split(" ");
      await keywords.forEach((keyword) => {
        for (let i = 0, len = titles.length; i < len; i++) {
          if (titles[i].title.includes(keyword)) {
            if (!idList.includes(titles[i].id)) {
              idList.push(titles[i].id);
            }
          }
        }
      });
      console.log(idList);
      if (idList.length > 10) {
        const newIdList = await breackArray(idList, 10);
        console.log(newIdList);
        // querySales(idList);
      } else {
        console.log(idList);
        // querySales(idList);
      }
    }
  }

  function enterPress(e) {
    if (query) {
      if (e.key === "Enter") serch();
    }
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

async function breackArray(originalArray, long) {
  let arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos

  const LONGITUD_PEDAZOS = long; // Partir en arreglo de 3
  for (let i = 0; i < originalArray.length; i += LONGITUD_PEDAZOS) {
    let pedazo = originalArray.slice(i, i + LONGITUD_PEDAZOS);
    arregloDeArreglos.push(pedazo);
    if (originalArray.length < i + LONGITUD_PEDAZOS) {
      return arregloDeArreglos;
    }
  }
  console.log("Arreglo de arreglos: ", arregloDeArreglos);
}
