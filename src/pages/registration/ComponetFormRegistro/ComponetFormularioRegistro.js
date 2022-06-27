import { useState, useRef, useEffect } from "react";
import {
  BodyInputRegistro,
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  BoXSelect,
} from "./StylesElementRegistro.js";
import { CitysSelect } from "../../../Components/CitysSelect/CitysSelect";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponenteInput } from "./InputRegistro";
import { RegisterWithEmailAndPass } from "./../../../firebase/firebase-config";
import { useHistory } from "react-router-dom";
//---
const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{6,12}$/, // 6 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\++?\d{9,14}$/, // 9 a 14 numeros.
};
//---
export const RegistrationForm = ({ user }) => {
  //---
  let history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  });

  //---
  function redirect() {
    history.push("/Login");
  }
  //--
  const refButtom = useRef(null);
  //--
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [ciudad, setCiudad] = useState({ campo: "", valido: null });
  const [terminos, setTerminos] = useState(false);
  const [formularioValido, setFormularioValido] = useState(null);

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };
  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      correo.valido === "true" &&
      usuario.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      telefono.valido === "true" &&
      ciudad.valido === "true" &&
      terminos
    ) {
      RegisterWithEmailAndPass(correo.campo, password.campo, {
        name: `${nombre.campo} ${apellido.campo}`,
        userName: usuario.campo,
        phone: telefono.campo,
        city: ciudad.campo,
      })
        .then((response) => {
          if (response === null) restoreButton();
          else redirect();
        })
        .catch(restoreButton);
      refButtom.current.style.opacity = "0.5";
      refButtom.current.style.pointerEvents = "none";

      // resetValues();
    } else {
      setFormularioValido(false);
    }
  };

  function restoreButton(error) {
    refButtom.current.style.opacity = "1";
    refButtom.current.style.pointerEvents = "auto";
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    alert(errorMessage);
  }

  // function resetValues() {
  //   setFormularioValido(true);
  //   setNombre({ campo: "", valido: null });
  //   setApellido({ campo: "", valido: null });
  //   setCorreo({ campo: "", valido: null });
  //   setUsuario({ campo: "", valido: "" });
  //   setPassword({ campo: "", valido: null });
  //   setPassword2({ campo: "", valido: null });
  //   setTelefono({ campo: "", valido: null });
  //   setCiudad({ campo: "", valido: null });
  //   setTerminos(false);
  // }

  return (
    <BodyInputRegistro>
      <Formulario action="" onSubmit={onSubmit}>
        <ComponenteInput
          type="text"
          label="Nombre"
          placeholder="Nombre"
          name="Nombre"
          leyendaError="El nombre solo puede tener letras y espacios."
          expresionRegular={expresiones.nombre}
          estado={nombre}
          cambiarEstado={setNombre}
        />
        <ComponenteInput
          type="text"
          label="Apellido"
          placeholder="Apellido"
          name="Apellido"
          leyendaError="El nombre solo puede tener letras y espacios."
          expresionRegular={expresiones.nombre}
          estado={apellido}
          cambiarEstado={setApellido}
        />
        <ComponenteInput
          type="email"
          label="Correo Electonico"
          placeholder="pablo@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
          estado={correo}
          cambiarEstado={setCorreo}
        />
        <ComponenteInput
          type="text"
          label="Nombre de Usuario"
          placeholder="Nombre de Usuario"
          name="Nombre de Usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
          expresionRegular={expresiones.usuario}
          estado={usuario}
          cambiarEstado={setUsuario}
        />
        <ComponenteInput
          type="password"
          label="Contraseña"
          placeholder="Contraseña"
          name="password1"
          leyendaError="La contraseña tiene que ser de 6 a 12 digitos."
          expresionRegular={expresiones.password}
          estado={password}
          cambiarEstado={setPassword}
        />
        <ComponenteInput
          type="password"
          label="Repetir Contraseña"
          placeholder="Contraseña"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales."
          estado={password2}
          cambiarEstado={setPassword2}
          funcion={validarPassword2}
        />

        <ComponenteInput
          type="text"
          label="Telefono"
          placeholder="4491234567"
          name="telefono"
          leyendaError="El telefono debe comenzar con el signo +, y luego contener de 9 a 14 numeros."
          expresionRegular={expresiones.telefono}
          estado={telefono}
          cambiarEstado={setTelefono}
        />
        {/* <ComponenteInput
          type="text"
          label="Ciudad"
          placeholder="Ciudad"
          name="Ciudad"
          leyendaError="El nombre solo puede tener letras y espacios."
          expresionRegular={expresiones.nombre}
          estado={ciudad}
          cambiarEstado={setCiudad}
        /> */}
        <BoXSelect>
          <Label valido={ciudad.valido} htmlFor={"Ciudad"}>
            Ciudad
          </Label>
          <CitysSelect estado={ciudad} cambiarEstado={setCiudad} />
        </BoXSelect>
        <ContenedorTerminos>
          <Label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>
        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b>Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton ref={refButtom} type="submit">
            Registrar
          </Boton>
          {formularioValido === true && (
            <MensajeExito>Formulario enviado exitosamente</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </BodyInputRegistro>
  );
};
