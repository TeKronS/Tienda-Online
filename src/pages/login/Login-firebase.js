import { useEffect, useState, useRef } from "react";
import { BodyInputLogin } from "./styles";
import { Button } from "./../../Styles/stylesComponents";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//-------------------------------
export const Login = ({ logIn, userLogin }) => {
  let history = useHistory();
  const RefButton = useRef(null);
  useEffect(() => {
    if (userLogin) history.push("/Sales");
  }, [userLogin]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function onChangeUser(e) {
    setUser(e.target.value);
  }

  function onChangePass(e) {
    setPass(e.target.value);
  }

  async function handleSumbit(e) {
    e.preventDefault();
    RefButton.current.classList.toggle("disable");
    setUser("");
    setPass("");
    const ifLogin = await logIn(user, pass);
    if (!ifLogin) {
      RefButton.current.classList.toggle("disable");
    }
  }
  //--------------------------------
  return (
    <BodyInputLogin className={"box"}>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor={"email"}>Correo</label>
          <input
            onChange={onChangeUser}
            type={"email"}
            id={"email"}
            name={"email"}
            value={`${user}`}
            required
          />
        </div>
        <div>
          <label htmlFor={"pass"}>Contraseña </label>
          <input
            onChange={onChangePass}
            type={"password"}
            id={"pass"}
            name={"password"}
            value={`${pass}`}
            required
          />
        </div>
        <Button ref={RefButton}>Ingresar</Button>
      </form>

      <Link to="/RestorePass">Recuperar contraseña</Link>
      <Link to="/SingIn">Crear cuenta</Link>
    </BodyInputLogin>
  );
};
