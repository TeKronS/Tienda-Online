import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { findHiddenUserData } from "./../../firebase/fire-data-base";
import { UserInfo } from "./userInfo/UserInfo";
import { ProfileSection, Title, InfoVentas } from "./styles";
import { ItemsForSale } from "./itemsForSale/itemsForSale";
export const Profile = ({ user }) => {
  const [hiddeData, setHiddeData] = useState({
    phone: "",
    direcction: "",
  });
  let history = useHistory();
  if (!user.data) history.push("/Login");
  useEffect(() => {
    findHiddenUserData(user.data).then((response) => {
      setHiddeData({ ...hiddeData, ...response });
    });
  }, []);

  return (
    user.data && (
      <ProfileSection>
        <Title>[[[ PERFIL ]]]</Title>
        <UserInfo user={user} hiddeData={{ hiddeData, setHiddeData }} />
        <Title>[[[ VENTAS ]]]</Title>
        <InfoVentas>
          <span>
            Ventas Concretadas: <span>{user.data.itemsSold}</span>
          </span>
          <span>
            Reputacion:
            <span> {(user.data.goodNote - user.data.badNote) / 2}%</span>
          </span>
        </InfoVentas>
        <ItemsForSale items={user.data.itemsForSale} />
      </ProfileSection>
    )
  );
};
