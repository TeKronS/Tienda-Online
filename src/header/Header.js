import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SerchBarrComponent } from "./SearchBarrSection";
import { BurgerComponent } from "./Burger";
import {
  HeaderShop,
  ButonLogin,
  UserName,
  Logo,
  UserSection,
  BoxUser,
  NavigationBarr,
  Options,
  UserImg,
} from "./styles";
import logo from "./../img/LOGO.png";
//----------------------------------------------
export const Header = ({ user, logOut }) => {
  const refHeader = useRef(null);
  const refUser = useRef(null);
  useEffect(() => {
    refHeader.current.style.top = "0px";
    let prevScrollpos = window.pageYOffset;
    function scrolin() {
      const windowHeight = window.innerHeight;
      const currentScrollPos = window.pageYOffset;
      if (windowHeight <= 600 && windowHeight > 400) {
        const headerTop = parseInt(refHeader.current.style.top, 10);
        const scroll = prevScrollpos - currentScrollPos;
        const newTop = headerTop + scroll;
        if (prevScrollpos < currentScrollPos) {
          refUser.current.classList.add("menu");
          if (newTop <= -130) {
            refHeader.current.style.top = `-130px`;
          } else {
            refHeader.current.style.top = `${headerTop + scroll}px`;
          }
        } else {
          if (newTop >= 0) {
            refHeader.current.style.top = `0px`;
          } else {
            refHeader.current.style.top = `${headerTop + scroll}px`;
          }
        }
      } else {
        refHeader.current.style.top = `0px`;
      }
      prevScrollpos = currentScrollPos;
    }
    window.addEventListener("scroll", scrolin);
    return () => {
      window.removeEventListener("scroll", scrolin);
    };
  }, []);
  function burgerClick(setDesplege) {
    if (refUser.current.classList.contains("menu")) {
      refUser.current.classList.remove("menu");
    } else {
      refUser.current.classList.add("menu");
    }
  }
  function menuHidde(e) {
    const target = e.target.tagName;
    if (target === "A") refUser.current.classList.add("menu");
  }
  return (
    <HeaderShop id={"header"} ref={refHeader}>
      <Logo>
        <Link to="/">
          <img alt={""} src={logo} />
        </Link>
      </Logo>
      <SerchBarrComponent />

      <UserSection onClick={menuHidde}>
        <BurgerComponent burgerClick={burgerClick} />
        {!user ? (
          <ButonLogin ref={refUser} className={"menu"}>
            <Link to="/LogIn">Iniciar</Link>
            <Link to="/SingIn">Registrarse</Link>
          </ButonLogin>
        ) : (
          <BoxUser ref={refUser} className={"menu"}>
            <Options>
              <Link to="/Profile">Perfil</Link>
              <Link onClick={logOut} to="/Sales">
                Desconectar
              </Link>
            </Options>

            <UserImg>
              <img alt={""} src={user.photoURL} />
            </UserImg>
            <UserName>{user.userName}</UserName>
          </BoxUser>
        )}
      </UserSection>
      <NavigationBarr>
        {user && <Link to="/Sell">VENDER</Link>}
        <Link to="/">HOME</Link>
      </NavigationBarr>
    </HeaderShop>
  );
};
