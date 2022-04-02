import { useEffect, useState } from "react";
import { findDataSale } from "./../../../firebase/fire-data-base";
import { Body, Item, Img, Title } from "./styles";
import { Link } from "react-router-dom";

export const ItemsForSale = ({ items }) => {
  const [itemsForSale, setItemsForSale] = useState([]);
  useEffect(() => {
    let mount = true;

    async function ciclo() {
      let newItemForSale = [];
      for (let i = 0; i < items.length; i++) {
        await findDataSale(items[i]).then((doc) => {
          newItemForSale.push(doc);
        });
      }
      if (mount) {
        setItemsForSale(newItemForSale);
      }
    }
    ciclo();
    return () => {
      mount = false;
    };
  }, []);
  return (
    <Body>
      {itemsForSale ? (
        itemsForSale.map((doc, key) => {
          console.log(3);
          return (
            <Item key={key} className={"box"}>
              <Title>
                <Link to={`/Sales/${items[key]}`}>{doc.title}</Link>
                <span>{doc.price} USD</span>
              </Title>
              <Img>
                <img alt={""} src={doc.imgURL[0]} height={140} />
              </Img>
            </Item>
          );
        })
      ) : (
        <span></span>
      )}
    </Body>
  );
};
