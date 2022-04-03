import { useEffect, useState } from "react";
import { BodyShop, Body } from "./Styles/stylesComponents";
import { Switch, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Home } from "./pages/home/Home";
import { Footer } from "./footer/footer";
import { Login } from "./pages/login/Login-firebase";
import { RestorePassPage } from "./pages/restorePass/RestorePassPage";
import { SerchSales } from "./pages/serch/serch-Sales";
import { Profile } from "./pages/profile/Profile";
import { SellForm } from "./pages/sell-Form/Sell-Form";
import { Registration } from "./pages/registration/Registration.js";
import { SaleDoc } from "./pages/sale/SaleDoc";
import {
  signInWithEmailAndPasswords,
  signOuts,
  onAuthStateChangeds,
} from "./firebase/firebase-config";

//------------------------------
export const ShopApp = () => {
  const [user, setUser] = useState(null);
  //-----------------------------------
  useEffect(() => {
    onAuthStateChangeds(setUser);
  }, []);

  async function logIn(email, pass) {
    const dataUser = await signInWithEmailAndPasswords(email, pass);
    if (dataUser) {
      setUser(dataUser);
      return true;
    } else {
      return false;
    }
  }

  function logOut() {
    signOuts()
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  }

  //----------------------------------
  return (
    <Body>
      <Header user={user} logOut={logOut} />
      <BodyShop>
        <Switch>
          <Route path="/SingIn">
            <Registration user={user} />
            <Footer />
          </Route>
          <Route path="/LogIn">
            <Login logIn={logIn} userLogin={user} />
            <Footer />
          </Route>
          <Route path="/Profile">
            <Profile user={{ data: user, setState: setUser }} />
            <Footer />
          </Route>
          <Route path="/RestorePass">
            <RestorePassPage user={user} />
            <Footer />
          </Route>
          <Route path="/Sell">
            <SellForm user={user} />
            <Footer />
          </Route>
          <Route path="/Sales/:docId">
            <SaleDoc user={user} />
            <Footer />
          </Route>
          <Route path="/Sales">
            <SerchSales user={user} />
          </Route>
          <Route path="/">
            <Home user={user} />
            <Footer />
          </Route>
        </Switch>
      </BodyShop>
    </Body>
  );
};
