import { BodyCard, ImageContainer, Price, Title } from "./styles";
import { Link } from "react-router-dom";
export const PopularCard = ({ data }) => {
  return (
    <BodyCard className="box">
      {data && (
        <>
          <Link to={`/Tienda-Online/Sale/${data.id}`} />
          <ImageContainer>
            <img alt="" src={data.imgURL[0]}></img>
          </ImageContainer>
          <Price>
            Precio: <span>{data.price} USD</span>
          </Price>
          <Title>
            <span>{data.title}</span>
          </Title>
        </>
      )}
    </BodyCard>
  );
};
