import { BodyCard, Img, Title, Price } from "./styles";
import { Link } from "react-router-dom";

export const FlexCard = ({ data, area }) => {
  return (
    <BodyCard style={{ gridArea: `area${area + 1}` }}>
      <Img loading={"lazy"} alt="" src={data.imgURL[0]} />
      <Title className="title">
        <Link to={`Sale/${data.id}`} />
        <span>{data.title}</span>
      </Title>
      <Price className="price">
        <span>{data.price} USD</span>
      </Price>
    </BodyCard>
  );
};
