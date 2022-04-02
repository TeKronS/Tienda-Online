import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findDataSales } from "./../../firebase/fire-data-base";
import {
  SaleDocBody,
  Title,
  DocImgContainer,
  DataDocBody,
  DescriptionDocBody,
  ComentryBox,
  Price
} from "./styles";
import { DataSeller } from "./data-seller/DataSeller";
import { SlideShow } from "./../../Components/Slider/Slideshow";

//----------------------------------------
export const SaleDoc = ({ user }) => {
  const [doc, setDoc] = useState(null);
  const { docId } = useParams();

  //--------------------------------------
  useEffect(() => {
    if (user) {
      findDataSales(docId, setDoc, user.uid);
    } else {
      findDataSales(docId, setDoc);
    }
  }, [user, docId]);

  const description = doc ? doc.description.match(/([^\r\n]+|\n|\r\n)/g) : 0;

  return !doc ? (
    <h2>nada</h2>
  ) : (
    <SaleDocBody>
      <Title className={"box"}>
        <span>{doc.title}</span>
      </Title>
      <DataSeller userId={doc.uid} />
      <DocImgContainer className={"box"}>
        <SlideShow
          img={doc.imgURL}
          autoplay={true}
          velocidad={2000}
        ></SlideShow>
      </DocImgContainer>
      <DataDocBody className={"box"}>
        <div>
          <Price>
            USD <span>{doc.price}</span>
          </Price>
          <span>
            Estado: <span>{doc.state}</span>
          </span>
          <span>
            Cantidad Disponible: <span>{doc.amount}</span>
          </span>
          <span>
            <span>Envio Gratis </span>
          </span>
        </div>
        <button>COMPRAR</button>
      </DataDocBody>
      <DescriptionDocBody className={"box"}>
        <h3>Descripción</h3>
        <p className={"box"}>
          {description.map((value) => {
            if (value === "\n") {
              return <br />;
            } else {
              return value;
            }
          })}
        </p>
      </DescriptionDocBody>
      <ComentryBox className={"box"}>
        <h3>Comentarios</h3>
        <div className={"box"}></div>
      </ComentryBox>
    </SaleDocBody>
  );
};
