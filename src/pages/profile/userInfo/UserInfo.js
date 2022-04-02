import { useState, useEffect } from "react";
import { EditInputs } from "./InputsEdit";
import {
  Ficha,
  ImageContainer,
  DataContainer,
  DataDiv,
  DataSpan,
  DivText,
  ButtonSection
} from "./styles";
import {
  updateData,
  updateHiddeData
} from "./../../../firebase/fire-data-base";
export const UserInfo = ({ user, hiddeData }) => {
  const [ifEdit, setifEdit] = useState(false);
  // const [nombre, setNombre] = useState({
  //   campo: user.data.displayName,
  //   valido: null
  // });
  const [usuario, setUsuario] = useState({
    campo: user.data.userName,
    valido: null
  });
  const [ciudad, setCiudad] = useState({ campo: user.data.city, valido: null });
  const [telefono, setTelefono] = useState({
    campo:
      hiddeData.hiddeData.phone === "Telefono no Encontrado"
        ? ""
        : hiddeData.hiddeData.phone,
    valido: null
  });
  const [directtion, setDirecttion] = useState({
    campo:
      hiddeData.hiddeData.direcction === "Agregue Dirección" ||
      hiddeData.hiddeData.direcction === null
        ? ""
        : hiddeData.hiddeData.direcction,
    valido: null
  });
  //--------------------------------
  useEffect(() => {
    setTelefono({
      campo:
        hiddeData.hiddeData.phone === "Telefono no Encontrado"
          ? ""
          : hiddeData.hiddeData.phone,
      valido: null
    });
    setDirecttion({
      campo:
        hiddeData.hiddeData.direcction === "Agregue Dirección" ||
        hiddeData.hiddeData.direcction === null
          ? ""
          : hiddeData.hiddeData.direcction,
      valido: null
    });
  }, [hiddeData]);
  //--------------------------------
  function onClickButton() {
    if (ifEdit) {
      setifEdit(false);
    } else {
      setifEdit(true);
    }
  }
  const newData = {
    userName: usuario.campo,
    city: ciudad.campo
  };

  const newHiddeData = {
    phone: telefono.campo,
    direcction: directtion.campo
  };

  const valido = [usuario.valido, ciudad.valido, telefono.valido];

  async function save() {
    if (valido.indexOf("false") < 0) {
      await updateData({
        collection: "Usuarios",
        uid: user.data.uid,
        data: newData
      }).catch(() => {
        return;
      });

      await updateHiddeData({ uid: user.data.uid, data: newHiddeData })
        .then(() => {
          hiddeData.setHiddeData({ ...hiddeData.hiddeData, ...newHiddeData });
        })
        .catch(() => {
          user.setState({ ...user.data, ...newData });
        });
      user.setState({ ...user.data, ...newData });

      setifEdit(false);
    }
  }

  return (
    <>
      <Ficha className={"animation"}>
        <ImageContainer>
          <img src={user.data.photoURL} height={200} alt={"UerPhoto"} />
        </ImageContainer>
        <DataContainer>
          <DataSpan>
            <DivText>
              <label>Nombre</label>
            </DivText>
            <DivText>
              <label>Correo</label>
            </DivText>
            <DivText>
              <label>Nombre de Usuario</label>
            </DivText>
            <DivText>
              <label>Ciudad</label>
            </DivText>
            <DivText>
              <label>Telefono</label>
            </DivText>
            <DivText>
              <label>Dirección</label>
            </DivText>
          </DataSpan>
          <DataSpan>
            <DivText>
              <span>:</span>
            </DivText>
            <DivText>
              <span>:</span>
            </DivText>
            <DivText>
              <span>:</span>
            </DivText>
            <DivText>
              <span>:</span>
            </DivText>
            <DivText>
              <span>:</span>
            </DivText>
            <DivText>
              <span>:</span>
            </DivText>
          </DataSpan>
          {ifEdit ? (
            <EditInputs
              user={user}
              hiddeData={hiddeData}
              data={{
                usuario,
                setUsuario,
                ciudad,
                setCiudad,
                telefono,
                setTelefono,
                directtion,
                setDirecttion
              }}
            />
          ) : (
            <DataDiv>
              <DivText>
                <span>{user.data.displayName} </span>
              </DivText>
              <DivText>
                <span>{user.data.email} </span>
              </DivText>
              <DivText>
                <span>{user.data.userName} </span>
              </DivText>
              <DivText>
                <span>{user.data.city} </span>
              </DivText>
              <DivText>
                <span>
                  {hiddeData.hiddeData.phone === ""
                    ? "Telefono no Encontrado"
                    : hiddeData.hiddeData.phone}
                </span>
              </DivText>
              <DivText>
                <span>
                  {hiddeData.hiddeData.direcction === ""
                    ? "Agregar Direccion"
                    : hiddeData.hiddeData.direcction}
                </span>
              </DivText>
            </DataDiv>
          )}
        </DataContainer>
      </Ficha>
      <ButtonSection>
        {ifEdit ? (
          <>
            <button onClick={onClickButton}> Cancelar </button>
            <button onClick={save}> Guardar </button>
          </>
        ) : (
          <button onClick={onClickButton}> Editar </button>
        )}
      </ButtonSection>
    </>
  );
};
