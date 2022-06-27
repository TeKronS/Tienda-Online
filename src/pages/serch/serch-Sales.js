import { useState, useEffect, useRef } from "react";
import { querySales } from "./../../firebase/firebase-querys";
import { FilterSection } from "./filter/FilterSection";
import { Link, useParams } from "react-router-dom";
import { OrderBar } from "./../../Components/OrderBar/OrderBar";
import {
  ItemSerch,
  SalesBody,
  TextItemContainer,
  ItemSerchImgContainer,
  NoResult,
} from "./styles";
//------------------------
export const SerchSales = ({ titles }) => {
  const { docId } = useParams();
  const refSerchSection = useRef(null);
  const refSerchBody = useRef(null);
  const query = useRef(null);
  const [ventas, setVentas] = useState(null);
  const [nameOrder, setNameOrden] = useState(null);
  const [priceOrder, setPriceOrden] = useState(null);
  const [filter, setFilter] = useState({
    state: null,
    minPrice: null,
    maxPrice: null,
    category: null,
    subCategory: null,
    city: [],
  });

  useEffect(() => {
    async function serch() {
      const docList = await getListID(docId, titles).then((result) => {
        return result;
      });

      async function getQuery() {
        const promises = docList.map(querySales);
        const results = await Promise.all(promises);
        createListItem(results).then((response) => {
          if (response.length) {
            query.current = response;
            setVentas(response);
          } else {
            setVentas(false);
          }
        });
      }
      if (docList) {
        getQuery();
      } else {
        setVentas(false);
      }
    }
    if (titles) serch();
    setNameOrden(null);
    setPriceOrden(null);
  }, [docId, titles]);

  //------------
  function showFilter() {
    refSerchSection.current.classList.toggle("desplegeFilter");
  }
  const articles =
    ventas &&
    ventas
      .sort(function (a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (nameOrder) {
          return x < y ? -1 : x > y ? 1 : 0;
        } else if (nameOrder === false) {
          return x > y ? -1 : x < y ? 1 : 0;
        } else {
          return 0;
        }
      })
      .sort(function (a, b) {
        if (priceOrder) {
          return a.price - b.price;
        } else if (priceOrder === false) {
          return b.price - a.price;
        } else {
          return 0;
        }
      });
  //---------------
  function filterResult({
    state,
    minPrice,
    maxPrice,
    category,
    subCategory,
    city,
  }) {
    let newVentas = query.current.slice();
    let newFilter = {};

    if (state) {
      newVentas = newVentas.filter((doc) => doc.state === state);
      newFilter = { ...filter, state: state };
    } else if (state === false) {
      newFilter = { ...filter, state: null };
    } else {
      if (filter.state) {
        newVentas = newVentas.filter((doc) => doc.state === filter.state);
      }
    }

    if (filter.minPrice > 0 || minPrice > 0) {
      if (minPrice > 0) {
        newVentas = newVentas.filter((doc) => doc.price >= minPrice);
        newFilter = { ...filter, minPrice: minPrice };
      } else {
        newVentas = newVentas.filter((doc) => doc.price >= filter.minPrice);
      }
    }

    if (filter.maxPrice > 0 || maxPrice > 0) {
      if (maxPrice > 0) {
        newVentas = newVentas.filter((doc) => doc.price <= maxPrice);
        newFilter = { ...filter, maxPrice: maxPrice };
      } else {
        newVentas = newVentas.filter((doc) => doc.price <= filter.maxPrice);
      }
    }

    if (category) {
      newVentas = newVentas.filter((doc) => doc.category === category);
      newFilter = { ...filter, category: category };
    } else if (category === false) {
      newFilter = { ...filter, category: null };
    } else {
      if (filter.category) {
        newVentas = newVentas.filter((doc) => doc.category === filter.category);
      }
    }

    if (subCategory) {
      newVentas = newVentas.filter((doc) => doc.subCategory === subCategory);
      newFilter = { ...filter, subCategory: subCategory };
    } else if (subCategory === false) {
      newFilter = { ...filter, subCategory: null };
    } else {
      if (filter.subCategory) {
        newVentas = newVentas.filter(
          (doc) => doc.subCategory === filter.subCategory
        );
      }
    }

    if (city) {
      let newCity = filter.city.slice();
      if (newCity.includes(city)) {
        newCity = newCity.filter((location) => location !== city);
      } else {
        newCity.push(city);
      }
      if (newCity.length) {
        let i = 0;
        let newfilterCity = [];
        while (i < newCity.length) {
          let list = newVentas.slice();
          list = list.filter((doc) => doc.city === newCity[i]);
          newfilterCity = newfilterCity.concat(list);
          i++;
        }
        newVentas = newfilterCity;
      }

      newFilter = { ...filter, city: newCity };
    } else {
      if (filter.city.length) {
        let i = 0;
        let newfilterCity = [];
        while (i < filter.city.length) {
          let list = newVentas.slice();
          list = list.filter((doc) => doc.city === filter.city[i]);
          newfilterCity.concat(list);
          i++;
        }
        newVentas = newfilterCity;
      }
    }

    setFilter(newFilter);
    setVentas(newVentas);
  }
  //-------------
  return (
    <section ref={refSerchSection} className="desplegeFilter">
      <FilterSection
        filter={filter}
        showFilter={showFilter}
        filterResult={filterResult}
      />
      <OrderBar
        nameOrder={nameOrder}
        setNameOrden={setNameOrden}
        priceOrder={priceOrder}
        setPriceOrden={setPriceOrden}
      />
      <SalesBody ref={refSerchBody}>
        {articles ? (
          articles.map((data) => {
            return (
              <ItemSerch key={data.id} className={"box"}>
                <ItemSerchImgContainer>
                  <img
                    alt={""}
                    src={data.imgURL[0]}
                    loading={"lazy"}
                    height={"150"}
                  />
                  <Link to={`/Sale/${data.id}`} />
                </ItemSerchImgContainer>

                <TextItemContainer>
                  <h3>
                    <Link to={`/Sale/${data.id}`}>{`${data.title}`}</Link>
                  </h3>
                  <p>
                    Precio: <span>{`$${data.price}`}</span>
                  </p>
                  <p>
                    Estado: <span>{`${data.state}`}</span>
                  </p>
                  <p>
                    Ciudad: <span>{`${data.city}`} </span>
                  </p>
                  <p>
                    <span>°°Envio Gratis°°</span>
                  </p>
                </TextItemContainer>
              </ItemSerch>
            );
          })
        ) : ventas === null ? (
          <>
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
          </>
        ) : (
          <NoResult>"No se encontraron resultados"</NoResult>
        )}
      </SalesBody>
    </section>
  );
};

async function getListID(docId, titles) {
  if (docId && titles) {
    const serch = docId.toLowerCase();
    const keywords = serch.split(" ");
    const idList = await filterID(keywords, titles).then((result) => {
      return result;
    });

    if (idList.length > 10) {
      const newIdList = await breackArray(idList, 10).then((result) => {
        return result;
      });
      return newIdList;
    } else {
      if (idList.length) return [idList];
      else return null;
    }
  } else {
    return null;
  }
}

async function filterID(keywords, titles) {
  let idList = [];
  let i = 0;

  while (i < keywords.length) {
    const serchWord = keywords[i];
    let num = 0;
    if (serchWord !== "") {
      while (num < titles.length) {
        const titleWord = titles[num].title.toLowerCase();
        const titleID = titles[num].id;
        if (titleWord.includes(serchWord)) {
          if (!idList.includes(titleID)) {
            idList.push(titleID);
          }
        }
        num++;
      }
    }
    i++;
  }
  return idList;
}
async function breackArray(originalArray, long) {
  let arregloDeArreglos = [];
  let i = 0;

  while (i < originalArray.length) {
    let pedazo = originalArray.slice(i, i + long);
    arregloDeArreglos.push(pedazo);
    i += long;
  }
  return arregloDeArreglos;
}

async function createListItem(listQuery) {
  const sellList = [];
  let i = 0;
  while (i < listQuery.length) {
    const responseQuery = listQuery[i].docs;
    let num = 0;
    while (num < responseQuery.length) {
      const doc = responseQuery[num];
      const data = { id: doc.id, ...doc.data() };
      sellList.push(data);
      num++;
    }

    i++;
  }
  return sellList;
}
