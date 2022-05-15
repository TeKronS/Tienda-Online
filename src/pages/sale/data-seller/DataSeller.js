import { useState, useEffect } from "react";
import { DataSellerBody } from "./styles";
import { findDataUserSale } from "./../../../firebase/fire-data-base";

export const DataSeller = ({ userId }) => {
  const [dataSeller, setDataSeller] = useState(false);
  useEffect(() => {
    if (userId) {
      findDataUserSale(userId).then((response) => {
        if (response) setDataSeller(response);
      });
    }
  }, [userId]);

  return dataSeller ? (
    <DataSellerBody className={"box"}>
      <h3>Vendedor</h3>
      <div>
        <span>{dataSeller.userName}</span>
        <span>
          Ubicación:<span> {dataSeller.city}</span>
        </span>
        <span>
          Reputacion:
          <span> {(dataSeller.goodNote - dataSeller.badNote) / 2}%</span>
        </span>
        <span>
          Ventas Concretadas: <span>{dataSeller.itemsSold}</span>
        </span>
      </div>
    </DataSellerBody>
  ) : dataSeller === null ? (
    <DataSellerBody className={"box"}>
      <span>Error al Buscar los Datos</span>
    </DataSellerBody>
  ) : (
    <DataSellerBody className={"box"} />
  );
};
