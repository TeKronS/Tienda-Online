import { BodyInfoBanner, Title, Info } from "./styles";

export const BannerInfo = () => {
  return (
    <BodyInfoBanner>
      <Title>Proyecto Tenda Online</Title>
      <Info>
        <span className="label">Hecho por:</span>
        <span className="content"> Simon Enrique Ramirez Ferrer</span>
      </Info>
      <Info>
        <span className="label">GitHub: </span>
        <span className="content">
          <a href="https://github.com/TeKronS/" target={"blank"}>
            https://github.com/TeKronS/
          </a>
        </span>
      </Info>
      <Info>
        <span className="label">Facebook: </span>
        <span className="content">
          <a
            href="https://www.facebook.com/simonenrique.ramirezferrer"
            target={"blank"}
          >
            https://www.facebook.com/simonenrique.ramirezferrer
          </a>
        </span>
      </Info>
      <Info>
        <span className="label">GitHub: </span>
        <span className="content">
          <a href="https://github.com/TeKronS/" target={"blank"}>
            https://github.com/TeKronS/
          </a>
        </span>
      </Info>
    </BodyInfoBanner>
  );
};
