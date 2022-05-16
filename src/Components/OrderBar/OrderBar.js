import { OrderBox } from "./styles";

export const OrderBar = ({
  nameOrder,
  setNameOrden,
  priceOrder,
  setPriceOrden,
}) => {
  //------------------------------------

  function changedNameOrder(e) {
    if (e.target.children[0]) {
      if (nameOrder) {
        e.target.children[0].innerHTML = "▲";
        setNameOrden(false);
      } else {
        e.target.children[0].innerHTML = "▼";
        setNameOrden(true);
      }
    }
  }
  //------------------------------------

  function changedPriceOrder(e) {
    if (e.target.children[0]) {
      if (priceOrder) {
        e.target.children[0].innerHTML = "▲";
        setPriceOrden(false);
      } else {
        e.target.children[0].innerHTML = "▼";
        setPriceOrden(true);
      }
    }
  }
  //------------------------------------

  return (
    <OrderBox className={"box"}>
      <span>Ordenar por:</span>
      <button onClick={changedNameOrder}>
        Nombre
        <div>◯</div>
      </button>
      <button onClick={changedPriceOrder}>
        Precio
        <div>◯</div>
      </button>
    </OrderBox>
  );
};
