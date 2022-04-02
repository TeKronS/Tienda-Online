import { useState, useEffect } from "react";
import { DataSellerBody } from "./styles";
import {
  findDataUser,
  findHiddenUserData,
} from "./../../../firebase/fire-data-base";
import { Link } from "react-router-dom";

export const DataSeller = ({ userId }) => {
  const [dataSeller, setDataSeller] = useState(null);

  useEffect(() => {
    findDataUser({ uid: userId }, setDataSeller);
    findHiddenUserData({ uid: userId });
  }, []);

  return dataSeller ? (
    <DataSellerBody className={"box"}>
      <h3>Vendedor</h3>
      <div>
        <span>{dataSeller.userName}</span>
        <span>
          Ubicación: <span>{dataSeller.city}</span>
        </span>
        <span>
          Reputacion:
          <span> {(dataSeller.goodNote - dataSeller.badNote) / 2}%</span>
        </span>
        <span>
          Ventas Concretadas: <span>{dataSeller.itemsSold}</span>
        </span>
        <Link to="/">
          <span>Otras Ventas</span>
        </Link>
      </div>
    </DataSellerBody>
  ) : (
    <DataSellerBody className={"box"}>
      <span>Datos Vendedor</span>
      <span>Nombre</span>
      <span>Ciudad</span>
      <span>Reputacion</span>
      <span>Ventas Concretadas</span>
      <span>Otras Ventas</span>
    </DataSellerBody>
  );
};
