export const Location = ({ filterResult }) => {
  function handleClick(e) {
    const child = e.target.nextSibling;
    if (child.style.display === "" || child.style.display === "none") {
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }
  }

  function changeLocation(e) {
    const city = e.target.value;

    filterResult({ city: city });

    // if (e.target.checked) {
    //   const city = e.target.value;
    //   filterResult({ city: city });
    // } else {
    //   filterResult({ city: false });
    // }
  }

  return (
    <section>
      <h3 style={{ cursor: "pointer" }} onClick={handleClick}>
        Ubicación
      </h3>
      <div style={{ display: "none" }}>
        {state.map((location, key) => {
          return (
            <label key={key} htmlFor={location}>
              {location}
              <input
                onChange={changeLocation}
                id={location}
                value={location}
                type={"checkbox"}
              />
            </label>
          );
        })}
      </div>
    </section>
  );
};

const state = [
  "Amazonas",
  "Anzoategui",
  "Apure",
  "Aragua",
  "Barinas",
  "Bolívar",
  "Carabobo",
  "Cojedes",
  "Delta Amacuro",
  "Distrito Capital",
  "Falcón",
  "Guárico",
  "Lara",
  "Mérida",
  "Miranda",
  "Monagas",
  "Nueva Esparta",
  "Portuguesa",
  "Sucre",
  "Táchira",
  "Trujillo",
  "La Guaira",
  "Yaracuy",
  "Zulia",
];
