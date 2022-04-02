import { useState, useEffect, useRef } from "react";
import { findSells } from "./../../firebase/fire-data-base";
import { FilterSection } from "./filter/FilterSection";
import { Link } from "react-router-dom";
import {
  ItemSerch,
  SalesBody,
  TextItemContainer,
  ItemSerchImgContainer
} from "./styles";
//------------------------
export const SerchSales = ({ user }) => {
  const refFilter = useRef(null);
  const [ventas, setVentas] = useState(null);
  const refSerchBody = useRef(null);

  useEffect(() => {
    findSells(user, setVentas);
  }, []);

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
          ventas.map((doc, key) => {
            const data = { id: doc.id, ...doc.data() };
            return (
              <ItemSerch key={key} className={"box"}>
                <ItemSerchImgContainer>
                  <img alt={""} src={data.imgURL[0]} height={"150"} />
                </ItemSerchImgContainer>

                <TextItemContainer>
                  <h3>
                    <Link to={`/Sales/${data.id}`}>{`${data.title}`}</Link>
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
                <Link to={`/Sales/${data.id}`} />
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
