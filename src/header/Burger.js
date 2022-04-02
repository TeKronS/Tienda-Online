import { BurgerBox } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const BurgerComponent = ({ burgerClick }) => {
  return (
    <BurgerBox>
      <FontAwesomeIcon icon={faBars} size="2x" onClick={burgerClick} />
    </BurgerBox>
  );
};
