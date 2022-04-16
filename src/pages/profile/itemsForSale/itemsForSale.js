import { useEffect, useState } from "react";
import { findDataSale, deleteData } from "./../../../firebase/fire-data-base";
import { Body, Item, Img, Title } from "./styles";
import { Link } from "react-router-dom";
import { querySales } from "./../../../firebase/firebase-querys";

export const ItemsForSale = ({ items }) => {
  const [itemsForSale, setItemsForSale] = useState([]);
  useEffect(() => {
    let mount = true;
    createListItemQuery(items).then((list) => {
      querySales(list).then(async (response) => {
        const listItem = await createListItem(response);
        if (listItem.length && mount) setItemsForSale(listItem);
      });
    });

    return () => {
      mount = false;
    };
  }, []);
  return (
    <Body>
      {itemsForSale ? (
        itemsForSale.map((doc) => {
          return (
            <Item key={doc.id} className={"box"}>
              <Title>
                <Link to={`/Sale/${doc.id}`}>{doc.title}</Link>
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

async function createListItem(listQuery) {
  const sellList = [];
  let i = 0;

  while (i < listQuery.docs.length) {
    const doc = listQuery.docs[i];
    const data = { id: doc.id, ...doc.data() };
    sellList.push(data);
    i++;
  }

  return sellList;
}

async function createListItemQuery(listQuery) {
  const list = [];
  let i = 0;

  while (i < listQuery.length) {
    const id = listQuery[i];
    list.push(id);
    i++;
  }

  return list;
}
