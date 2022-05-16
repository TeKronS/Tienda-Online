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
  const [ventas, setVentas] = useState(null);
  const [nameOrder, setNameOrden] = useState(null);
  const [priceOrder, setPriceOrden] = useState(null);

  useEffect(() => {
    async function serch() {
      const docList = await getListID(docId, titles).then((result) => {
        return result;
      });

      async function getQuery() {
        const promises = docList.map(querySales);
        const results = await Promise.all(promises);
        createListItem(results).then((response) => {
          if (response.length) setVentas(response);
          else {
            setVentas(false);
          }
        });
      }
      if (docList) {
        getQuery();
        setVentas(null);
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
  return (
    <section ref={refSerchSection} className="desplegeFilter">
      <FilterSection showFilter={showFilter} />
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
