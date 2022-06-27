import { useState } from "react";
import { Item, Img, Title, DeleteButton } from "./styles";
import { Link } from "react-router-dom";
import { AlertBox } from "./../../AlertBox/AlertBox";

export const Card = ({ doc, deleteFunction }) => {
  const [isAtive, setActive] = useState(false);

  function deleteCard() {
    setActive(true);
  }

  function alertOption(response) {
    if (response === true) {
      deleteFunction(doc.id);
    }
    setActive(false);
  }

  return (
    <Item className={"box"}>
      <DeleteButton onClick={deleteCard}>Eliminar</DeleteButton>
      <Title>
        <Link to={`/Tienda-Online/Sale/${doc.id}`}>{doc.title}</Link>
        <span>{doc.price} USD</span>
      </Title>
      <Img>
        <img loading={"lazy"} alt={""} src={doc.imgURL[0]} height={140} />
      </Img>
      {isAtive && <AlertBox transitionFinish={alertOption} />}
    </Item>
  );
};
