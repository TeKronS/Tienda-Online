import { useState } from "react";
import { BodyInputLogin } from "./../login/styles";
import { Button } from "./../../Styles/stylesComponents";

export const RestorePassPage = () => {
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  function onChangePass(e) {
    setPass(e.target.value);
  }
  function onChangePass2(e) {
    setPass2(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    // logIn(user, pass);
    setPass("");
    setPass2("");
  }
  return (
    <BodyInputLogin>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor={"pass"}>Contraseña Nueva</label>
          <input
            onChange={onChangePass}
            type={"password"}
            id={"pass"}
            name={"password"}
            value={`${pass}`}
            required
          />
        </div>
        <div>
          <label htmlFor={"pass2"}>Confirma la Contraseña </label>
          <input
            onChange={onChangePass2}
            type={"password"}
            id={"pass2"}
            name={"password2"}
            value={`${pass2}`}
            required
          />
        </div>
        <Button>Cambiar</Button>
      </form>
    </BodyInputLogin>
  );
};
