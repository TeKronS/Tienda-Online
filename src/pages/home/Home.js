import { Body } from "./styles";
import { PopularSection } from "./popular/Popular";
import { BannerInfo } from "./bannerInfo/BannerInfo";

export const Home = () => {
  return (
    <Body>
      <BannerInfo />
      <PopularSection />
    </Body>
  );
};
