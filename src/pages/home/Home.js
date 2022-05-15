import { Body } from "./styles";
import { PopularSection } from "./popular/Popular";
import { BannerInfo } from "./bannerInfo/BannerInfo";
import { RecientViewCategoryComponent } from "./recientViewCategory/RecientViewCategory";

export const Home = ({ user }) => {
  return (
    <Body>
      <BannerInfo />
      <PopularSection />
      <RecientViewCategoryComponent user={user} />
    </Body>
  );
};
