import { PriceSectionBody } from "./styles";

export const PriceSection = ({ filter, filterResult }) => {
  function changePriceMin(e) {
    const minPrice = e.target.value;
    filterResult({ minPrice: minPrice });
  }

  function changePriceMax(e) {
    const maxPrice = e.target.value;
    filterResult({ maxPrice: maxPrice });
  }

  return (
    <PriceSectionBody>
      <h3>Rango de Precio</h3>
      <label htmlFor={"min"}>Precio minimo</label>
      {filter.maxPrice > 1 ? (
        <input
          onChange={changePriceMin}
          id={"min"}
          type={"number"}
          placeholder={"20"}
          min={1}
          max={filter.maxPrice}
        />
      ) : (
        <input
          onChange={changePriceMin}
          id={"min"}
          type={"number"}
          placeholder={"20"}
          min={1}
          max={99999}
        />
      )}
      <label htmlFor={"max"}>Precio maximo</label>
      {filter.minPrice > 0 ? (
        <input
          onChange={changePriceMax}
          id={"max"}
          type={"number"}
          placeholder={"60"}
          min={filter.minPrice}
          max={99999}
        />
      ) : (
        <input
          onChange={changePriceMax}
          id={"max"}
          type={"number"}
          placeholder={"60"}
          min={1}
          max={99999}
        />
      )}
    </PriceSectionBody>
  );
};
