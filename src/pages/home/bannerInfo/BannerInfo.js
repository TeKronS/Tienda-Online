import { BodyInfoBanner, Title, Info, LinkImg, Text, Name } from "./styles";
import iconFB from "./../../../img/fb_icon_325x325.png";
import IconGit from "./../../../img/Github.png";

export const BannerInfo = () => {
  return (
    <BodyInfoBanner>
      <Title>Proyecto Tenda Online</Title>
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
            <img height={55} alt="" src={IconGit} />
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
        <span className="label">GitHub: </span>
        <div className="content">
          <Text>Codigo del Proyecto</Text>
          <LinkImg
            className="git"
            href="https://github.com/TeKronS/"
            target={"blank"}
          >
            <img height={55} alt="" src={IconGit} />
          </LinkImg>
        </div>
      </Info>
    </BodyInfoBanner>
  );
};
