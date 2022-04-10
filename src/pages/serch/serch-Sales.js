import { useState, useEffect, useRef } from "react";
import { querySales } from "./../../firebase/firebase-querys";
import { FilterSection } from "./filter/FilterSection";
import { Link, useParams } from "react-router-dom";
import {
  ItemSerch,
  SalesBody,
  TextItemContainer,
  ItemSerchImgContainer,
} from "./styles";
//------------------------
export const SerchSales = ({ titles }) => {
  const refFilter = useRef(null);
  const [ventas, setVentas] = useState(null);
  const refSerchBody = useRef(null);
  const { docId } = useParams();

  useEffect(() => {
    async function serch() {
      const docList = await getListID(docId, titles).then((result) => {
        return result;
      });

      async function getQuery() {
        const promises = docList.map(querySales);
        const results = await Promise.all(promises);

        createListItem(results).then(setVentas);
      }

      if (docList) getQuery();
    }
    serch();
  }, [docId, titles]);

  //------------
  function showFilter() {
    refFilter.current.classList.toggle("desplegeFilter");
  }

  //---------------
  return (
    <>
      <FilterSection showFilter={showFilter} innerRef={refFilter} />

      <SalesBody ref={refSerchBody}>
        {ventas ? (
          ventas.map((data) => {
            return (
              <ItemSerch key={data.id} className={"box"}>
                <ItemSerchImgContainer>
                  <img
                    alt={""}
                    src={data.imgURL[0]}
                    loading={"lazy"}
                    height={"150"}
                  />
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
                <Link to={`/Sale/${data.id}`} />
              </ItemSerch>
            );
          })
        ) : (
          <>
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
            <ItemSerch className={"box"} />
          </>
        )}
      </SalesBody>
    </>
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
      return [idList];
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
