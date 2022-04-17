import { useEffect, useState } from "react";
import { Body } from "./styles";
import { querySales } from "./../../../firebase/firebase-querys";
import { Card } from "../../../Components/cards/cardProfile/Card";
import { deleteSell } from "./../../../firebase/fire-data-base";

export const ItemsForSale = ({ user }) => {
  const [itemsForSale, setItemsForSale] = useState([]);

  useEffect(() => {
    let mount = true;
    if (user.data.itemsForSale.length) {
      querySales(user.data.itemsForSale)
        .then(async (response) => {
          const listItem = await createListItem(response);
          if (listItem.length && mount) setItemsForSale(listItem);
        })
        .catch(() => {
          setItemsForSale([]);
        });
    } else {
      setItemsForSale([]);
    }

    return () => {
      mount = false;
    };
  }, [user]);

  async function deleteItemForSale(id) {
    const newListItem = user.data.itemsForSale
      .slice()
      .filter((key) => key !== id);

    deleteSell(id, user.data.uid, { itemsForSale: newListItem }).then(() => {
      user.setState({ ...user.data, itemsForSale: newListItem });
    });
  }

  return (
    <Body>
      {itemsForSale ? (
        itemsForSale.map((doc) => {
          return (
            <Card deleteFunction={deleteItemForSale} doc={doc} key={doc.id} />
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
