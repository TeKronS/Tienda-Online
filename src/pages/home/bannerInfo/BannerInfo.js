import { BodyInfoBanner, Title, Info, LinkImg, Text, Name } from "./styles";
import iconFB from "./../../../img/fb_icon_325x325.png";
import iconGit from "./../../../img/Github.png";
import iconPortafolio from "./../../../img/Portafolio.svg";

export const BannerInfo = () => {
  return (
    <BodyInfoBanner>
      <Title>Proyecto Tienda Online</Title>
      <Info>
        <span className="label">Hecho por:</span>
        <Name> Simon Enrique Ramirez Ferrer</Name>
      </Info>
      <Info>
        <span className="label">GitHub: </span>
        <div className="content">
          <Text>Codigo del Proyecto</Text>
          <LinkImg
            className="git"
            href="https://github.com/TeKronS/"
            target={"blank"}
          >
            <img height={55} alt="" src={iconGit} />
          </LinkImg>
        </div>
      </Info>
      <Info>
        <span className="label">Facebook: </span>
        <div className="content">
          <Text> Encuentrame en Facebook</Text>
          <LinkImg
            className="facebook"
            href="https://www.facebook.com/simonenrique.ramirezferrer"
            target={"blank"}
          >
            <img height={55} alt="" src={iconFB} />
          </LinkImg>
        </div>
      </Info>
      <Info>
        <span className="label">Portafolio: </span>
        <div className="content">
          <Text>Información Profesional</Text>
          <LinkImg
            className="portafolio"
            href="https://github.com/TeKronS/"
            target={"blank"}
          >
            <img height={41} alt="" src={iconPortafolio} />
          </LinkImg>
        </div>
      </Info>
    </BodyInfoBanner>
  );
};
