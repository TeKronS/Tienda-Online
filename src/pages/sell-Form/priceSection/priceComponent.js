import { useState } from "react";
import { BoxPrice } from "./styles";
import { Input, Label } from "./../styles";

export const PriceComponent = ({ priceChanged, keyPress }) => {
  const [price, setPrice] = useState(0);
  function onPriceChanged(e) {
    const value = e.target.value;
    setPrice(value);
    priceChanged(value);
  }
  return (
    <BoxPrice onKeyPress={keyPress}>
      <Label>Precio</Label>
      <Input
        tabIndex={"-1"}
        placeholder={"Precio"}
        type={"number"}
        onChange={onPriceChanged}
      />
      {price > 0 ? (
        <p> El precio sera de ( {price} USD ) por Unidad </p>
      ) : (
        <p>Por favor coloque un Precio</p>
      )}
    </BoxPrice>
  );
};
