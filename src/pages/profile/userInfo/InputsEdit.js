import { DataDiv, DivText } from "./styles";
import { InputWhitRules } from "./../../../Components/Input/InputWhitRules";
import { CitysSelect } from "./../../../Components/CitysSelect/CitysSelect";
const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  telefono: /^\++?\d{9,14}$/, // 9 a 14 numeros.,
};

export const EditInputs = ({ user, hiddeData, data }) => {
  return (
    <DataDiv>
      <DivText>
        <span>{user.data.displayName}</span>
      </DivText>
      <DivText>
        <span>{user.data.email} </span>
      </DivText>
      <DivText>
        <InputWhitRules
          type="text"
          placeholder={user.data.userName}
          name="Nombre de Usuario"
          expresionRegular={expresiones.usuario}
          estado={data.usuario}
          cambiarEstado={data.setUsuario}
        />
      </DivText>
      <DivText>
        <CitysSelect estado={data.ciudad} cambiarEstado={data.setCiudad} />
        {/* <InputWhitRules
          type="text"
          placeholder={user.data.city}
          name="Ciudad"
          expresionRegular={expresiones.nombre}
          estado={data.ciudad}
          cambiarEstado={data.setCiudad}
        /> */}
      </DivText>
      <DivText>
        <InputWhitRules
          type="text"
          placeholder={hiddeData.hiddeData.phone}
          name="phone"
          expresionRegular={expresiones.telefono}
          estado={data.telefono}
          cambiarEstado={data.setTelefono}
        />
      </DivText>
      <DivText>
        <InputWhitRules
          type="text"
          placeholder={hiddeData.hiddeData.direcction}
          name="Directtion"
          estado={data.directtion}
          cambiarEstado={data.setDirecttion}
        />
      </DivText>
    </DataDiv>
  );
};
