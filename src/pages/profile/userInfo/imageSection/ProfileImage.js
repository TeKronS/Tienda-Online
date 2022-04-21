import { ImageContainer } from "./styles";
import { InputImageChanged } from "./../../../../Components/InputImageChanged/InputImageChanged";

export const ProfileImage = ({ ifEdit, data }) => {
  return (
    <ImageContainer>
      <img src={data.image.campo} height={200} alt={""} />
      {ifEdit && <InputImageChanged setImage={data.setImage} />}
    </ImageContainer>
  );
};
