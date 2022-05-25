import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findDataSales } from "./../../firebase/fire-data-base";
import {
  SaleDocBody,
  Title,
  DocImgContainer,
  DataDocBody,
  DescriptionDocBody,
  Price,
} from "./styles";
import { DataSeller } from "./data-seller/DataSeller";
import { SlideShow } from "./../../Components/Slider/Slideshow";
import { ComentarySection } from "./ComentarySection";
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
  function comprar() {
    alert("Función no Disponible");
  }
  return !doc ? (
    <SaleDocBody>
      <Title className={"box"}></Title>
      <DataSeller />
      <DocImgContainer className={"box"}></DocImgContainer>
      <DataDocBody className={"box"} />
      <DescriptionDocBody className={"box"}>
        <h3>Descripción</h3>
        <p className={"box"}></p>
      </DescriptionDocBody>
      <ComentarySection />
    </SaleDocBody>
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
        <button onClick={comprar}>COMPRAR</button>
      </DataDocBody>
      <DescriptionDocBody className={"box"}>
        <h3>Descripción</h3>
        <p className={"box"}>
          {description.map((value, key) => {
            if (value === "\n") {
              return <br key={key} />;
            } else {
              return value;
            }
          })}
        </p>
      </DescriptionDocBody>
      <ComentarySection docId={docId} docUid={doc.uid} user={user} />
    </SaleDocBody>
  );
};
