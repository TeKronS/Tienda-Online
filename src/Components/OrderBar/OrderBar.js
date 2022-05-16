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
        setNameOrden(false);
      } else {
        setNameOrden(true);
      }
    }
  }
  //------------------------------------

  function changedPriceOrder(e) {
    if (e.target.children[0]) {
      if (priceOrder) {
        setPriceOrden(false);
      } else {
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
        {nameOrder ? (
          <div>▼</div>
        ) : nameOrder === null ? (
          <div>◯</div>
        ) : (
          <div>▲</div>
        )}
      </button>
      <button onClick={changedPriceOrder}>
        Precio
        {priceOrder ? (
          <div>▼</div>
        ) : priceOrder === null ? (
          <div>◯</div>
        ) : (
          <div>▲</div>
        )}
      </button>
    </OrderBox>
  );
};
